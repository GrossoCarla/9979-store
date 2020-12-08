import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer';
import NavBar from './components/Global/NavBar';
import camisaChina from './assets/camisaChina.jpg';

function App() {
  return (
     /*Importo el componente Hero dentro del componente App*/
    <>
        <NavBar />
        <Hero />
        <img src={camisaChina} alt='Camisa de corte chino negra'/>
        <Footer />
    </>
  );
}

export default App;
