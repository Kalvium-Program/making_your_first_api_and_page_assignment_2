const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code);
    const statusMessages = {
        200: "OK: The request has succeeded.",
    201: "Created: The resource has been successfully created.",
    204: "No Content: Request processed successfully, no content returned.",
    400: "Bad Request: The request is invalid due to client-side errors.",
    401: "Unauthorized: Authentication is required to access the resource.",
    403: "Forbidden: Server refuses to authorize the request.",
    404: "Not Found: The resource does not exist.",
    405: "Method Not Allowed: HTTP method not supported for this resource.",
    429: "Too Many Requests: User has exceeded rate limits.",
    500: "Internal Server Error: The server encountered an error.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: Server temporarily overloaded or under maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response from the upstream server.",
    };
    const message = statusMessages[code] || 'Unknown status code';
    res.json({ status: code, message });
});

// Route for Virtual Assistant API
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    res.json({
        message: `Hello, ${name}! Happy ${today}!`,
    });
});

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the HTTP Status Code API and Virtual Assistant API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
