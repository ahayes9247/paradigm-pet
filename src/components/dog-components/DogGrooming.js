const DogImageThree = require('../img/dog-image-three.jpg');

function DogGrooming() {
    return(
        <section id="header-home">
            <article class="header-article">
                <h1>Grooming & Handling</h1>

                <p>Keeping your furry family member clean is important to its health. So be sure to brush frequently to reduce the amount of shedding and prevent matted and tangled fur that can prove to be extremely difficult to remove. Check for insects such as ticks and fleas, especially after visiting heavily wooded areas. Bathing is not only important to your dog’s health but can be an exercise depending on how strong willed the dog is. Rinse all of the soap out, as any residual soap can result in a rash. Be sure the soap is formulated for your puppy or dog, since harsh soaps can cause allergic reactions. And as always, be careful how you handle your loved one. No matter the size of your dog, you need to be cautious as you carry your canine. If you have a small dog, then cradle the pup with one hand under the chest and the forearm supporting the back half. If it is a large dog, reach under the belly with both your arms perpendicular to the dog, and use each arm to support the chest and rear as you lift.</p>
            </article>

            <aside>
                <img id="article-image-right" src={DogImageThree}></img>
            </aside>
        </section>
    );
}

export default DogGrooming;