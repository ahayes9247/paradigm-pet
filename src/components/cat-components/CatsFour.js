const CatsImageTwo = require('../img/cats-image-two.jpg');

function CatsFour() {
    return(
    <section id="header-home">
        <article class="header-article">
            <h1>Four Weeks to One Year</h1>

            <p>Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the ASPCA, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness. Depending on the breed, your cat may have different dietary requirements. You should always consult with your veterinarian for recommendations.</p>

            {/* <p><a href=""><button class="cats-button">Cat Food</button></a></p> */}
        </article>

        <aside>
            <img id="article-image-right" src={CatsImageTwo}></img>
        </aside>
    </section>
    );
}

export default CatsFour;