import './Contact.css';
import ClientInfo from './ClientInfo';
import ContactIntro from './ContactIntro';
import PetInfo from './PetInfo';
import Footer from '../../Footer';

function Contact() {
    return(
        <main>
            <section>
                <ContactIntro />
                <ClientInfo />
                <Footer />
            </section>

            <section>

            </section>
        </main>
    );
}

export default Contact;