import axios from "axios";


export async function getAllProducts() {
    try {
        let json = await axios.get("http://localhost:3000/products");
        let data = json.data;
        return data;
    }
    catch (e) {
        console.log("hay un error en requests.js ", e)
    }
}

export async function getProductByName(productName){
    try {
        let json = await axios.get(`http://localhost:3000/products?name=${productName}`);
        let data = json.data;
        return data;
    } catch (e) {
        console.log("hay un error en requests.js", e)
    }
}
