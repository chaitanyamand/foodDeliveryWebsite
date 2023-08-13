const express = require('express');
const router = express.Router();

router.post("/foodData", (req, res) => {
    try {
        res.send([global.foodItems, global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;