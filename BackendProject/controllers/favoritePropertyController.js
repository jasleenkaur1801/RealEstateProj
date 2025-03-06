const favorites = require("../models/favorites");
const properties = require("../models/properties");

exports.addFavoriteProperty = (req, res) => {
    const { userId, propertyId } = req.body;

    if (!userId || !propertyId) {
        return res.status(400).json({ message: "User ID and Property ID are required" });
    }

    const property = properties.find(prop => prop.id === parseInt(propertyId));
    if (!property) {
        return res.status(404).json({ message: "Property not found" });
    }

    favorites.push({ userId, propertyId });
    res.status(201).json({ message: "Property added to favorites", favorite: { userId, propertyId } });
};

exports.getFavoriteProperties = (req, res) => {
    const userId = req.params.userId;

    const userFavorites = favorites.filter(fav => fav.userId === parseInt(userId));
    if (userFavorites.length === 0) {
        return res.status(404).json({ message: "No favorite properties found" });
    }

    const favoriteProperties = userFavorites.map(fav => 
        properties.find(prop => prop.id === fav.propertyId)
    );

    res.json({ message: "Favorite Properties Fetched", favorites: favoriteProperties });
};
