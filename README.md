**Este es un proyecto dado por one education, para organizar un juego de amigo secreto. Permite a los usuarios ingresar los nombres de los participantes, sortear un amigo al azar y ver el resultado.**

📝 #Cómo Funciona
##La aplicación se encarga de manejar la lista de participantes y el sorteo de manera aleatoria.

###Añadir Amigos: 
En el campo de texto, puedes escribir un nombre y hacer clic en "Añadir". El nombre se agregará a una lista visible en la página.

###Validación: 
Si intentas añadir un nombre que ya existe o un campo vacío, la aplicación te avisará con una alerta. Para asegurar la uniformidad, todos los nombres se convierten a mayúsculas.

###Eliminar Amigos: 
Cada nombre en la lista tiene una "❌" a su lado. Puedes hacer clic en ella para eliminar a un participante.

###Sortear Amigo: 
Cuando la lista de amigos está completa, haz clic en "Sortear amigo" para que la aplicación elija un nombre al azar y lo muestre en pantalla, una vez que salga un nombre puedes eliminarlo de la lista para que no vuelva a aparecer el mismo.

###Validación de sorteo: 
En caso de que hagas clic en "sortear amigo", sin tener amigos ingresados te avisará una alerta. 

⚙️ #Tecnologías Utilizadas
*HTML: Estructura principal de la página.

*CSS: Estilos y diseño visual de la interfaz.

*JavaScript: Lógica de la aplicación, manejo de eventos y manipulación del DOM.

🛠️ #Código Principal (app.js)
A continuación, se describen las funciones clave del archivo JavaScript:

###agregarAmigo():

Captura el nombre del campo de entrada.

Convierte el nombre a mayúsculas (.toUpperCase()) para que el tamaño del texto sea consistente con el emoji de eliminación.

Valida si el campo está vacío o si el nombre ya existe en la lista.

Si la validación es exitosa, agrega el nombre al array amigos y llama a mostrarAmigos() para actualizar la interfaz.

Finalmente, limpia el campo de entrada para que puedas escribir un nuevo nombre.

###mostrarAmigos():

Limpia la lista HTML (<ul id="listaAmigos">) antes de volver a generarla para evitar duplicados.

Recorre el array amigos y crea un elemento de lista (<li>) para cada nombre.

Agrega un espacio después del nombre para separarlo del botón de eliminación.

Crea un <span> con el emoji "❌" que actúa como botón de eliminación. Al hacer clic, elimina el nombre del array y vuelve a llamar a mostrarAmigos() para refrescar la lista.

###sortearAmigo():

Selecciona un nombre al azar del array amigos utilizando Math.random().

Muestra el resultado en el elemento <div> con el ID "resultado".

Si no hay nombres en la lista, muestra una alerta al usuario.

🚀 #Próximos Pasos

Para una siguiente iteración, se espera agregar el botón de reiniciar para volver a generar el juego sin tener que actualizar.
