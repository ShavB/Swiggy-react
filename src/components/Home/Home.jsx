import Slider from "../Slider/Slider";
import Cards from "../Cards/Cards";
import { restaurants }from "../../../Data/data";
import './Home.css';

const Home = () => {
    restaurants.map((res) => {
        console.log(res.info)
    })
    return(
        <main className="main-body">
            {/* <Slider /> */}
            <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <Cards key={restaurant.info.id} {...restaurant.info} />
            ))}
            </div>
        </main>
    );
}

export default Home;