import Navbar from "../navs/Navbar";
import Head from "../navs/Head";
import Footer from '../navs/Footer';
import styles from '../../styles/Nails.module.css';
import { Link } from "react-router-dom";

function Nails(){
    return (
        <>
            <Head />
            <Navbar />


            <div className={styles.product}>
                <Link to="/Nail1" className="product-link">
                <img src="/images/s2.JPG" alt="Image 1"/>
                <button className={styles.button}>Nail and Cuticle Oil $4.00</button>
                </Link>
            </div>
 

            <Footer/>
        </>
    )
}

export default Nails;