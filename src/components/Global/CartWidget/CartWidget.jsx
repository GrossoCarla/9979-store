import { AiOutlineShoppingCart } from "react-icons/ai";
AiOutlineShoppingCart

function CartWidget() {
    return (
        <>
            <div className="CartWidget">
            <AiOutlineShoppingCart />
            <span>0</span>
        </div>
        </>
    )
}

export default CartWidget;