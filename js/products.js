const productList = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_zfd7ta.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737420/Lab3/img261_vasz4r.png",
        time: 30,
        type: "Fish",
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_2_cqsoth.png",
        time: 30,
        type: "Snack",
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_3_jdgnqm.png",
        time: 30,
        type: "Healthy",
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737419/Lab3/image_26_4_ut49h0.png",
        time: 30,
        type: "Noodles",
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654737420/Lab3/image_26_5_qj8mqp.png",
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