const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const helmet = require('helmet'); // Import Helmet for security headers

const app = express();

// Use Helmet for setting various security headers, including CSP
app.use(helmet());

// Add custom Content-Security-Policy (CSP) header to allow scripts from 'vercel.live' and 'self'
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'none'; script-src 'self' https://vercel.live; style-src 'self'; font-src 'self';"  // Adjust as needed
    );
    next();
});

// CORS configuration to allow requests from the frontend
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Make sure FRONTEND_URL is correctly set in .env
    credentials: true
}));

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Set up routes
app.use("/api", router);

// Ensure correct port configuration (use environment variable or default to 8080)
const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});




// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')


// const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true
// }))
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api",router)

// const PORT = 8080 || process.env.PORT


// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+PORT)
//     })
// })
