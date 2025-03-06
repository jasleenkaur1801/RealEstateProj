const properties = require("../models/properties");

exports.deleteProperty = (req, res) => {
    const propertyId = parseInt(req.params.id);
    const index = properties.findIndex(prop => prop.id === propertyId);

    if (index === -1) {
        return res.status(404).json({ message: "Property not found" });
    }

    properties.splice(index, 1);
    res.json({ message: "Property Deleted Successfully" });
};
