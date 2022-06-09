import header from "./src/components/header.js"
import searchBar from "./src/components/searchBar/searchBar.js"
import body from "./src/components/body/body.js";
import filters from "./src/components/filters";

const app = ()=>{
    const $div = document.createElement("div");
    $div.appendChild(header());
    $div.appendChild(searchBar());
    $div.appendChild(filters());
    $div.appendChild(body());
    return $div
}   
export default app;