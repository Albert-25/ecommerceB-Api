const { port } = require("./dbConfig");
const app = require("./app");
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});
