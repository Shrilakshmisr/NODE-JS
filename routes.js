const fs = require("fs");

const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Show form
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username" />
                <button type="submit">Add</button>
            </form>
        `);
    } else if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // username=Sharpener
            const formValue = parsedBody.split('=')[1];

            // Decode URL-encoded text (e.g., %20 → space)
            const decodedValue = decodeURIComponent(formValue || '');

            fs.writeFile('formValues.txt', decodedValue, (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error saving data.");
                } else {
                    // After saving, read and display it
                    fs.readFile('formValues.txt', 'utf-8', (err, data) => {
                        res.setHeader('Content-Type', 'text/html');
                        res.end(`<h1>${data}</h1>`);
                    });
                }
            });
        });
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
    
};


module.exports= requesthandler;
