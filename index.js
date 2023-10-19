const express = require('express')

    const app = express()
    const port = 5986

    const data_users = [
        { id: 1, name: "Girtianda", alamat: "Batam" },
        { id: 2, name: "Yadi ", alamat: "Bandung" },
        { id: 3, name: "Sumanto", alamat: "Madura" },
        { id: 4, name: "Agus", alamat: "Subang" },
    ];

    app.get("/Girr", (req, res) => {
        const data = data_users;

        let result = {
            status: 200,
            data: data,
        };

        res.json(result);
    });
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