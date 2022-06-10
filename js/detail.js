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
// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showProducts(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h2 class="text-[20px] md:text-[40px] font-bold md:mb-5">${product.name}</h2>`;
    return result;
}

function showImage(products) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng

    const product = products.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<img src="${product.img}" alt="logo2 " class="w-full h-[200px ]md:h-[421px] rounded-xl ">`;
    return result;
}

document.getElementById("Detail").innerHTML = showProducts(productList);
document.getElementById("Image").innerHTML = showImage(productList);