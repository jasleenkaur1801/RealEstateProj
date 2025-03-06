import React, { useEffect, useState } from 'react';
import './Form.css';

const PropertyListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        // Fetch listings from localStorage when component mounts
        const storedListings = JSON.parse(localStorage.getItem('propertyListings')) || [];
        setListings(storedListings);
    }, []);

    // Function to delete a single listing
    const deleteListing = (listingId) => {
        // Filter out the listing with the matching ID
        const updatedListings = listings.filter(listing => listing.id !== listingId);
        // Update state
        setListings(updatedListings);
        // Update localStorage
        localStorage.setItem('propertyListings', JSON.stringify(updatedListings));
    };

    // Function to delete all listings
    const deleteAllListings = () => {
        if (window.confirm('Are you sure you want to delete all listings?')) {
            setListings([]);
            localStorage.removeItem('propertyListings');
        }
    };

    const createPropertyCard = (listing) => {
        const title = `${listing.propertyType} in ${listing.locality}, ${listing.city}`;

        return (
            <div className="property-card" key={listing.id}>
                <div className="card-header">
                    <h2>{title}</h2>
                    <button 
                        onClick={() => deleteListing(listing.id)}
                        className="delete-button"
                        title="Delete this listing"
                    >
                        ×
                    </button>
                </div>
                {listing.images && listing.images.length > 0 && (
                    <div className="property-images">
                        {listing.images.map((imgUrl, index) => (
                            <img key={index} src={imgUrl} alt="Property" />
                        ))}
                    </div>
                )}
                <div className="property-details">
                    <p><strong>Location:</strong> {listing.locality}{listing.subLocality ? `, ${listing.subLocality}` : ''}, {listing.city}</p>
                    <p><strong>Configuration:</strong> {listing.bedrooms} BHK, {listing.bathrooms} Bath, {listing.balconies} Balcony</p>
                    <p><strong>Area:</strong> {listing.plotArea} {listing.areaUnit}</p>
                </div>
                <div className="amenities">
                    {listing.amenities && listing.amenities.length > 0 && 
                        listing.amenities.map((amenity, index) => (
                            <span key={index} className="amenity-tag">
                                {amenity.replace('-', ' ').toUpperCase()}
                            </span>
                        ))
                    }
                </div>
                <div className="price">
                    ₹{listing.expectedPrice}{listing.priceNegotiable ? ' (Negotiable)' : ''}
                </div>
                {listing.description && <p><strong>Description:</strong> {listing.description}</p>}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="listings-header">
                <h1>Property Listings</h1>
                {listings.length > 0 && (
                    <button 
                        onClick={deleteAllListings}
                        className="delete-all-button"
                    >
                        Delete All Listings
                    </button>
                )}
            </div>
            <div className="listings-container">
                {listings.length > 0 ? (
                    listings.map(createPropertyCard)
                ) : (
                    <p>No listings available</p>
                )}
            </div>
        </div>
    );
};

export default PropertyListings;