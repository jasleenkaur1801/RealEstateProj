const properties = require("../models/properties");

exports.updateProperty = (req, res) => {
    const propertyId = parseInt(req.params.id);
    const { title, description, price, location, owner } = req.body;

    const property = properties.find(prop => prop.id === propertyId);
    if (!property) {
        return res.status(404).json({ message: "Property not found" });
    }

    property.title = title || property.title;
    property.description = description || property.description;
    property.price = price || property.price;
    property.location = location || property.location;
    property.owner = owner || property.owner;

    res.json({ message: "Property Updated Successfully", property });
};
