"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    console.log("Masuk ke middleware METHOD GET /users");
    next();
}, (req, res) => {
    const { page, access_token } = req.query;
    res.status(200).json({
        status: "OK",
        data: [
            {
                id: 1,
                name: "budi",
            },
            {
                id: 2,
                name: "sara",
            },
            {
                id: 3,
                name: "john",
            },
        ],
        filter: {
            page,
            access_token,
        },
    });
});
// Route Parameter
router.get("/:userId", (req, res) => {
    const { userId } = req.params;
    res.status(200).json({
        status: "OK",
        data: {
            id: userId,
            name: "budi",
        },
    });
});
// REQ BODY
router.post("/", (req, res) => {
    const { id, name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id,
            name,
        },
    });
});
router.patch("/:userId", (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;
    res.status(200).json({
        status: "OK",
        data: {
            id: userId,
            name,
        },
    });
});
exports.default = router;
