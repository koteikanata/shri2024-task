import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TABS } from '../constants';
import { Event } from './Event';

for (let i = 0; i < 6; ++i) {
    TABS.all.j = [...TABS.all.j, ...TABS.all.j];
}
const TABS_KEYS = Object.keys(TABS);

export const Devices = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const initRef = useRef(false);
    const [activeTab, setActiveTab] = useState('');
    const [hasRightScroll, setHasRightScroll] = useState(false);

    useEffect(() => {
        if (!activeTab && !initRef.current) {
            initRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    }, [activeTab]);

    const onSelectInput = (event: ChangeEvent<HTMLSelectElement>) => {
        setActiveTab(event.target.value);
    };

    let sizes: Array<{ width: number; height: number }> = [];
    const onSize = (size: { width: number; height: number }) => {
        sizes = [...sizes, size];
    };

    useEffect(() => {
        const handleResize = () => {
            const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);
            const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0);

            const newHasRightScroll = sumWidth > (ref.current?.offsetWidth || 0);
            if (newHasRightScroll !== hasRightScroll) {
                requestAnimationFrame(() => {
                    setHasRightScroll(newHasRightScroll);
                });
            }
        };

        const idleCallback = requestIdleCallback(handleResize);

        return () => {
            cancelIdleCallback(idleCallback);
        };
    }, [sizes, hasRightScroll]);

    const onArrowClick = () => {
        const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">Избранные устройства</h2>

                <select className="section__select" defaultValue="all" onChange={onSelectInput}>
                    {TABS_KEYS.map((key) => (
                        <option key={key} value={key}>
                            {TABS[key].i}
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
                            {TABS[key].i}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section__panel-wrapper" ref={ref}>
                {TABS_KEYS.map((key) => {
                    if (key !== activeTab) {
                        return null;
                    }

                    return (
                        <div
                            key={key}
                            role="tabpanel"
                            className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')}
                            aria-hidden={key === activeTab ? 'false' : 'true'}
                            id={`panel_${key}`}
                            aria-labelledby={`tab_${key}`}
                        >
                            <ul className="section__panel-list">
                                {TABS[key].j.map((item, index) => (
                                    <Event key={index} {...item} onSize={onSize} />
                                ))}
                            </ul>
                        </div>
                    )
                })}
                {hasRightScroll && <div className="section__arrow" onClick={onArrowClick}></div>}
            </div>
        </section>
    );
};
