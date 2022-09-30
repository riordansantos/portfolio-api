const express = require("express");
const app= express();
const port = process.env.PORT || 3000;
const posts = require("./src/posts/posts.json");
app.get("/posts", (req, res)=>{
    try {
        return res.json(posts);
    } catch (error) {
        res.send(error);
    }
});

app.listen(port, () => {
    console.log("Servidor está rodando")
})