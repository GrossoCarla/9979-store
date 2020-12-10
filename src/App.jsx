import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/Global/Footer/Footer';
import NavBar from './components/Global/NavBar/NavBar';
import ProductCard from './components/Global/ProductCard/ProductCard';
import camisaChina from './assets/camisaChina.jpg';
import camisaAlmejas from './assets/camisaAlmejas.jpg';
import camisaPlantas from './assets/camisaPlantas.jpg';

function App() {
  return (
     /*Importo el componente Hero dentro del componente App*/
    <>
        <NavBar />
        <Hero />
        <ProductCard titulo="Camisa almeja" foto={camisaAlmejas} precio="900" />
        <ProductCard titulo="Camisa china" foto={camisaChina} precio="1200" />
        <ProductCard titulo="Camisa plantas" foto={camisaPlantas} precio="1500" />
        <Footer />
    </>
  );
}

export default App;
