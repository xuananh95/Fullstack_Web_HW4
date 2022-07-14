const express = require("express");
const userRouter = express.Router();
const { v4: uuid_v4 } = require("uuid");

let users = [
    { id: uuid_v4(), name: "Bạn 1" },
    { id: uuid_v4(), name: "Bạn 2" },
    { id: uuid_v4(), name: "Bạn 3" },
];

userRouter.get("/", (req, res) => {
    res.send(users);
});

userRouter.post("/", (req, res) => {
    users = [...users, { id: uuid_v4(), name: req.body.name }];
    res.send(users);
});

userRouter.put("/:id", (req, res) => {
    users = users.map((el) =>
        el.id === req.params.id ? { ...el, name: req.body.name } : el
    );
    res.send(users);
});

userRouter.delete("/:id", (req, res) => {
    users = users.filter((el) => el.id !== req.params.id);
    res.send(users);
});

module.exports = userRouter;
