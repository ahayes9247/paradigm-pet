import './Birds.css';
import BirdCare from "./BirdCare";
import BirdSigns from "./BirdSigns";
import BirdsIntro from "./BirdsIntro";
import Footer from '../../Footer';

function Birds() {
    return(
        <main>
            <section>
                <BirdsIntro />
                <BirdSigns />
                <BirdCare />
                <Footer />
            </section>
        </main>
    );
}

export default Birds;