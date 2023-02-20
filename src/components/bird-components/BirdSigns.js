const BirdsImageTwo = require('../img/birds-image-two.jpg');

function BirdSigns() {
    return(
            <section id="align-header-right">
                <aside>
                    <img id="article-image-left" src={BirdsImageTwo}></img>
                </aside>
                <article class="header-article-right">
                    <h1>Signs of Sadness & Depression in Birds</h1>

                    <p>Unfortunately, birds can experience sadness and depression just like humans. A number of root causes may be responsible for your bird's depression such as an illness (either physical or mental), losing its companion, or increasingly becoming bored. Some signs to help identify if your bird is experiencing depression may include the following:</p>

                    <p>
                        <ul>
                        <li>reduced appetite</li>
                        <li>becoming increasingly irritable</li>
                        <li>aggressive behavior</li>
                        <li>songs have a different, more solemn tone</li>
                        </ul>
                    </p>
                </article>
            </section>
    );
}

export default BirdSigns;