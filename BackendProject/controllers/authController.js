const users = require("../models/users"); 

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    res.status(201).json({ message: "User Registered Successfully", user: newUser });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "User Logged In Successfully", user: { id: user.id, name: user.name, email: user.email } });
};
