import { Footer } from './Footer';
import { Header } from './Header';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
