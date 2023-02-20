const DiscoverImage = require('../img/home-searching-image.jpg');

function DiscoverPets() {
    return(
            <main>
                <section id="align-header-right">
                    <aside>
                        <img id="article-image-left" src={DiscoverImage}></img>
                    </aside>
                        
                    <article id="header-article-right">
                            <h1>Looking for your new best friend?</h1>

                            <p>It has been scientifically proven that opening our homes and hearts to a pet increases our longevity and improves our overall quality of life as well as the lives of our pets. </p>

                            <p>We are also happy to help you navigate the adoption process! We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. Please fill out our contact form to request a consultation. We will contact you within 48 hours to schedule a consultation. All fields are required.</p>

                            <button class="article-button" value="Learn More">Learn More</button> 
                    </article>
                </section>
            </main>
    )
};

export default DiscoverPets;