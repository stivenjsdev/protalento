const express = require("express");
const server = express();
const port = 3000; // en mi pc lo corro en el localhost:

//RUTAS Y ENDPOINTS
server.get("/ejemplo", (req, res) => {
    res.send("Hello World!");
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
