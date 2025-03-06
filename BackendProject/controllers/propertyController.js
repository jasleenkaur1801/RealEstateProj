const properties = require("../models/properties");

exports.addProperty = (req, res) => {
    const { title, description, price, location, owner } = req.body;

    if (!title || !description || !price || !location || !owner) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newProperty = {
        id: properties.length + 1,
        title,
        description,
        price,
        location,
        owner
    };

    properties.push(newProperty);
    res.status(201).json({ message: "Property Added Successfully", property: newProperty });
};

exports.getProperties = (req, res) => {
    if (properties.length === 0) {
        return res.status(404).json({ message: "No properties available" });
    }
    
    res.json({ message: "Properties Fetched Successfully", properties });
};
