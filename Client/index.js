import app from "./app.js";
import bodyStyle from "./src/components/body/bodyStyles.js";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3000"
export const $root = document.getElementById("root");

$root.appendChild(app());
$root.appendChild(bodyStyle);


