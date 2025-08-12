# 🎁 Amigo Secreto

**Este es un proyecto dado por One Education, para organizar un juego de amigo secreto.**  
Permite a los usuarios ingresar los nombres de los participantes, sortear un amigo al azar y ver el resultado.

---

## 📝 Cómo Funciona

La aplicación se encarga de manejar la lista de participantes y el sorteo de manera aleatoria.

### ➕ Añadir Amigos
En el campo de texto puedes escribir un nombre y hacer clic en **"Añadir"**.  
El nombre se agregará a una lista visible en la página.

### ✅ Validación
- Si intentas añadir un nombre que ya existe o dejas el campo vacío, la aplicación mostrará una alerta.  
- Todos los nombres se convierten a **mayúsculas** para mantener uniformidad.

### ❌ Eliminar Amigos
Cada nombre en la lista tiene una **"❌"** a su lado.  
Puedes hacer clic en ella para eliminar a un participante.

### 🎲 Sortear Amigo
Cuando la lista de amigos está completa, haz clic en **"Sortear amigo"** para que la aplicación elija un nombre al azar y lo muestre en pantalla.  
Una vez sorteado, puedes eliminarlo de la lista para que no vuelva a aparecer.

### ⚠️ Validación de sorteo
Si intentas **"Sortear amigo"** sin tener participantes, se mostrará una alerta.

---

## ⚙️ Tecnologías Utilizadas
- **HTML**: Estructura principal de la página.  
- **CSS**: Estilos y diseño visual de la interfaz.  
- **JavaScript**: Lógica de la aplicación, manejo de eventos y manipulación del DOM.

---

## 🛠️ Código Principal (`app.js`)

A continuación, se describen las funciones clave del archivo JavaScript:

### `agregarAmigo()`
1. Captura el nombre del campo de entrada.
2. Convierte el nombre a mayúsculas (`.toUpperCase()`).
3. Valida si el campo está vacío o si el nombre ya existe en la lista.
4. Si la validación es exitosa:
   - Agrega el nombre al array `amigos`.
   - Llama a `mostrarAmigos()` para actualizar la interfaz.
5. Limpia el campo de entrada.

### `mostrarAmigos()`
1. Limpia la lista HTML `<ul id="listaAmigos">` antes de volver a generarla para evitar duplicados.
2. Recorre el array `amigos` y crea un elemento `<li>` para cada nombre.
3. Agrega un espacio después del nombre para separarlo del botón de eliminación.
4. Crea un `<span>` con el emoji **"❌"** que actúa como botón de eliminación.  
   Al hacer clic, elimina el nombre del array y vuelve a llamar a `mostrarAmigos()`.

### `sortearAmigo()`
1. Selecciona un nombre al azar del array `amigos` utilizando `Math.random()`.
2. Muestra el resultado en el elemento `<div id="resultado">`.
3. Si no hay nombres en la lista, muestra una alerta.

---

## 🚀 Próximos Pasos
- Agregar un botón de **reinicio** para volver a generar el juego sin tener que actualizar la página.
