const users = require("../models/users");

exports.getUser = (req, res) => {
    if (users.length === 0) {
        return res.status(404).json({ message: "No users available. Please register first." });
    }

    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User Fetched Successfully", user });
};


exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    if (!name && !email) {
        return res.status(400).json({ message: "Provide at least one field to update" });
    }

    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    res.json({ message: "User Updated Successfully", user });
};
