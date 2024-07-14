interface TabItem {
    i: string;
    j: string;
    t: string;
    s: string;
}

interface Tab {
    i: string;
    j: TabItem[];
}

interface Tabs {
    [key: string]: Tab;
}

export const TABS: Tabs = {
    all: {
        i: 'Все',
        j: [
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Yeelight LED Smart Bulb',
                s: 'Включено',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'D-Link Omna 180 Cam',
                s: 'Включится в 17:00',
            },
            {
                i: 'temp',
                j: 'Температура',
                t: 'Elgato Eve Degree Connected',
                s: 'Выключено до 17:00',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'LIFX Mini Day & Dusk A60 E27',
                s: 'Включится в 17:00',
            },
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Mi Air Purifier 2S',
                s: 'Включено',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'Philips Zhirui',
                s: 'Включено',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'Philips Zhirui',
                s: 'Включено',
            },
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Mi Air Purifier 2S',
                s: 'Включено',
            },
        ],
    },
    kitchen: {
        i: 'Кухня',
        j: [
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Yeelight LED Smart Bulb',
                s: 'Включено',
            },
            {
                i: 'temp',
                j: 'Температура',
                t: 'Elgato Eve Degree Connected',
                s: 'Выключено до 17:00',
            },
        ],
    },
    hall: {
        i: 'Зал',
        j: [
            {
                i: 'light',
                j: 'Освещение',
                t: 'Philips Zhirui',
                s: 'Выключено',
            },
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Mi Air Purifier 2S',
                s: 'Выключено',
            },
        ],
    },
    lights: {
        i: 'Лампочки',
        j: [
            {
                i: 'light',
                j: 'Освещение',
                t: 'D-Link Omna 180 Cam',
                s: 'Включится в 17:00',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'LIFX Mini Day & Dusk A60 E27',
                s: 'Включится в 17:00',
            },
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Mi Air Purifier 2S',
                s: 'Включено',
            },
            {
                i: 'light',
                j: 'Освещение',
                t: 'Philips Zhirui',
                s: 'Включено',
            },
        ],
    },
    cameras: {
        i: 'Камеры',
        j: [
            {
                i: 'light2',
                j: 'Освещение',
                t: 'Xiaomi Mi Air Purifier 2S',
                s: 'Включено',
            },
        ],
    },
};
