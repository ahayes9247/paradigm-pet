import './Dogs.css';
import DogDiet from "./DogDiet";
import DogGrooming from "./DogGrooming";
import DogMedic from "./DogMedic";
import DogsIntro from "./DogsIntro";
import Footer from '../../Footer';

function Dogs() {
    return(
        <main>
            <section>
                <DogsIntro />
                <DogDiet />
                <DogGrooming />
                <DogMedic />
                <Footer />
            </section>
        </main>
    );
}

export default Dogs;