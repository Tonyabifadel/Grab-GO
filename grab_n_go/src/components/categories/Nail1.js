import React, { useState } from 'react';
import Navbar from "../navs/Navbar";
import Head from "../navs/Head";
import Footer from '../navs/Footer';
import styles from '../../styles/nail1.module.css';
import { Link } from "react-router-dom";

function QuantitySelector({ quantity, setQuantity }) {
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <button onClick={incrementQuantity}>+</button>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={decrementQuantity}>-</button>
        </div>
    );
}

function Nail1() {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedML, setSelectedML] = useState(20);
    const [quantity, setQuantity] = useState(0);
    const [showIngredients, setShowIngredients] = useState(false); // New state for ingredients

    const toggleOptions = () => {
        setShowOptions(!showOptions);
        console.log(showOptions);
    }

    const selectML = (ml) => {
        setSelectedML(ml);
        setShowOptions(false); // close the dropdown after selecting an option
    }

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients); // Toggles the visibility of ingredients box
        console.log(showIngredients);

    }

    const addToCart = () => {
        // Implement your logic to add the selected product to the cart
        console.log("Product added to cart:", selectedML, quantity);
    }


    return (
        <>
            <Head />
            <Navbar />
            
            <div className={styles.container}>
                <div className={styles.product}>
                    <img src="/images/s2.JPG" alt="Image 1"/>


                {/* Button to toggle ingredients box */}
                <div className={styles.ingredientsBox}>
                        <div className={styles.box} onClick={toggleIngredients}>
                        <h3>Ingredients</h3>
                        </div>
                        {showIngredients && (
                            <div className={styles.ingredients}>
                               
                                <ul>
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                    {/* Add more ingredients as needed */}
                                </ul>
                            </div>
                        )}

<div className={styles.box} onClick={toggleIngredients}>
                        <h3>How to USe</h3>
                        </div>
                        {showIngredients && (
                            <div className={styles.ingredients}>
                               
                                <ul>
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                    {/* Add more ingredients as needed */}
                                </ul>
                            </div>
                        )}

<div className={styles.box} onClick={toggleIngredients}>
                        <h3>Payments and Delivery</h3>
                        </div>
                        {showIngredients && (
                            <div className={styles.ingredients}>
                               
                                <ul>
                                    <li>Ingredient 1</li>
                                    <li>Ingredient 2</li>
                                    <li>Ingredient 3</li>
                                    {/* Add more ingredients as needed */}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

                <div className={styles.text}>
                    <h5>Nail and Cuticle Oil - All Nail Types</h5>
                    <h6>$4.00</h6>
                    <hr />
                    <h5>Milli Liters</h5>
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        onClick={toggleOptions}
                        aria-haspopup="true"
                        aria-expanded={showOptions ? "true" : "false"}>
                        {selectedML}mL
                    </button>
                    {/* <div className={`dropdown-menu ${showOptions ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={() => selectML(20)}>20mL</a>
                        <a className="dropdown-item" href="#" onClick={() => selectML(30)}>30mL</a>
                        <a className="dropdown-item" href="#" onClick={() => selectML(50)}>50mL</a>
                    </div> */}
                    {
                        showOptions && (
                            <div className='dropdown-menu' aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#" onClick={() => selectML(20)}>20mL</a>
                                <a className="dropdown-item" href="#" onClick={() => selectML(30)}>30mL</a>
                                <a className="dropdown-item" href="#" onClick={() => selectML(50)}>50mL</a>
                            </div>
                        )
                    }
                    <br/><br/><br/><br/><br/><br/>
                    <hr />
                    <h5>Quantity</h5>
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    <hr />
                    <h5>Description</h5>
                    <p>lorem ajdkjadjaiksjasjakskajskajskajs</p>
                    <hr></hr>
                    
                    <button className={styles.cart} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Nail1;
