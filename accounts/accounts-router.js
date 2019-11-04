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

module.exports = router;