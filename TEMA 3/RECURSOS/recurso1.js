var var_json = '{ "name":"John", "age":30, "city":"New York" }';
var obj = JSON.parse(var_json);
console.log(var_json);
console.log(obj);
var var_json_2 = JSON.stringify(obj);
console.log(var_json_2);