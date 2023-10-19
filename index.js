const express = require('express')

    const app = express()
    const port = 5986

    app.get("/Girr", (req, res) => {
        res.json({
            message: "Hallo ini Girtianda",
        });
    });

    app.post("/Girr", (req, res) => {
        res.json({
            message: "Hallo ini response Gian",
        });
    });

    app.put("/Girr", (req, res) => {
        res.json({
            message: "Pengen mie ayam gratis",
        });
    });

    app.delete("/Girr", (req, res) => {
        res.json({
            message: "mie ayam cimahi ngeunah pisan",
        });
    });

    app.listen(port,() => console.log(`Server running on port ${port}`))