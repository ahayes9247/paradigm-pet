import './Cats.css';
import '../../Footer.css';
import CatsFour from './CatsFour';
import CatsIntro from './CatsIntro';
import CatsOne from './CatsOne';
import CatsSeven from './CatsSeven';
import CatsZero from './CatsZero';
import Footer from '../../Footer';

function Cats() {
    return(
        <main>
            <section>
                <CatsIntro />
                <CatsZero />
                <CatsFour />
                <CatsOne />
                <CatsSeven />
                <Footer />
            </section>
        </main>
    );
}

export default Cats;