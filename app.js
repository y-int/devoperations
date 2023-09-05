const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps testing webpage</title>
        </head>
        <body>
            <h1>Welcome to my Express App</h1>
            <p>This is a simple webpage served from an Express app.</p>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(2+2+2+2+2+2);
});