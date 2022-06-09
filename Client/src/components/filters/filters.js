const filters = () => {
    const $divContainer = document.createElement("div");
    $divContainer.classList.add("container-filter");
    var d = "miclase"
    const $orderNameDiv = document.createElement('orderNameDiv');
    $orderNameDiv.classList.add("order-name");
    $divContainer.appendChild($orderNameDiv);

    $orderNameDiv.innerHTML = `<button class =${d}>ORDER NAME</button>`
}
export default filters;
// git add .
// git commit -m "first breakthrough"
// git push