const express = require("express");
const { v4: uuid_v4 } = require("uuid");

const mangaRouter = express.Router();
let mangas = [
    { id: uuid_v4(), name: "Bảy viên ngọc rồng" },
    { id: uuid_v4(), name: "Thám tử Conan" },
    { id: uuid_v4(), name: "Doraemon" },
    { id: uuid_v4(), name: "Yaiba" },
];

mangaRouter.get("/", (req, res) => {
    res.send(mangas);
});

mangaRouter.post("/", (req, res) => {
    const newManga = {
        id: `${uuid_v4()}`,
        name: req.body.name,
    };
    mangas.push(newManga);
    res.send(mangas);
});

mangaRouter.put("/:id", (req, res) => {
    mangas = mangas.map((el) =>
        el.id === req.params.id ? { ...el, name: req.body.name } : el
    );
    res.send(mangas);
});

mangaRouter.delete("/:id", (req, res) => {
    mangas = mangas.filter((el) => el.id !== req.params.id);
    res.send(mangas);
});

module.exports = mangaRouter;
