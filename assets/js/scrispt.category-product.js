class Category{
    constructor(id, name) {
this.id = id; 
this.name = name;
this.products = [];
    }
}

class Product {
    constructor(id, name, price, category){
        this.id = id;
        this.name  = name;
        this.price = price;
        this.category = category;
    }
}

class ProductServirce{
    constructor(){
        this.products = [];
        this.nextProductId = [];
    }

    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product);
    }
}

class CategoryService {
    constructor(){
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
const id = this.nextCategoryId;
this.nextCategoryId ++;

const category = new Category(id, name);
this.categories.push(category);
    }

    getCategoriaById(id){
        return this.categories.find((category) => category.id === id);
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
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0];

    productList.addProduct(productName, productPrice, productCategory);

    console.log(productList.products);
}

function findCategory(id) {
    const category = categoriesList.getCategoriaById(id);

    console.log(category.name);
}