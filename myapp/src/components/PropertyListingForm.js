import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Rent.css'
 // Import useNavigate for redirection
const PropertyListingForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [formData, setFormData] = useState({
    propertyType: 'house',
    city: '',
    locality: '',
    subLocality: '',
    bedrooms: '',
    bathrooms: '',
    balconies: '',
    plotArea: '',
    areaUnit: 'sqft',
    expectedPrice: '',
    priceNegotiable: false,
    amenities: [],
    description: '',
    images: []
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedAmenities = checked
        ? [...prevData.amenities, value]
        : prevData.amenities.filter((amenity) => amenity !== value);
      return { ...prevData, amenities: updatedAmenities };
    });
  };

  const handleNumberSelectorChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value === 'other' ? prompt('Enter custom value:') || '' : value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
    setFormData((prevData) => ({
      ...prevData,
      images: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const listingData = {
      ...formData,
      id: Date.now(), // Add a unique ID for each listing
      images: Array.from(formData.images).map(file => URL.createObjectURL(file))
    };

    const existingListings = JSON.parse(localStorage.getItem('propertyListings')) || [];
    const updatedListings = [...existingListings, listingData];
    localStorage.setItem('propertyListings', JSON.stringify(updatedListings));

    // Navigate to listings page using React Router
    navigate('/listings');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>List Your Property</h2>

        {/* Basic Details */}
        <div className="form-section">
          <h3>Basic Details</h3>
          <div className="form-group">
            <label htmlFor="property-type">Property Type:</label>
            <select
              id="property-type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
          </div>
        </div>

        {/* Location Details */}
        <div className="form-section">
          <h3>Location Details</h3>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="locality">Locality:</label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sub-locality">Sub Locality (Optional):</label>
            <input
              type="text"
              id="sub-locality"
              name="subLocality"
              value={formData.subLocality}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Property Profile */}
        <div className="form-section">
          <h3>Property Profile</h3>
          <div className="form-group">
            <label>Number of Bedrooms:</label>
            <div className="number-selector">
              {['1', '2', '3', '4'].map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleNumberSelectorChange(value, 'bedrooms')}
                  className={formData.bedrooms === value ? 'selected' : ''}
                >
                  {value}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNumberSelectorChange('other', 'bedrooms')}
              >
                + Add other
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Number of Bathrooms:</label>
            <div className="number-selector">
              {['1', '2', '3', '4'].map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleNumberSelectorChange(value, 'bathrooms')}
                  className={formData.bathrooms === value ? 'selected' : ''}
                >
                  {value}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNumberSelectorChange('other', 'bathrooms')}
              >
                + Add other
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Number of Balconies:</label>
            <div className="number-selector">
              {['0', '1', '2', '3'].map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => handleNumberSelectorChange(value, 'balconies')}
                  className={formData.balconies === value ? 'selected' : ''}
                >
                  {value}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNumberSelectorChange('other', 'balconies')}
              >
                + Add other
              </button>
            </div>
          </div>
        </div>

        {/* Area Details */}
        <div className="form-section">
          <h3>Area Details</h3>
          <div className="form-group">
            <label htmlFor="plot-area">Plot Area:</label>
            <input
              type="number"
              id="plot-area"
              name="plotArea"
              value={formData.plotArea}
              onChange={handleInputChange}
            />
            <select
              id="area-unit"
              name="areaUnit"
              value={formData.areaUnit}
              onChange={handleInputChange}
            >
              <option value="sqft">sq.ft.</option>
              <option value="sqm">sq.m.</option>
            </select>
          </div>
        </div>

        {/* Price Details */}
        <div className="form-section">
          <h3>Price Details</h3>
          <div className="form-group">
            <label htmlFor="expected-price">Expected Price for rent in rupees:</label>
            <input
              type="number"
              id="expected-price"
              name="expectedPrice"
              value={formData.expectedPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="price-negotiable"
              name="priceNegotiable"
              checked={formData.priceNegotiable}
              onChange={handleInputChange}
            />
            <label htmlFor="price-negotiable">Price Negotiable</label>
          </div>
        </div>

        {/* Property Images */}
        <div className="form-section">
          <h3>Property Images</h3>
          <div className="image-upload">
            <label htmlFor="property-images">Upload Images:</label>
            <input
              type="file"
              id="property-images"
              name="property-images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <div id="image-preview" className="image-preview">
              {imagePreviews.map((image, index) => (
                <img key={index} src={image} alt="Preview" />
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="form-section">
          <h3>Amenities</h3>
          <div className="amenities-list">
            {['parking', 'swimming-pool', 'gym', 'security', 'lift', 'garden', 'wifi', 'air-conditioning'].map((amenity) => (
              <div key={amenity} className="amenity-item">
                <input
                  type="checkbox"
                  id={amenity}
                  name="amenities"
                  value={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={handleAmenitiesChange}
                />
                <label htmlFor={amenity}>{amenity.replace('-', ' ').toUpperCase()}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Property Description */}
        <div className="form-section">
          <h3>Property Description</h3>
          <div className="form-group">
            <label htmlFor="description">What makes your property unique?</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default PropertyListingForm;