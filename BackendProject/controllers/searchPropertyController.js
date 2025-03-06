const properties = require("../models/properties");

exports.searchProperties = (req, res) => {
    const { location, minPrice, maxPrice } = req.query;
    let filteredProperties = properties;

    // Filter by location
    if (location) {
        filteredProperties = filteredProperties.filter(prop => 
            prop.location.toLowerCase() === location.toLowerCase()
        );
    }

    // Filter by price range
    if (minPrice) {
        filteredProperties = filteredProperties.filter(prop => prop.price >= parseInt(minPrice));
    }
    if (maxPrice) {
        filteredProperties = filteredProperties.filter(prop => prop.price <= parseInt(maxPrice));
    }

    if (filteredProperties.length === 0) {
        return res.status(404).json({ message: "No properties found matching criteria" });
    }

    res.json({ message: "Properties Found", properties: filteredProperties });
};
