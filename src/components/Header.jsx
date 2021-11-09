import logo from "media/logo.png";

// function Header() {
const Header = () =>{   
return (
        <header>
            <ul class="navbar">
                <li>
                    <img src={logo} alt="imagen" class="logo" />
                </li>
                <li>
                    <button class="botonGenerico mainButton">Nuevo post</button>
                </li>
                <li>
                    <div class="buscar">
                        <input placeholder="Buscar una raza" />
                        <i class="fas fa-search botonGenerico iconoBusqueda"></i>
                    </div>
                </li>
                <li>
                    <button class="botonGenerico secondaryButton">Login</button>
                </li>
                <li>
                    <button class="botonGenerico mainButton">Registro</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;
// 
// const cariableNumero = 3;
// const variableTexto = "Esto es un texto";
// const variableArray = [1,2,3,4];
// 
// const varableObejto = {
    // llave1: "Valor1",
    // llave1: "Valor2",
    // llave1: "Valor3"
// }
// 
// const listaObjetos = [
    // {
        // llave1: "Valor1",
        // llave1: "Valor2",
        // llave1: "Valor3"
    // },
    // {
        // llave1: "Valor1",
        // llave1: "Valor2",
        // llave1: "Valor3"
    // }
// ]

//puedo tmar una funcion y asignarlo a una variable

// function hola(){
    // return 'Hola';
// }
// 
// const nombreFuncion = function hola(){
    // return 'hola';
// }
// 
// const nomrbreFuncion = () => {
    // return 'hola';
// }
// 