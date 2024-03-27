import Navbar from '../navs/Navbar';
import Carousel from './Carousel';
import Blocks from './Blocks';
import Footer from '../navs/Footer';
import Head from '../navs/Head';
import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <Head />
            <Navbar />
            <Carousel />
            <Blocks />
            <div className="shop-now-container">
  <Link className="shop-now" to="/all_products">View All</Link>
</div>

            <Footer />
            
        </>
    )
}

export default Main;