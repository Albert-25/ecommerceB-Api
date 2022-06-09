if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const { PORT } = process.env;
const app = require("./app");
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});
