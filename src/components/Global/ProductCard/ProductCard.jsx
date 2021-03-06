import ItemCount from '../ItemCount/ItemCount';

function ProductCard({titulo, foto, precio}) {

    return (
        <>
            <article className='producto'>
                <h3>{titulo}</h3>
                <img src={foto} alt="" width="300" />
                <p>{precio}</p>
                <ItemCount stock={5} initial={1} /> 
            </article>
        </>
    )
}

export default ProductCard;