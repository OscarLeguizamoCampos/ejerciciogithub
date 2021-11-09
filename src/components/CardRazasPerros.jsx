import { Link } from "react-router-dom";


const CardRazasPerros = ({nombreRaza, imagen, ruta }) =>{
    return(
      <Link to = {ruta}>
      <li class="breedCard">       
          <div class="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
          <span class="breedTitle">{nombreRaza}</span>
      </li>
     
      </Link>    )
  }
  export default CardRazasPerros;