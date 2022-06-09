const filters = () => {
    var d = "miclase"
    const $divContainer = document.createElement("div");
    $divContainer.classList.add("container-filter");
    const $orderNameDiv = document.createElement('div');
    $orderNameDiv.classList.add("order-name");

    $orderNameDiv.innerHTML = `
    <div>Order rating</div>
    <select onChange={handleFilterRating}>
        <option selected disabled={true}>Select rating</option>
        <option value="asc">Ascendente</option>
        <option value="des">Descendente</option>
    </select>
    `





    $divContainer.appendChild($orderNameDiv);
    return $divContainer;
}
export default filters;
// git add .
// git commit -m "first breakthrough"
// git push