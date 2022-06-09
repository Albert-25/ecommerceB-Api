import { getProductByName, getAllProducts } from "../../apiAxios/requests.js";
import productCard from "../productCard.js"; 
import { $root } from "../../../index.js";

const searchBar = () => {
    const $div = document.createElement("div");
    const $input = document.createElement("input");
    $input.type = "text";
    const $buttonSend = document.createElement("button");
    $buttonSend.innerText = "Buscar";
    const $buttonCart = document.createElement("button");
    $buttonCart.innerText = "Carrito de compras";
    $div.appendChild($input);
    $div.appendChild($buttonSend);
    $div.appendChild($buttonCart);

    let nameSearch;
    let productsByName;

    $input.addEventListener("change", () => nameSearch = $input.value);
    $buttonSend.addEventListener("click", () => {
        productsByName = getProductByName(nameSearch).then(products => products.map((product) => {
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

        const $divBody = document.createElement("div");
        $divBody.classList.add("body-products");

        productsByName.then(products => {
            products.map((product) => {
                if (product.children[2].children[1].textContent == "-0%") {
                    product.children[2].removeChild(product.children[2].children[1])
                }
                $divBody.appendChild(product)
            })
            $root.firstElementChild.lastElementChild.replaceWith($divBody);
        })
    })

    return $div;
}

export default searchBar;