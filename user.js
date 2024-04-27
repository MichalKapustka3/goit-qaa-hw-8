{
    // Dane osobowe
    "name": "Josh",         // Imię: Josh (string) para klucz wartość
    "weight": 175,          // Waga: 175 (number) para klucz wartość
    "age": 30,              // Wiek: 30 (number) para klucz wartość
    "eyecolor": "brown",    // Kolor oczu: brown (string) para klucz wartość
    "isHappy": true,        // Czy jest szczęśliwy: true (boolean) para klucz wartość

    // Samochody, którymi Josh jeździ
    "cars": ["Chevy", "Honda"], // Samochody: ["Chevy", "Honda"] (array) para klucz wartości

    // Ulubiona książka Josh'a para klucz wartości które sa zagniezdzone w favoriteBook
    "favoriteBook": {             // Ulubiona książka:
      "title": "The Last Kingdom",   // Tytuł: The Last Kingdom (string)
      "author": "Bernard Cornwell",  // Autor: Bernard Cornwell (string)
      "rating": 8.38                 // Ocena: 8.38 (number)
    }
  }

// kopiuj podany ciąg JSON
const json = '{"name":"Mango","age":3,"isHappy":true}';

// Metoda JSON.parse() do konwersji ciągu JSON na obiekt JavaScript
const obj = JSON.parse(json);

// Wydrukuj otrzymany obiekt w konsoli
console.log(obj);

// Sprawdź, czy właściwości otrzymanego obiektu odpowiadają oryginalnemu ciągowi JSON
console.log(obj.name === "Mango"); // true
console.log(obj.age === 3); // true
console.log(obj.isHappy === true); // true

try {
  // Próba parsowania nieprawidłowego ciągu JSON
  const invalidJson = '{name: "Mango", age: 3, isHappy: true}';
  const obj = JSON.parse(invalidJson);

  // Wydrukuj otrzymany obiekt w konsoli
  console.log(obj);
} catch (error) {
  // Obsługa ewentualnego błędu
  console.error("Wystąpił błąd podczas parsowania JSON:");
  console.error("Rodzaj błędu:", error.name);
  console.error("Wiadomość:", error.message);
}
