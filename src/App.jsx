import './styles/App.css';
import Footer from './components/Global/Footer/Footer';
import NavBar from './components/Global/NavBar/NavBar';
import ProductCard from './components/Global/ProductCard/ProductCard';
import ItemListContainer from './components/Home/ItemListContainer';

function App() {
  return (
    <>
        <NavBar />
        <ItemListContainer />
        <Footer />
    </>
  );
}

export default App;
