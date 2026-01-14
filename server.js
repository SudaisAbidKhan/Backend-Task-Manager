// Import express
import express from 'express'
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import taskRoute from "./router/taskRoute.js"

// Create an Express app
const app = express();
connectDB();

const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

//API Endpoints
app.get("/", (req, res) => {
  res.send("Api working");
});

app.use('/api/task', taskRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
