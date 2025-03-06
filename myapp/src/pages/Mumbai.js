import React, { useState, useEffect } from "react";
import './Buy.css'; // Ensure the CSS file is included
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Image and property data
const propertyImages = {
    1: ['img1.jpeg', 'img1-2.jpeg'],
    2: ['img2.jpeg', 'img2-2.jpeg'],
    3: ['img3.jpeg', 'img3-2.jpeg'],
    4: ['img4.jpeg', 'img4-2.jpeg'],
    5: ['img5.jpeg', 'img5-2.jpeg'],
    6: ['img6.jpeg', 'img6-2.jpeg'],
    7: ['img7.jpeg', 'img7-2.jpeg'],
    8: ['img8.jpeg', 'img8-2.jpeg'],
};

const properties = [
    { id: 1, name: "68  kalyangram Society", bedrooms: "4 Bedroom House", location: "Andheri West Mumbai", area: "2,529 sq.ft.", price: "12.5 Crores",rating: "4.3" },
    { id: 2, name: "plot 260 gorai", bedrooms: "3 Bedroom Independent House", location: "Borivali West", area:"1300 sq.ft.", price: "1.3 Crores",rating: "4.5" },
    { id: 3, name: "Nahra Lillium Lanatan", bedrooms: "4 bedroom house", location: "Andheri East , Mumbai", area: "2,500sq.ft", price: "11 Crores",rating: "4.7" },
    { id: 4, name: "bhagyoday", bedrooms: "2 Bedrooms", location: "Gorai 2, Borivali west", area: "800 sq.ft", price: "95 crores",rating: "4.2" },
    { id: 5, name: "Independent House", bedrooms: "4 Bedroom House", location: "sher E Punjab Colony, andheri east", area: "1300 sq.ft.", price: "11.5 Crores",rating: "4.4" },
    { id: 6, name: "independent House", bedrooms: "5 Bedrooms, 5 Bathrooms, 2 Balconies with Servant Room", location: "Beach Area , Mumbai", area: "1800 sq.ft.", price: "12.5 Crores",rating: "4.6" },
    { id: 7, name: "Thakur Complex", bedrooms: "5 Bedroom, 5 bathrooms, 2 Balconies with pooja Room, study Room", location: "Kandivali east, Mumbai", area: "5000 sq.ft.", price: "13.5 Crores ",rating: "4.6" },
    { id: 8, name: "Independent House", bedrooms: "5 Bedrooms, 5 Bathrooms, 2 Balconies with study Room, Servant Room, Store Room", location: "Monisha Tower, mumbai", area: "4200 sq.ft.", price: "12 crores",rating: "4.7" },
];

function Mumbai() {
    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem('wishlist');
        return stored ? new Set(JSON.parse(stored).map(Number)) : new Set();
    });
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [availableCount, setAvailableCount] = useState(properties.length);
    const [bedroomFilter, setBedroomFilter] = useState("all");

    const toggleWishlist = (propertyId) => {
        const updatedWishlist = new Set(wishlist);
        if (updatedWishlist.has(propertyId)) {
            updatedWishlist.delete(propertyId);
        } else {
            updatedWishlist.add(propertyId);
        }
        setWishlist(updatedWishlist);
        // Store as numbers in localStorage
        localStorage.setItem('wishlist', JSON.stringify(Array.from(updatedWishlist)));
    };

    // Update the wishlist in localStorage
const updateWishlistStorage = (updatedWishlist) => {
    localStorage.setItem('wishlist', JSON.stringify(Array.from(updatedWishlist)));
};
    const updateProperties = () => {
        const filtered = bedroomFilter === "all" ? properties : properties.filter(property => {
            const bedroomCount = property.bedrooms.match(/\d+/);
            return bedroomCount && bedroomCount[0] === bedroomFilter;
        });

        setFilteredProperties(filtered);
        setAvailableCount(filtered.length);
    };

    const handleBedroomFilterChange = (event) => {
        setBedroomFilter(event.target.value);
    };

    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="image">
                        <img src="images/Untitled-1.png" alt="Logo" width="100px" height="50px" />
                    </div>
                    <div className="heading">
                        <p>HEAVENLY HOMES</p>
                    </div>
                    <div className="wishlist-counter">
                        <Link to="/wishlist" className="wishlist-link">
                            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
                            <span id="wishlist-count">{wishlist.size}</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <div className="main-section">
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415397.0243781342!2d77.30126246150184!3d12.954459536902307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1727858732446!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>

                    <div className="content">
                        <p className="rental">Rental Listings</p>
                        <p className="available">
                            <span id="available-count">{availableCount}</span> rentals available
                        </p>
                        <div className="filter-section">
                            <label htmlFor="bedroom-filter" id="bedroomsfilter">
                                Filter by Bedrooms:
                            </label>
                            <select
                                id="bedroom-filter"
                                value={bedroomFilter}
                                onChange={handleBedroomFilterChange}
                            >
                                <option value="all">All</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="4">4 BHK</option>
                                <option value="5">5 BHK</option>
                            </select>
                        </div>

                        <div className="houses" id="property-container">
                            {filteredProperties.map((property) => (
                                <div key={property.id} className="box" data-property-id={property.id}>
                                    <div className="house-img-container">
                                        <div
                                            className="house-img"
                                            style={{
                                                backgroundImage: `url('mumbai/${propertyImages[property.id][0]}')`,
                                            }}
                                        ></div>
                                        <div className="image-nav prev">&lt;</div>
                                        <div className="image-nav next">&gt;</div>
                                        <div className="image-counter">1/{propertyImages[property.id].length}</div>
                                    </div>
                                    <div className="house-content">
                                        <h2>{property.name}</h2>
                                        <p>{property.bedrooms}</p>
                                        <p>Location: {property.location}</p>
                                        <p>Area: {property.area}</p>
                                        <p>Base Price: ₹ {property.price}</p>
                                        <p>Locality Rating: {property.rating}⭐/5</p>
                                        <button
                                            className={`wishlist-btn ${wishlist.has(property.id) ? 'active' : ''}`}
                                            onClick={() => toggleWishlist(property.id)}
                                        >
                                            <FontAwesomeIcon icon={faHeart} /> &nbsp;&nbsp;
                                            {wishlist.has(property.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Mumbai;
