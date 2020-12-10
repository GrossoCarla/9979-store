import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer/Footer';
import NavBar from './components/Global/NavBar/NavBar';
import ProductCard from './components/Global/ProductCard/ProductCard'
import camisaChina from './assets/camisaChina.jpg';

function App() {
  return (
     /*Importo el componente Hero dentro del componente App*/
    <>
        <NavBar />
        <Hero />
        <img src={camisaChina} className='foto-producto' alt='Camisa de corte chino negra'/>
        <ProductCard/>
        <Footer />
    </>
  );
}

export default App;
