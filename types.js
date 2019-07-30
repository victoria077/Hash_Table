console.log("welcome");
var Item = /** @class */ (function () {
    function Item(key, value) {
        this.key = key;
        this.value = value;
    }
    return Item;
}());
var arr = [];
var Hashtabel = /** @class */ (function () {
    function Hashtabel() {
    }
    Hashtabel.prototype.add = function (key, value) {
        var ind = key.length;
        var ar = [];
        arr[ind] = ar;
        ar.push(new Item(key, value));
    };
    Hashtabel.prototype.get = function (key) {
        var ind = key.length;
        var ar = [];
        arr[ind] = ar;
        return ar[key];
    };
    Hashtabel.prototype["delete"] = function (key) {
        var ind = key.length;
        var ar = [];
        arr[ind] = ar;
        delete ar[key];
    };
    return Hashtabel;
}());
var arr2 = new Hashtabel();
arr2.add("assdfff", 67);
arr2.add("as4dfff", 57);
arr2.add("assdfff", 47);
arr2.get("assdfff");
console.log("assdfff");
console.log(arr);
