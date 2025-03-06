import React, { useState, useEffect } from 'react';
import './WishMumbai.css';

const properties = [
    { id: 1, name: "68 kalyangram Society", bedrooms: "4 Bedroom House", location: "Andheri West Mumbai", area: "2,529 sq.ft.", price: "12.5 Crores", rating: "4.3" },
    { id: 2, name: "plot 260 gorai", bedrooms: "3 Bedroom Independent House", location: "Borivali West", area: "1300 sq.ft.", price: "1.3 Crores", rating: "4.5" },
    { id: 3, name: "Nahra Lillium Lanatan", bedrooms: "4 bedroom house", location: "Andheri East, Mumbai", area: "2,500 sq.ft", price: "11 Crores", rating: "4.7" },
    { id: 4, name: "bhagyoday", bedrooms: "2 Bedrooms", location: "Gorai 2, Borivali West", area: "800 sq.ft", price: "95 Lakhs", rating: "4.2" },
    { id: 5, name: "Independent House", bedrooms: "4 Bedroom House", location: "Sher E Punjab Colony, Andheri East", area: "1300 sq.ft.", price: "11.5 Crores", rating: "4.4" },
    { id: 6, name: "Independent House", bedrooms: "5 Bedrooms, 5 Bathrooms, 2 Balconies with Servant Room", location: "Beach Area, Mumbai", area: "1800 sq.ft.", price: "12.5 Crores", rating: "4.6" },
    { id: 7, name: "Thakur Complex", bedrooms: "5 Bedroom, 5 bathrooms, 2 Balconies with Pooja Room, Study Room", location: "Kandivali East, Mumbai", area: "5000 sq.ft.", price: "13.5 Crores", rating: "4.6" },
    { id: 8, name: "Independent House", bedrooms: "5 Bedrooms, 5 Bathrooms, 2 Balconies with Study Room, Servant Room, Store Room", location: "Monisha Tower, Mumbai", area: "4200 sq.ft.", price: "12 Crores", rating: "4.7" },
];

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

function WishMumbai() {
    const [wishlist, setWishlist] = useState(() => {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored).map(Number) : [];
    });

    const getWishlistData = () => {
        // Compare using numbers instead of strings
        return properties.filter(property => wishlist.includes(property.id));
    };

    const removeFromWishlist = (id) => {
        // Remove using numbers
        const updatedWishlist = wishlist.filter(itemId => itemId !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const wishlistData = getWishlistData();

    return (
        <div>
            <header className="navbar">
                <img src="images/Untitled-1.png" alt="Heavenly Homes Logo" />
                <h1>HEAVENLY HOMES</h1>
            </header>
            <main className="wishlist-container">
                {wishlistData.length === 0 ? (
                    <div className="empty-wishlist">Your wishlist is empty.</div>
                ) : (
                    wishlistData.map(item => (
                        <div key={item.id} className="wishlist-item">
                            <img src={`mumbai/${propertyImages[item.id][0]}`} alt={item.name} />
                            <div className="wishlist-item-content">
                                <h2>{item.name}</h2>
                                <p>{item.bedrooms}</p>
                                <p>Location: {item.location}</p>
                                <p>Area: {item.area}</p>
                                <p>Price: ₹ {item.price}</p>
                                <p>Rating: {item.rating}⭐/5</p>
                                <button 
                                    className="remove-btn" 
                                    onClick={() => removeFromWishlist(item.id)}
                                >
                                    Remove from Wishlist
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}

export default WishMumbai;
