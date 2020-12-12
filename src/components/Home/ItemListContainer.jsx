import ProductCard from '../Global/ProductCard/ProductCard';
import './ItemListContainer.css'; 
import camisaChina from '../../assets/camisaChina.jpg';
import camisaAlmejas from '../../assets/camisaAlmejas.jpg';
import camisaPlantas from '../../assets/camisaPlantas.jpg';

function ItemListContainer() {
    return (
        <>
        <body>
            <h1 className='titulo'>Bienvenidx</h1>

            <ProductCard titulo="Camisa almeja" foto={camisaAlmejas} precio="900" />
            <ProductCard titulo="Camisa china" foto={camisaChina} precio="1200" />
            <ProductCard titulo="Camisa plantas" foto={camisaPlantas} precio="1500" />
        </body>
        </>
    )
}

export default ItemListContainer;