interface ProductData {
  name: string;
  price: number;
}

class Stores<T> {
  protected _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }

  // T is Product
  // keyof T is "name" | "price"
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((object) => object?.[property] === value);
  }
}

let store = new Stores<ProductData>();
store.add({ name: "Shoes", price: 100 });
store.find("name", "T-Shirt");
