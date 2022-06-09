import app from "./app.js";
import bodyStyle from "./src/components/body/bodyStyles.js";

export const $root = document.getElementById("root");

$root.appendChild(app());
$root.appendChild(bodyStyle);

alert("TODO BACANO")
