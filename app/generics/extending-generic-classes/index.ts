interface Product {
  name: string;
  price: number;
  category: string;
}

class Store<T> {
  protected _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }
}

// let store = new Store<Product>();
// store._objects = [];

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let compressibleStore = new CompressibleStore<Product>();
compressibleStore.compress();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((object) => object?.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this._objects.filter((object) => object?.category === category);
  }
}
