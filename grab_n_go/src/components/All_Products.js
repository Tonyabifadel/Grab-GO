import Navbar from "./navs/Navbar";
import Head from "./navs/Head";
import Footer from './navs/Footer'
import styles from '../styles/All_Products.module.css'

function All_products(){
    return(
        <>
            <Head />
            <Navbar />
            <div className={styles.title}>
                All Products
            </div>
            <Footer />
        </>
    )
}

export default All_products;