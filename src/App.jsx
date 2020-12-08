import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer';
import NavBar from './components/Global/NavBar';

function App() {
  return (
     /*Importo el componente Hero dentro del componente App*/
    <>
        <NavBar />
        <Hero />
        <Footer />
    </>
  );
}

export default App;
