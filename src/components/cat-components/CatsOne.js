const CatsImageFour = require('../img/cats-image-three.jpg');

function CatsOne() {
    return(
        <section id="align-header-right">
            <aside>
                <img id="article-image-left" src={CatsImageFour}></img>
            </aside>

            <article class="header-article-right">
                <h1>One Year to Seven Years</h1>

                <p>This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is not recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments.</p>
            </article>
    </section>
    );
}

export default CatsOne;