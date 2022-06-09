// import logobsale from "../img/logobsale.jpg";
const header = ()=>{
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    $img.src = "../src/img/logobsale.jpg";
    $div.appendChild($img);
    return $div;
}
export default header;