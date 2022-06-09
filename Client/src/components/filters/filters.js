const filters = () => {
    var d = "miclase"
    const $divContainer = document.createElement("div");
    $divContainer.classList.add("container-filter");
    const $orderNameDiv = document.createElement('div');
    $orderNameDiv.classList.add("order-name");
    
    $orderNameDiv.innerHTML = `<button class =${d}>ORDER NAME</button>`
    $divContainer.appendChild($orderNameDiv);
    return $divContainer;
}
export default filters;
// git add .
// git commit -m "first breakthrough"
// git push