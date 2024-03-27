import Navbar from "./navs/Navbar";
import Head from "./navs/Head";
// Assuming both import lines for Footer and styles are correct and don't conflict
import Footer from './navs/Footer';
import styles from '../styles/All_Products.module.css';
import { Link } from "react-router-dom";

function All_products(){
    return(
        <>
            <Head />
            <Navbar />
            <div className={styles.title}>
                {/* Simplified title from 588495b with the structured approach from HEAD */}
                All Products
            </div>
            
            {/* Product section from HEAD */}
            <div className={styles.container}>
                <div className={styles.product}>
                    <Link to="/Soap" className="product-link">
                        <img src="/images/s1.JPG" alt="Image 1"/>
                        <button className={styles.button}>FACE SOAPS</button>
                    </Link>
                </div>

                <div className={styles.product}>
                    <Link to="/Nails" className="product-link">
                        <img src="/images/s2.JPG" alt="Image 1"/>
                        <button className={styles.button}>NAILS CARE</button>
                    </Link>
                </div>

                <div className={styles.product}>
                    <Link to="/Hair" className="product-link">
                        <img src="/images/s3.JPG" alt="Image 1"/>
                        <button className={styles.button}>HAIR CARE</button>
                    </Link>
                </div>

                <div className={styles.product}>
                    <Link to="/Face" className="product-link">
                        <img src="/images/s4.JPG" alt="Image 1"/>
                        <button className={styles.button}>LASHES & BROWS</button>
                    </Link>
                </div>

                <div className={styles.product}>
                    <Link to="/Lips" className="product-link">
                        <img src="/images/s5.JPG" alt="Image 5"/>
                        <button className={styles.button}>LIPS</button>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default All_products;
