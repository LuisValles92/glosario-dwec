var var_json = '{ "name":"John", "age":30, "city":"New York" }';
var obj = JSON.parse(var_json, function(key, value) {
    if (typeof value == "string") {
        return value.toUpperCase();
    }
    return value;
});
// console.log(obj);
var_json = JSON.stringify(obj);
console.log(var_json);