import header from "./src/components/header.js"
import searchBar from "./src/components/searchBar/searchBar.js"
import body from "./src/components/body/body.js";
const app = ()=>{
    const $div = document.createElement("div");
    $div.appendChild(header());
    $div.appendChild(searchBar());
    $div.appendChild(body());
    return $div
}   
export default app;