class Store {
    constructor() {
        this.observers = [];
        this.products = [];
        this.categories = new Set();
    }

    // метод для добавляения новых наблюдателей с функцией которая вызывается при изменении состояний 
    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    notifyObserves() {
        this.observers.forEach((observer) => observer());
    }

    getProducts() {
        return this.products;
    }

    setProducts(newProducts) {
        this.products = newProducts;
        this.updatecategories(newProducts);
        this.notifyObserves();
    }

    getCategories() {
        return this.categories;
    }

    updatecategories(products) {
        this.categories.clear();

        products.forEach((product) => {
            
            if (product.categories) {
                product.categories.forEach((category) => {
                    this.categories.add(category);

                });
            }
        });
        this.notifyObserves();
    }

};

export const store = new Store();
