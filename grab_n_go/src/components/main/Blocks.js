import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Blocks(){
    const [currentIndexCustomize, setCurrentIndexCustomize] = useState(0); 
    const [currentIndexBestSeller, setCurrentIndexBestSeller] = useState(0);

    const customize = [
        '/images/cu2.JPG',
        '/images/cu1.JPG',
    ]

    const bestSeller = [
        '/images/best1.JPG',
        '/images/best2.JPG',
        '/images/best3.JPG',
        '/images/best4.JPG'
    ]

    const text = [
        {
          head: "Lash and Eyebrow serum",
          parag: "Customize your own Cosmetics Box!"
        },
        {
          head: "Eyebrow Soap",
          parag: "Customize your own Cosmetics Box!"
        },
        {
            head: "Nail and Cuticle Oil",
            parag: "Customize your own Cosmetics Box!"
          },
          {
            head: "Lib Balm",
            parag: "Customize your own Cosmetics Box!"
          }
      ];
    const goToPrevious = (images, currentIndex, setCurrentIndex) => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
      
      const goToNext = (images, currentIndex, setCurrentIndex) => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

    return (
        <>
            <div className="container blocks-container">
                <div className="row">
                    <div className="col blocks-head">
                        <h2>Customize your Own Box !</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 blocks-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolorum suscipit eum quis quae distinctio temporibus, laboriosam dolorem ipsam nostrum ducimus, ullam debitis culpa fugit. Suscipit nulla provident dicta accusamus!</p>
                        <button>Contact Us!</button>
                    </div>
                    <div className="col blocks-carousel">
                        <img src={customize[currentIndexCustomize]} alt="Slide" style={{width:'98%', height:"70vh", marginTop:"30px"}}/>
                        <div className=" row blocks-btn">
                            <div className="col">
                            <button onClick={() => goToPrevious(customize, currentIndexCustomize, setCurrentIndexCustomize)}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            </div>
                            <div className="col" style={{display:"flex", justifyContent:"end"}}>
                            <button onClick={() => goToNext(customize, currentIndexCustomize, setCurrentIndexCustomize)}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                        <div className="customize-slider">
                            <div style={{display:"flex", paddingTop:"15px"}}>
                                {customize.map((_, index) => (  
                                    <div
                                    key={index}
                                    className={"carousel-slider"}
                                    style={{ backgroundColor: currentIndexCustomize === index ? "white" : "gray" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container blocks-container">
                <div className="row">
                    <div className="col blocks-head">
                        <h2>Best Sellers</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 blocks-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolorum suscipit eum quis quae distinctio temporibus, laboriosam dolorem ipsam nostrum ducimus, ullam debitis culpa fugit. Suscipit nulla provident dicta accusamus!</p>
                    </div>
                    <div className="col blocks-carousel">
                        <img src={bestSeller[currentIndexBestSeller]} alt="Slide" style={{width:'98%', height:"70vh", marginTop:"30px"}}/>
                        <div className=" row blocks-btn">
                            <div className="col">
                            <button onClick={() => goToPrevious(bestSeller, currentIndexBestSeller, setCurrentIndexBestSeller)}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                            </div>
                            <div className="col" style={{display:"flex", justifyContent:"end"}}>
                            <button onClick={() => goToNext(bestSeller, currentIndexBestSeller, setCurrentIndexBestSeller)}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                        <div className="bestSeller-slider">
                            <div>
                                {text.map((item, index) => (
                                <div key={index} style={{ display: index === currentIndexBestSeller ? 'block' : 'none' }}>
                                    <h3>{item.head}</h3>
                                    <p>{item.parag}</p>
                                </div>
                                ))}
                            </div>
                            <div style={{display:"flex", paddingTop:"15px", justifyContent:"center"}}>
                                {bestSeller.map((_, index) => (  
                                    <div
                                    key={index}
                                    className={"carousel-slider"}
                                    style={{ backgroundColor: currentIndexBestSeller === index ? "white" : "gray" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container blocks-container">
                <div className="row">
                    <div className="col blocks-head">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src='images/story.JPG' alt="Slide" style={{width:'98%', height:"70vh", marginTop:"30px"}}/>
                    </div>
                    <div className="col blocks-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dolorum suscipit eum quis quae distinctio temporibus, laboriosam dolorem ipsam nostrum ducimus, ullam debitis culpa fugit. Suscipit nulla provident dicta accusamus!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blocks;