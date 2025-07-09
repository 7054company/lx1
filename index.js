const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Secure Iframe Loader</title>
      <style>
        html, body, iframe {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe
        src="https://animated-macaron-d91a03.netlify.app/"
        allow="fullscreen; clipboard-read; clipboard-write; geolocation; microphone; camera; display-capture; autoplay"
        sandbox="allow-same-origin allow-scripts allow-forms allow-downloads allow-modals allow-popups allow-popups-to-escape-sandbox allow-presentation allow-top-navigation"
        style="width:100%; height:100%; border:none;"
      ></iframe>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
