import ImgCarr from '../img/carrito.png'

function CartWidget(){
    return <span>
    <a><img id="imagenCarrito" src={ImgCarr}/></a>
    <a>&emsp;</a>
    <a id="numeroCarrito">0</a>
    </span>
}

export default CartWidget