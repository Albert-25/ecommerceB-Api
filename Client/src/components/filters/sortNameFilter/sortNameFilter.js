const sortNameFilter = () => {

    const $divContainer = document.createElement("div");
    $divContainer.classList.add("container-filter");
    const $orderNameDiv = document.createElement('div');
    $orderNameDiv.classList.add("order-name");

    const $selectOrderName = document.createElement("select");
    $selectOrderName.innerHTML = `
    <option selected disabled={true}>Select rating</option>
    <option value="asc">Ascendente</option>
    <option value="des">Descendente</option>
    <option value="nose>aaaaaaaaa</option>"
    `
    const handleFilterName = () => {
        alert("HOLAAAAAAAAAAAAAAAAA")
    }

    $selectOrderName.addEventListener("change", ()=> handleFilterName());
    $orderNameDiv.appendChild($selectOrderName);
    $divContainer.appendChild($orderNameDiv);
    return $divContainer;
}
export default sortNameFilter;
// git add .
// git commit -m "first breakthrough"
// git push