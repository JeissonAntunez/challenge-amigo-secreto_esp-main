# Amigo Secreto

Este es un pequeño proyecto en JavaScript para realizar un sorteo de "Amigo Secreto". Permite agregar nombres a una lista y luego asignar aleatoriamente a cada persona un amigo secreto sin repetir.

## 📌 Características
- Agregar nombres a la lista.
- Evitar nombres duplicados o inválidos.
- Realizar el sorteo garantizando que nadie se asigne a sí mismo.
- Mostrar los resultados en pantalla.

## 🚀 Instalación y Ejecución
Este proyecto no requiere instalación, solo sigue estos pasos:
1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Agrega nombres y presiona "Sortear" para ver los resultados.

## 🛠️ Tecnologías Utilizadas
- HTML
- CSS (opcional para estilos adicionales)
- JavaScript

## 📜 Código Fuente
A continuación, el código JavaScript que maneja la lógica del sorteo:

```javascript
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
```

## 📷 Capturas de Pantalla
### 📌 Agregando Nombres
![Captura de Agregar Nombres](/challenge-amigo-secreto_esp-main/assets/agregar.jpeg)

### 🎲 Realizando el Sorteo
![Captura del Sorteo](/challenge-amigo-secreto_esp-main/assets/agregarAmigos.jpeg)

## 🔥 Cómo Usarlo
1. Escribe un nombre en el campo de entrada y presiona "Agregar".
2. Repite hasta tener al menos dos nombres.
3. Presiona "Sortear" para ver las asignaciones.
4. Los resultados aparecerán en pantalla.

## 🧐 Posibles Problemas y Soluciones
| Problema | Solución |
|----------|---------|
| No permite agregar nombres | Asegúrate de que el campo no esté vacío y que el nombre no sea un número. |
| El sorteo no funciona | Debe haber al menos dos nombres en la lista. |
| Una persona se asigna a sí misma | Reinicia el sorteo, el script garantiza que esto no ocurra. |

## 📌 Contribución
Si deseas mejorar este proyecto, ¡eres bienvenido! Puedes hacer un fork, modificar el código y enviar un pull request.

## 📄 Licencia
Este proyecto está bajo la licencia MIT.

---

📢 ¡Disfruta organizando tu Amigo Secreto de forma fácil y divertida! 🎁

