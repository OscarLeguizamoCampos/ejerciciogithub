import { Link } from "react-router-dom";


function CardRazasPerros({nombreRaza, imagen }){
    return(
      <Link to = '/rhodesian'>
      <li class="breedCard">       
          <div class="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
          <span class="breedTitle">{nombreRaza}</span>
      </li>
     
      </Link>    )
  }
  export default CardRazasPerros;