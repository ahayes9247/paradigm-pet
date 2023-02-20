const DogImageFour = require('../img/dog-image-four.jpg');

function DogMedic() {
    return(
        <section id="align-header-right">
            <aside>
                <img id="article-image-left" src={DogImageFour}></img>
            </aside>
            <article class="header-article-right">
                <h1>Vaccinations & Medications</h1>

                <p>You should always consult with your veterinarian, but there is a core set of vaccines that are typically recommended. Vaccines that reduce the exposure risk to things such as hepatitis, rabies, and parvovirus. Others may be determined by your vet depending on the environment in which the dog resides. Some of these include Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira bacteria.</p>
            </article>
        </section>
    );
}

export default DogMedic;