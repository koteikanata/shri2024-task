import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TABS } from '../constants';
import { Event } from './Event';

export const Devices = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [activeTab, setActiveTab] = useState('all');
    const [hasRightScroll, setHasRightScroll] = useState(false);
    const [sizes, setSizes] = useState<{ width: number; height: number }[]>([]);

    const onSelectInput = (event: ChangeEvent<HTMLSelectElement>) => {
        setActiveTab(event.target.value);
    };

    const onArrowCLick = () => {
        const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth',
            });
        }
    };

    const onSize = useCallback((size: { width: number; height: number }) => {
        setSizes((prevSizes) => [...prevSizes, size]);
    }, []);

    const TABS_KEYS = useMemo(() => Object.keys(TABS), []);

    useMemo(() => {
        const newTabs = { ...TABS };
        for (let i = 0; i < 6; ++i) {
            newTabs.all.items = [...newTabs.all.items, ...TABS.all.items];
        }
        return newTabs;
    }, []);

    useEffect(() => {
        const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
        const newHasRightScroll = sumWidth > (ref.current?.offsetWidth || 0);
        setHasRightScroll(newHasRightScroll);
    }, [sizes]);

    return (
        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">Избранные устройства</h2>

                <select className="section__select" defaultValue="all" onInput={onSelectInput}>
                    {TABS_KEYS.map((key) => (
                        <option key={key} value={key}>
                            {TABS[key].title}
                        </option>
                    ))}
                </select>

                <ul role="tablist" className="section__tabs">
                    {TABS_KEYS.map((key) => (
                        <li
                            key={key}
                            role="tab"
                            aria-selected={key === activeTab ? 'true' : 'false'}
                            tabIndex={key === activeTab ? 0 : undefined}
                            className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
                            id={`tab_${key}`}
                            aria-controls={`panel_${key}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {TABS[key].title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section__panel-wrapper" ref={ref}>
                {TABS_KEYS.map((key) => (
                    <div
                        key={key}
                        role="tabpanel"
                        className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')}
                        aria-hidden={key === activeTab ? 'false' : 'true'}
                        id={`panel_${key}`}
                        aria-labelledby={`tab_${key}`}
                    >
                        <ul className="section__panel-list">
                            {TABS[key].items.map((item, index) => (
                                <Event key={index} {...item} onSize={onSize} />
                            ))}
                        </ul>
                    </div>
                ))}
                {hasRightScroll && <div className="section__arrow" onClick={onArrowCLick}></div>}
            </div>
        </section>
    );
};
