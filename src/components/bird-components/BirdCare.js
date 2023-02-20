const BirdsImageThree = require('../img/birds-image-three.jpg');

function BirdCare() {
    return(
        <section id="header-home">
            <article class="header-article">
                <h1>Caring for a Sad or Depressed Bird</h1>

                <p>Be sure to tell your veterinarian if you see signs of any of these symptoms. Just like many illnesses, identifying and treating the symptoms earlier may drastically increase the lifespan of your birdie.</p>

                <p><a href="/Contact"><button class="bird-button">Book Now</button></a></p>
            </article>

            <aside>
                <img id="article-image-right" src={BirdsImageThree}></img>
            </aside>
        </section>
    );
}

export default BirdCare;