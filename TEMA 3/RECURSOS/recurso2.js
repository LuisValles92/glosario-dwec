var var_json = '{ "name":"John", "age":30, "city":"New York" }';
var obj = JSON.parse(var_json);
delete obj.name;
var_json = JSON.stringify(obj);
console.log(var_json);