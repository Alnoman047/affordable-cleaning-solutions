import WhyChooseUs from "../Services/WhyChooseUs/WhyChooseUs";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;