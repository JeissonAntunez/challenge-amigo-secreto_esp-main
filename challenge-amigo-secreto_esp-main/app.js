// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    // Validaciones
    if (nombre === "") {
        alert("❌ Por favor, inserte un nombre.");
        return;
    }
    if (!isNaN(nombre)) {
        alert("❌ El nombre no puede ser un número.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("❌ Este nombre ya está en la lista.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Mostrar en la lista
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar input
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("⚠️ Debe haber al menos 2 personas para sortear.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    let amigosSorteo = [...amigos]; // Copia del array original
    let asignaciones = {};

    while (amigosSorteo.length > 0) {
        let amigo1 = amigosSorteo.shift(); // Extrae el primer amigo
        let posibles = amigosSorteo.filter(a => a !== amigo1); // Evitar que se asigne a sí mismo

        if (posibles.length === 0) {
            alert("❌ No se pudo realizar el sorteo correctamente. Inténtalo de nuevo.");
            return;
        }

        let randomIndex = Math.floor(Math.random() * posibles.length);
        let amigo2 = posibles[randomIndex];

        asignaciones[amigo1] = amigo2;

        // Remover amigo2 del array
        amigosSorteo.splice(randomIndex, 1);
    }

    // Mostrar resultado en la lista
    for (let [key, value] of Object.entries(asignaciones)) {
        let item = document.createElement("li");
        item.textContent = `${key} → ${value}`;
        resultado.appendChild(item);
    }
}
