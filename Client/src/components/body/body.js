import productCard from "../productCard.js";
import { getAllProducts } from "../../apiAxios/requests.js";


const body = () => {
    const $div = document.createElement("div");
    $div.classList.add("body-products");

    const $products = getAllProducts().then(products => products.map((product) => {
        let $productDiv = document.createElement("div");
        $productDiv.classList.add("card-product");
        let urlImage = product.url_image ? product.url_image : "../src/img/imageNoAvailable.png";
        let name = product.name;
        let price = product.price;
        let discount = product.discount;
        let $productCard = productCard(urlImage, name, price, discount);
        $productDiv.innerHTML = $productCard;
        return $productDiv;
    }))


    const renderBody = () => {
        $products.then(products => products.forEach((product) => {
            if (product.children[2].children[1].textContent == "-0%") {
                product.children[2].removeChild(product.children[2].children[1])
            }
            $div.appendChild(product);
        }))
    }
    renderBody()
    return $div;
}


export default body;
















// async function bringProductsToState() {
//     let products = await getAllProducts();
//     state.products = products
//     console.log(" post ", state)
// }
// bringProductsToState()