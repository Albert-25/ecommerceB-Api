const filters = () => {

    const $divContainer = document.createElement("div");
    $divContainer.classList.add("container-filter");
    const $orderNameDiv = document.createElement('div');
    $orderNameDiv.classList.add("order-name");

    const handleFilterName = () => {
        alert("handleFilterName")
    }
    const $selectOrderName = document.createElement("select");
    $selectOrderName.innerHTML = `
    <option selected disabled={true}>Select rating</option>
    <option value="asc">Ascendente</option>
    <option value="des">Descendente</option>
    `

    $orderNameDiv.appendChild($selectOrderName);
    $divContainer.appendChild($orderNameDiv);
    return $divContainer;
}
export default filters;
// git add .
// git commit -m "first breakthrough"
// git push