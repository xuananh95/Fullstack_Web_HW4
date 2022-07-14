const express = require("express");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log("Server started successfully");
});
