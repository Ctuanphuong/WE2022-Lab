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
// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProduct(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h2 class="text-[20px] md:text-[40px] font-bold">${product.name}</h2>`;
    return result;
}

function showImage(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<img src="${product.img}" alt="logo2 " class="w-full h-[200px ]md:h-[421px] rounded-xl/">`;
    return result;
}

document.getElementById("Detail").innerHTML = showProduct(productList);
document.getElementById("Image").innerHTML = showImage(productList);