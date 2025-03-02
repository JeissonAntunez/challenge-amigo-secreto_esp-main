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
    
    // Desordenar aleatoriamente la lista usando Fisher-Yates
    for (let i = amigosSorteo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigosSorteo[i], amigosSorteo[j]] = [amigosSorteo[j], amigosSorteo[i]];
    }

    // Obtener el último amigo sorteado
    let ultimoAmigo = amigosSorteo[amigosSorteo.length - 1];

    // Mostrar solo el mensaje final
    let mensajeFinal = document.createElement("p");
    mensajeFinal.textContent = `🎁 El amigo secreto es: ${ultimoAmigo}`;
    resultado.appendChild(mensajeFinal);
}
