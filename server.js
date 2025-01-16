const express = require('express'); // Ensure Express is imported
const app = express(); // Initialize Express

const PORT = 3000; // Define the port the server will run on

// Define the GET endpoint
app.get('/status-info', (req, res) => {
    const { code } = req.query; // Extract 'code' from query parameters

    // Check if 'code' query parameter is provided
    if (!code) {
        return res.status(400).json({ error: "Please provide a 'code' query parameter" });
    }

    // Map of HTTP status codes and their descriptions
    const statusCodes = {
        200: "OK - The request was successful.",
        404: "Not Found - The requested resource could not be found.",
        500: "Internal Server Error - The server encountered an unexpected condition.",
        400: "Bad Request - The request could not be understood or was missing required parameters.",
        401: "Unauthorized - Authentication is required or has failed.",
        // Add additional status codes as needed
    };

    // Get the description for the provided code
    const description = statusCodes[code];

    // Check if the code is valid
    if (!description) {
        return res.status(404).json({ error: "Invalid status code provided." });
    }

    // Respond with the code and description
    res.json({ code, description });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
