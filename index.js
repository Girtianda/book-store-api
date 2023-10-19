const express = require('express')

    const app = express()
    const port = 5986

    const data_users = [
        { id: 1, name: "Girtianda", alamat: "Batam" },
        { id: 2, name: "Yadi ", alamat: "Bandung" },
        { id: 3, name: "Sumanto", alamat: "Madura" },
        { id: 4, name: "Agus", alamat: "Subang" },
    ];

    app.get("/Girr/:id", (req, res) => {
        // get data dari parameter
        let id = parseInt(req.params.id);

        // get data dari database
        let result;
        const user = data_users.find((user) => user.id === id);
        if (user) {
            result = {
            status: 200,
            data: user,
            };
        }
        res.json(result);
    });
    app.listen(port,() => console.log(`Server running on port ${port}`))