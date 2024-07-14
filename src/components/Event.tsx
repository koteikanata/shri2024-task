import { useEffect, useRef } from 'react';

interface Props {
    onSize?: ({ width, height }: { width: number; height: number }) => void;
    slim?: boolean;
    icon: string;
    iconLabel: string;
    title: string;
    subtitle?: string;
}

const Event: React.FC<Props> = (props) => {
    const ref = useRef<HTMLLIElement | null>(null);

    const { onSize } = props;

    useEffect(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth;
            const height = ref.current.offsetHeight;
            if (onSize) {
                onSize({ width, height });
            }
        }
    }, [onSize]);

    return (
        <li ref={ref} className={`event${props.slim ? ' event_slim' : ''}`}>
            <button className="event__button">
                <span
                    className={`event__icon event__icon_${props.icon}`}
                    role="img"
                    aria-label={props.iconLabel}
                ></span>
                <h4 className="event__title">{props.title}</h4>
                {props.subtitle && <span className="event__subtitle">{props.subtitle}</span>}
            </button>
        </li>
    );
};

export default Event;