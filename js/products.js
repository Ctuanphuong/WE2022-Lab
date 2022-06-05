const productList = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "./images/image 26.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        img: "./images/img261.png",
        time: 30,
        type: "Fish",
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        img: "./images/image 26 (2).png",
        time: 30,
        type: "Snack",
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        img: "./images/image 26 (3).png",
        time: 30,
        type: "Healthy",
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        img: "./images/image 26 (4).png",
        time: 30,
        type: "Noodles",
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "./images/image 26 (5).png",
        time: 30,
        type: "Sweet",
    },
];

function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="shadow transition hover:shadow-2xl group">
        <img src="${product.img}" alt="food1" class="rounded-3xl" />
        <h3 class="text-lg mt-5 font-semibold group-hover:text-red-500 ml-1 h-2 mr-1">
        <a href="Detail.html?id=${product.id}">${product.name}</a> 
        </h3>
        <p class="text-xl text-red-500 font-semibold mqw1 mr-1 mt-[60px]">$30</p>
        <button class="bg-[#111928] text-white font-semibold py-2 w-full rounded-md mt-3 group-hover:bg-red-500 mt-8">Add To Cart</button>
    </div>
    `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);