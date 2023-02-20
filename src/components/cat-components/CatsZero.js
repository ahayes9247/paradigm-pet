import './Cats.css';
const CatsZeroImage = require('../img/cats-zero-image.jpg');

function CatsZero() {
    return(
        <section id="align-header-right">
            <aside>
                <img id="article-image-left" src={CatsZeroImage}></img>
            </aside>

            <article class="header-article-right">
                <h1>Zero to Four Weeks</h1>

                <p>It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible. Monitor your kitten’s growth closely to make sure its growth rate is progressing steadily. If any kitten is not growing at a sufficient rate, a caretaker might need to feed the kitten directly either with a bottle or a feeding tube. Some reasons why kittens might not gain weight appropriately include the following:</p>

                <p>
                    <ul>
                        <li>too many other siblings are competing for mom's milk</li>
                        <li>gastrointestinal disease</li>
                        <li>environmental conditions such as extreme heat or cold, or unsanitary conditions</li>
                    </ul>
                </p>
            </article>
        </section>
    );
}

export default CatsZero;