const CatsHeroImage = require('../img/cats-hero-image.jpg');

function CatsIntro() {
    return(
    <section id="header-home">
        <article class="header-article">
            <h1>Cats</h1>

            <p>Cats were first domesticated around 7500 BCE in the western Asia region and are currently the second most popular domestic pet in the United States. While there are over 60 unique documented cat breeds, care and diet can differ between breeds. However, some diets and practices are generally recommended for the well-being of your fluffy family member regardless of breed.</p>

            {/* <p><button class="cats-button">Cat Breeds</button></p> */}
        </article>

        <aside>
            <img src={CatsHeroImage} id="article-image-right"></img>
        </aside>
    </section>
    );
}

export default CatsIntro;