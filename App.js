
import Cards from "./src/components/Cards/Cards";
import Header from "./src/components/Header/Header";
import Home from './src/components/Home/Home';
import './App.css';

const App = () => {
    return(
        <main className="app-layout">   
            <Header />
            <Home />
        </main>
    )
}

export default App;