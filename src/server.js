const express = require('express');
const path = require('path');
const app = express();

// Middleware to set Content Security Policy header
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-eval'");
    next();
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});