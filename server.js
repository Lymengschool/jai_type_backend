const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];
    res.json(users);
});

app.post("/api/users", (req, res) => {
    const newUser = req.body;
    // Save the new user to the database (mocked here)
    newUser.id = Date.now();
    res.status(201).json(newUser);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
