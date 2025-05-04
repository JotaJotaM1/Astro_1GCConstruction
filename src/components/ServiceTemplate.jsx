import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaAll from '../components/CtaAll';


const ServiceTemplate = ({ cityData, state }) => {
    return (
        <main>
            <Navbar />
            <h1>Services {cityData.name}, {state}</h1>
            <p>{cityData.description}</p>
            <CtaAll />
            <Footer />
        </main>
    );
};

export default ServiceTemplate;
