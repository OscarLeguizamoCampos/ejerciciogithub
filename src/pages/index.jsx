import CardRazasPerros from "components/CardRazasPerros";

import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import Header from 'components/Header';
import Footer from 'components/Footer'

function Index() {
    return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul class="breedCardContainer backgroundColor">
            <CardRazasPerros nombreRaza = "BorderCollie" imagen = {borderCollie} ruta = '/borderCollie'/>
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  ruta = '/rhodesian' />
 
 
          </ul>
        </section>
        <section></section>
      </main>
      <Footer />
    </div>
    )
}

export default Index;