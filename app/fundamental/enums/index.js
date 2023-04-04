// builtin types for fundamental
// const small = 1;
// const medium = 2;
// const large = 3;
//PasCalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var mySize = Size.Small;
console.log(mySize);
