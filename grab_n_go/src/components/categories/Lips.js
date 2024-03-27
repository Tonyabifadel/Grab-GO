import Navbar from "../navs/Navbar";
import Head from "../navs/Head";
import Footer from '../navs/Footer';
import styles from '../../styles/Lips.module.css';
import { Link } from "react-router-dom";

function Lips(){
    return (
        <>
            <Head />
            <Navbar />
            <div className={styles.product}>
                <Link to="/Lip1" className="product-link">
                <img src="/images/s5.JPG" alt="Image 1"/>
                <button className={styles.button}>Lip Balm</button>
                </Link>
            </div>
 

            <Footer/>
          
        </>
    )
}

export default Lips;