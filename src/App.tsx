import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default App;
