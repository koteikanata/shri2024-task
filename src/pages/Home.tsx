import { useEffect, useRef, useState } from 'react';
import { General } from '../components/General';
import { Scripts } from '../components/Scripts';
import { Devices } from '../components/Devices';

export const Home = () => {
    const initedRef = useRef(false);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        if (!initedRef.current) {
            initedRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    }, []);

    return (
        <main className="main">
            <General />
            <Scripts />
            <Devices />
        </main>
    );
};
