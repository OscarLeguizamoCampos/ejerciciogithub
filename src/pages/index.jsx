import CardRazasPerros from "components/CardRazasPerros";

import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import logo from "media/logo.png";

function Index(){
    return (
    <div>
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
            <CardRazasPerros nombreRaza = "BorderCollie" imagen = {borderCollie} />
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  />
 
 
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
    )
}

export default Index;