const express = require('express')

    const app = express()
    const port = 5986
    
    app.get("/Girr/:id", (req, res) => {
        res.send("Hallo saya Girtianda");
    });
    app.post("/Girr/:id", (req, res) => {
        res.send("Pengen makan lapar");
    });
    app.put("/Girr/:id", (req, res) => {
        res.send("Mie ayam enak pisan");
    });
    app.delete("/Girr/:id", (req, res) => {
        res.send("Beli mie ayam di cimahi");
    });

    app.listen(port,() => console.log(`Server running on port ${port}`))