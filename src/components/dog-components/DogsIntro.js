const DogImageOne = require('../img/dog-image-one.jpg');

function DogsIntro() {
    return(
    <section id="header-home">
        <article class="header-article">
            <h1>Dogs</h1>

            <p>The domestic dog is an extremely social animal and offers a diverse variety of choices as there are well over 300 breeds recognized by the World Canine Organization. Adopting a dog offers mutual benefits between dog and owner. Many studies cite the social benefits of having a companion as well as the reduced feelings of loneliness from adopting a dog. Studies even show medical indicators such as reduced blood pressure and improved lipid profiles. If you have a dog, it is important to make sure that you care for your dog; be mindful of what you feed your dog and provide enough opportunities for exercise. In this page, you will find more information about how to care for your pets throughout the various stages of their lives.</p>

            {/* <p><button class="dog-button">Dog Toys</button> </p> */}
        </article>

        <aside>
            <img id="article-image-right" src={DogImageOne}></img>
        </aside>
    </section>
    );
}

export default DogsIntro;