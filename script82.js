//Zadanie 3
//ten kod przechwytuje błąd wywołany przez niepoprawny JSON, 
//wyświetlając w konsoli szczegóły błędu (nazwę i wiadomość).

const invalidJson = '{"name":"Mango","age":3,"isHappy":true}';
try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.error("Name:", error.name);
    console.error("Message:", error.message);
}