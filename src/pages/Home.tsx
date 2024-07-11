import { useEffect, useRef, useState } from 'react';
import { General } from '../components/General';
import { Scripts } from '../components/Scripts';
import { Devices } from '../components/Devices';

export const Home = () => {
    const initRef = useRef(false);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        if (!initRef.current) {
            initRef.current = true;
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
