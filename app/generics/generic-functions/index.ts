class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let arrayUtils = new ArrayUtils();

let number1 = ArrayUtils.wrapInArray("1");
let number2 = ArrayUtils.wrapInArray<number>(1);

console.log(number1);
