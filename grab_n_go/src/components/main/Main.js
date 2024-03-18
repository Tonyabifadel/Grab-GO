import Navbar from '../navs/Navbar';
import Carousel from './Carousel';
import Blocks from './Blocks';
import Footer from '../navs/Footer';
import Head from '../navs/Head';

function Main(){
    return(
        <>
            <Head />
            <Navbar />
            <Carousel />
            <Blocks />
            <Footer />
        </>
    )
}

export default Main;