var people = [
    {number: "134340", name: "Orac", image: "f0.jpg"},
    {number: "7842", name: "Orac", image: "f1.jpg"},
    {number: "1234", name: "Orac", image: "f2.jpg"},
    {number: "4321", name: "Orac", image: "f3.jpg"},
    {number: "2487", name: "Orac", image: "f4.jpg"}
]

//funcion para genra un numero al azar
function generarNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function accionBotonClick(){
    //genera un numero aleatorio entre 1 y el numero total de personas 
    var randomNumber = generarNumero(1, people.length);  
    //Muestra el numero de aleatorio en el elemento "id" "randomNumber"
    document.getElementById("randomNumber").innerText = "numero Aleatorio;" + randomNumber;
    //obtiene la persona correspondite el numero generado
    var selectedperson =people[randomNumber -1];
    //Actualiza el codigo de Alunmo
    document.getElementById("codigoPerson").innerText = selectedperson.number;
    //Actualiza la Imagen 
    document.getElementById("personImage").src = "assets/" + selectedperson.image;
    //Muestra el nombre de la persona
    document.getElementById("personName").innerText = selectedperson.name;
}

//agregan un event listener al boton para llamar ala funcion
accionBotonClick
document.getElementById("btngenerar").addEventListener("click", accionBotonClick);