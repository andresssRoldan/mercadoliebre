const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(procces.env.PORT || 3030, () => {
  console.log("Levantando el Servidor");
});

// routeres ////
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get('/login.html', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
