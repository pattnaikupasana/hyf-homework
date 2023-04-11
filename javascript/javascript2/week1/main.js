console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ulTag = document.createElement('ul')
for (product of products) {
    const titleTag = document.createElement('li')
    const priceTag = document.createElement("h1")
    priceTag.innerText = product.name
    titleTag.appendChild(priceTag)

    const ratingTag = document.createElement("h2")
    ratingTag.innerText = product.name
    priceTag.appendChild(ratingTag)

    ulTag.appendChild(titleTag)

    document.body.appendChild(ulTag)
    
    

}



