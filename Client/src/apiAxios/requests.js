import axios from "axios";
// const { PORT } = process.env;
const urlBase = "https://ecommerce-smith.herokuapp.com";
export async function getAllProducts() {
    try {
        let json = await axios.get(`${urlBase}/products`);
        let data = json.data;
        return data;
    }
    catch (e) {
        console.log("hay un error en requests.js getAllProducts ", e)
    }
}

export async function getProductByName(productName){
    try {
        let json = await axios.get(`${urlBase}/products?name=${productName}`);
        let data = json.data;
        return data;
    } catch (e) {
        console.log("hay un error en requests.js getAllProducts", e)
    }
}
