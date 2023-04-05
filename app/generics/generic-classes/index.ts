class KeyValuePairs<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePairs<number, string>(1, "Apple");
let pair2 = new KeyValuePairs<string, string>("1", "Apple");
