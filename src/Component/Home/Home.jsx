import Banner from "../Banner/Banner";
import EventsFeature from "../Events/EventsFeature";
import ServicesFeature from "../Services/ServicesFeature";
import SpeakersFeature from "../Speakers/SpeakersFeature";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <ServicesFeature></ServicesFeature>
           <EventsFeature></EventsFeature>
           <SpeakersFeature></SpeakersFeature>
        </div>
    );
};

export default Home;