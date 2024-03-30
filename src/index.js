const express = require('express');
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render("home");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});