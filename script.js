var people = [
    {number: "134340", name: "Stark", image: "1.jpeg"},
    {number: "7842", name: "One Piece", image: "2.jpeg"},
    {number: "12022012", name: "Viaje", image: "3.jpeg"},
    {number: "14122022", name: "Stark2", image: "4.jpeg"},
    {number: "1108", name: "Frieren", image: "5.jpeg"}
];

// Función para generar un número aleatorio dentro de un rango
function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function accionBotonClick() {
    // Genera un número aleatorio entre 0 y el total de personas - 1
    var randomNumber = generarNumero(0, people.length - 1);
    
    // Muestra el número aleatorio en el elemento con id "randomNumber"
    document.getElementById("randomNumber").innerText = "Número Aleatorio: " + (randomNumber + 1);
    
    // Obtiene la persona correspondiente al número generado
    var selectedPerson = people[randomNumber];
    
    // Actualiza la imagen de la persona
    document.getElementById("personImage").src = "assets/" + selectedPerson.image;
    
    // Muestra el nombre de la persona
    document.getElementById("personName").innerText = selectedPerson.name;
}

// Agregar un event listener al botón para llamar a la función al hacer click
document.getElementById("btngenerar").addEventListener("click", accionBotonClick);
