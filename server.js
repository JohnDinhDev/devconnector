const express = require("express");
const connectDB = require("./db");

const app = express();
// Connect Database
connectDB();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => {
	console.log(`Server has started on port ${PORT}`);
});
