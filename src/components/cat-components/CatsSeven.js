const CatsImageFive = require('../img/cats-image-four.jpg');

function CatsSeven() {
    return(
        <section id="header-home">
            <article class="header-article">
                <h1>Seven Years and More</h1>

                <p>Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as "salmon") and not just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins.</p>
            </article>

            <aside>
                <img id="article-image-right" src={CatsImageFive}></img>
            </aside>
        </section>
    );
}

export default CatsSeven;