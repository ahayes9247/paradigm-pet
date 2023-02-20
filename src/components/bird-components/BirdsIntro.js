const BirdsImageOne = require('../img/birds-image-one.jpg');

function BirdsIntro() {
    return(
        <section id="header-home">
            <article class="header-article">
                <h1>Birds</h1>
        
                <p>Birds are very intriguing creatures as they can range from birds as small as a Cuban bee hummingbird (about two inches long and a little over 1/20 of an ounce) to as large as an ostrich. While most birds fly, there are some that don't. Birds are amazing and each breed is unique in its own way, particularly when it comes to their relational needs and well-being. </p>
            </article>

            <aside>
                <img id="article-image-right" src={BirdsImageOne}></img>
            </aside>
        </section>
    );
}

export default BirdsIntro;