import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/images/slider1.JPG',
        '/images/slider2.JPG',
        '/images/slider3.JPG'
    ]

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <>
            <div className="container-fluid carousel-cont">
                <img src={images[currentIndex]} alt="Slide" style={{width:'100%', height:"70vh"}}/>
                <div className=" row carousel-btn">
                    <div className="col">
                        <button onClick={goToPrevious}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                    <div className="col" style={{display:"flex", justifyContent:"end"}}>
                        <button onClick={goToNext}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="carousel-shop">
                    <Link className="shop-now" to="/all_products">Shop Now</Link>
                    <div style={{display:"flex", paddingTop:"15px"}}>
                    {/* hon images of size 3, map is a for loop will iterate 3 times w display l white lines, eza currentindex=index l gray line bt sir white */}
                        {images.map((_, index) => (  
                            <div
                            key={index}
                            className={"carousel-slider"}
                            style={{ backgroundColor: currentIndex === index ? "white" : "gray" }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;