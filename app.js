let amigos = [];

function agregarAmigo() {
    const agregar = document.getElementById("amigo");
    let nombreAmigo = agregar.value.trim();

    //preferi que quedara todo el mayuscula para que no se viera tan pequeño en comparación de la X de eliminar.
    nombreAmigo = nombreAmigo.toUpperCase()

    //comprobar que el campo no este vacío
    if (nombreAmigo === "") {
        alert("Por favor inserte un nombre");
        limpiar();
        return;
    } else if (amigos.includes(nombreAmigo)) {
        alert("El nombre ya se encuentra, por favor ingrese otro");
        limpiar();
        return;
    }

    //con esto actualizo la lista de amigos
    amigos.push(nombreAmigo);
    mostrarAmigos(); 
    //limpio la entrada.
    limpiar();
}

function limpiar() {
    document.querySelector("#amigo").value = "";
}

function mostrarAmigos() {
    const listar = document.getElementById("listaAmigos");
    listar.innerHTML = ''; // Limpia la lista antes de volver a generarla

    amigos.forEach(nombreAmigo => {
        const listItem = document.createElement("li");
        //Le doy un espacio para que no quede pegado a la X de eliminar
        listItem.textContent = nombreAmigo + " ";

        const accionEliminar = document.createElement("span");
        accionEliminar.textContent = "❌";
        accionEliminar.classList.add("accion-eliminar");
        
        // Define la acción del botón de eliminar
        accionEliminar.onclick = function() {
            // Elimina el amigo del array y actualiza la lista
            amigos = amigos.filter(amigo => amigo !== nombreAmigo);
            mostrarAmigos();
        };

        listItem.appendChild(accionEliminar);
        listar.appendChild(listItem);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length > 0) {
        const amigoAzar = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[amigoAzar];
        resultado.innerHTML = `Tu amigo secreto es: ${amigoSeleccionado}`;
    } else {
        alert("No has ingresado ningún amigo");
    }
}