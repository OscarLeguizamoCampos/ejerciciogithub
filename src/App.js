import logo from "./media/logo.png";
import "./styles/App.css";

import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
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
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul class="breedCardContainer backgroundColor">
            <CardRazasPerros nombreRaza = "BorderCollie" imagen = {borderCollie} color = "backgroundRojo"/>
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian} color = "backgroundVerde" />
 
 
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazasPerros({nombreRaza, imagen, color}){
  return(
    
    <li class="breedCard">
      <div className = {color}> 
        <div class="contenedorImagen">
          <img src={imagen} alt={nombreRaza} />
        </div>
        <span class="breedTitle">{nombreRaza}</span>
      </div> 
    </li>
   
  )
}



export default App;
