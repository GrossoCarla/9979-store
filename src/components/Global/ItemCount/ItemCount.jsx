import {useState} from 'react';

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial)
    const onAdd = val => {
        setCount(count+val)
    }
         

    return (
        <>
            <div>
                <button onClick={()=>onAdd(-1)} disabled={!count?'disabled':null}>-</button>
                <input type="text" value={count} readOnly></input>
                <button onClick={()=>onAdd(1)} disabled={count >= stock?'disabled':null}>+</button>
                <button disabled={!count?'disabled':null}> Agregar al carrito </button>
            </div>  
        </>
    )
}

export default ItemCount;

