import { memo } from 'react';
import { Event } from './Event';

export const Scripts: React.FC = memo(() => {
    return (
        <section className="section main__scripts">
            <h2 className="section__title section__title-header">Избранные сценарии</h2>

            <ul className="event-grid">
                <Event slim={true} i="light2" j="Освещение" t="Выключить весь свет в доме и во дворе" />
                <Event slim={true} i="schedule" j="Расписание" t="Я ухожу" />
                <Event slim={true} i="light2" j="Освещение" t="Включить свет в коридоре" />
                <Event
                    slim={true}
                    i="temp2"
                    j="Температура"
                    t="Набрать горячую ванну"
                    s="Начнётся в 18:00"
                />
                <Event slim={true} i="temp2" j="Температура" t="Сделать пол тёплым во всей квартире" />
            </ul>
        </section>
    );
});
