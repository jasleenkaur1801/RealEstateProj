const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static("public"));
// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const updatePropertyRoutes = require("./routes/updatePropertyRoutes");
const deletePropertyRoutes = require("./routes/deletePropertyRoutes");
const searchPropertyRoutes = require("./routes/searchPropertyRoutes");
const favoritePropertyRoutes = require("./routes/favoritePropertyRoutes");

// Use Routes
app.use("/api/properties/favorite", favoritePropertyRoutes);
app.use("/api/properties/search", searchPropertyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/properties/update", updatePropertyRoutes); 
app.use("/api/properties/delete", deletePropertyRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
