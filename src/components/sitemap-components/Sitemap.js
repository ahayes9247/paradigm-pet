import Footer from '../../Footer';
import './Sitemap.css';

function Sitemap() {
    return(
        <main>
            <section id="header-home">
                <article id="header-article">
                    <h1>Sitemap</h1>

                    <p>
                        <ul class="sitemap-links-list">
                            <li class="sitemap-links-item"><a href="/" class="sitemap-links-item">Home</a></li>
                            <li class="sitemap-links-item"><a href="/Cats" class="sitemap-links-item">Cats</a></li>
                            <li class="sitemap-links-item"><a href="/Dogs" class="sitemap-links-item">Dogs</a></li>
                            <li class="sitemap-links-item"><a href="/Birds" class="sitemap-links-item">Birds</a></li>
                            <li class="sitemap-links-item"><a href="/Contact" class="sitemap-links-item">Contact Us</a></li>
                            <li class="sitemap-links-item"><a href="/Sitemap" class="sitemap-links-item">Sitemap</a></li>
                        </ul>
                    </p>
                </article>
            </section>
            <Footer />
        </main>
    );
}

export default Sitemap;