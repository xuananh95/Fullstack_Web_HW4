const express = require("express");
const mangaRouter = require("./router/mangaRouter");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/manga", mangaRouter);

app.listen(PORT, () => {
    console.log("Server started successfully!");
});
