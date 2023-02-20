import Footer from '../../Footer';
import './Home.css';
const AdoptionImage = require('../img/home-adoption-image.jpg');

function AdoptionResources() {
    return(
        <main>
            <section id="header-home">
                <article class="header-article">
                <h1>Find and adopt the perfect companion.</h1>

                    <p>The following organizations can help you find and adopt the perfect companion:</p>

                    <p>
                        <ul id="adoption-resource-list">
                            <li><a href="https://theshelterpetproject.org" target="_blank">General Adoption Resources</a></li>
                            <li><a href="https://www.aspca.org" target="_blank">ASPCA</a></li>
                            <li><a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue" target="_blank">Fish Rescue</a></li>
                            <li><a href="https://savethesnakes.org" target="_blank">Snake Rescue</a></li>
                            <li><a href="https://ftlob.rescuegroups.org" target="_blank">Bird Rescue</a></li>
                        </ul>
                    </p>
                </article>

                <aside>
                    <img src={AdoptionImage} id="article-image-right"></img>
                </aside>
            </section>
            <Footer />
        </main>
    );
}

export default AdoptionResources;