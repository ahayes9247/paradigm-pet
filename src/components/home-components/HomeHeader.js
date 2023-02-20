const HeaderImage = require('../img/home-hero-image.jpg');

function HomeHeader() {
    return(
        <main>
            <header id="header-home">
                <article class="header-article">
                    <h1>Pets are nature's gift to humanity.</h1>

                    <p>At Pet Paradigm Professionals, our mission is to offer resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as well as group presentations designed for veterinary, pet shelter, and pet breeding professionals.</p>

                    <p>Looking for basic pet care advice for the most common type of pets? Need additional help determining which type of pet is right for you and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new companion.</p>

                    <p><button type="button" class="article-button">Book Now</button></p>
                </article>

                <aside>
                    <img src={HeaderImage} id="article-image-right"></img>
                </aside>
            </header>
        </main>
    );
}

export default HomeHeader;