const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", async (req, res) => {
    try {
        const accounts = await db.select('*').from('accounts');
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: "Error getting accounts." });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const accounts = await db.select('*').from('accounts').where({ id: req.params.id });
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: "Error getting accounts." });
    }
});

router.post("/", async (req, res) => {
    if (!req.body) { res.status(400).json({ message: "Missing information" }); }
    try {
        const newId = await db
            .insert(req.body, 'id')
            .into('accounts');
        res.status(200).json(newId);
    } catch (error) {
        res.status(500).json({ message: "Error adding new account." });
    }
});

module.exports = router;