class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

}

class ProductServirce {
    constructor() {
        this.products = [];
        this.nextProductId = [];
    }

    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product);
    }
    getProductById(id) {
        return this.products.find((product) => product.id === id);
    }
    addProduct(name) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name);
        this.products.push(product);
    }
    updateProduct(id, name) {
        const product = this.getProductById(id);
        product.name = name;
    }
    deleteProduct(id) {
        const product = this.getProductById(id);
        const index = this.products.indexOf(product);

        this.products.splice(index, 1)
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }

    getCategoriaById(id) {
        return this.categories.find((category) => category.id === id);
    }

    updateCategory(id, name) {
        const category = this.getCategoriaById(id);
        category.name = name;
    }
    deleteCategory(id) {
        const category = this.getCategoriaById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1)
    }
}

const categoriesList = new CategoryService();
const productList = new ProductServirce();
const category = new Category();

function createCategory() {
    const categoryName1 = "Candies";
    const categoryName2 = "Shoes";
    const categoryName3 = "Books";

    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);
    categoriesList.addCategory(categoryName3);

    console.log(categoriesList.categories);
}

function createProduct() {
    const productName1 = "Choco";
    const productName2 = "Sneakears";
    const productName3 = "Livro";
    const productPrice1 = 0.50;
    const productPrice2 = 6.50;
    const productPrice3 = 10.50;
    const productCategory1 = categoriesList.categories[0];
    const productCategory2 = categoriesList.categories[1];
    const productCategory3 = categoriesList.categories[2];

    productList.addProduct(productName1, productPrice1, productCategory1);
    productList.addProduct(productName2, productPrice2, productCategory2);
    productList.addProduct(productName3, productPrice3, productCategory3);

    console.log(productList.products);
}

function findProduct(id) {
    const product = productList.getProductById(id);

    console.log(product.name);
}
function findCategory(id) {
    const category = categoriesList.getCategoriaById(id);

    console.log(category.name);
}

function UpdadeCategory(id, name) {
    categoriesList.updadeCategory(id, name);

    console.log(categoriesList.categories);
}

function UpdadeProduct(id, name) {
    productList.getProductById(id, name);

    console.log(productList.products);
}

function editCategory(id, name) {

    categoriesList.updateCategory(id, name);
    console.log(category.name);
}

function deleteCategory(id) {
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories);
}