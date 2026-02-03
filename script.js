//Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

//Câu 2
let products = [
    new Product(1, "Laptop HP", 15000000, 10, "Laptop", true),
    new Product(2, "Laptop Gigabyte", 14000000, 0, "Laptop", false),
    new Product(4, "Chuột Logitech", 500000, 20, "Accessories", true),
    new Product(5, "Bàn phím", 1200000, 8, "Accessories", true),
    new Product(6, "Iphone 17", 36000000, 2, "Phone", true),
    new Product(3, "Samsung", 22000000, 0, "Phone", false),
];
function printOutput(text) {
    document.getElementById("output").textContent = text;
}

//Câu 3
function Cau3() {
    let productNameAndPrice = products.map(product => ({
        name: product.name,
        price: product.price
    }));
    printOutput(JSON.stringify(productNameAndPrice, null, 2));
}

//Câu 4
function Cau4() {
    let inStockProducts = products.filter(product => product.quantity > 0);
    printOutput(JSON.stringify(inStockProducts, null, 2));
}

//Câu 5
function Cau5() {
    let expensiveThan30000000Product =
        products.some(product => product.price > 30000000);

    printOutput("Có sản phẩm giá > 30.000.000: " + expensiveThan30000000Product);
}

//Câu 6
function Cau6() {
    let accessoriesAvailable = products
        .filter(product => product.category === "Accessories")
        .every(product => product.isAvailable === true);

    printOutput("Tất cả Accessories đang bán: " + accessoriesAvailable);
}

//Câu 7
function Cau7() {
    let totalPrice = products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    printOutput("Tổng giá trị kho: " + totalPrice.toLocaleString() + " VND");
}

//Câu 8
function Cau8() {
    let text = "";
    for (const product of products) {
        let status = product.isAvailable ? "Đang bán" : "Ngừng bán";
        text += `Tên: ${product.name} | Danh mục: ${product.category} | Trạng thái: ${status}\n`;
    }
    printOutput(text);
}

//Câu 9
function Cau9() {
    let text = "";
    for (const product of products) {
        text += "=== SẢN PHẨM ===\n";
        for (const key in product) {
            text += `${key}: ${product[key]}\n`;
        }
        text += "\n";
    }
    printOutput(text);
}

//Câu 10
function Cau10() {
    let availableProduct = products
        .filter(product => product.isAvailable === true && product.quantity > 0)
        .map(product => product.name);

    printOutput(JSON.stringify(availableProduct, null, 2));
}

