//Zadanie 2
//Ten kod prawidłowo parsuje poprawny JSON i wyświetla obiekt w konsoli

const json = '{"name":"Mango","age":3,"isHappy":true}';
const object = JSON.parse(json);
console.log(object);
