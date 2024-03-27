import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <span className="navbar-brand">Naturals</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/main">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Occasions">Occasions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/All_Products">All Products</Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" onClick={() => setIsOpen(!isOpen)}>View Categories</a>
                            {isOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Hair">Hair Care</Link></li>
                                    <li><Link className="dropdown-item" to="/Nails">Nails Care</Link></li>
                                    <li><Link className="dropdown-item" to="/Lips">Lips</Link></li>
                                    <li><Link className="dropdown-item" to="/Face">Lashes & Brows</Link></li>
                                    <li><Link className="dropdown-item" to="/Soap">Face Soaps</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customize">Customize Your Items</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


                  
                {/* <script>
                    function redirectToPage(event) {
                        event.preventDefault(); // Prevent form submission
                        
                        // Get the value of the search input and convert it to lowercase
                        var searchValue = document.getElementById('searchInput').value.toLowerCase();
                        
                        // Check if the search value matches any of the predefined categories
                        if (searchValue === 'face' || searchValue === 'faces') {
                            window.location.href = 'face_category.html'; // Redirect to corresponding category page
                        } else if (searchValue === 'hair' || searchValue === 'hairs') {
                            window.location.href =  'hair_category.html';
                        } else if (searchValue === 'soap' || searchValue === 'soaps') {
                            window.location.href =  'soap_category.html';
                        } else if (searchValue === 'lip' || searchValue === 'lips') {
                            window.location.href =  'lips_category.html';
                        } else if (searchValue === 'nail' || searchValue === 'nails') {
                            window.location.href =  'nail_category.html';
                        } else {
                            window.location.href = 'not_available.html'; // Redirect to not available page
                        }
                    }
                </script>
                
                 */}