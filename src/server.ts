import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá Jean!"
    })
})

app.post("/users", (request, response) => {
    return response.json({
        message: "usuário salvo com sucesso!"
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"));