// Cargar el array de tareas
let tareas = [];
cargarTareas();

// Cargar el array de tareas
function cargarTareas() {
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
}

// Guardar el array de tareas
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para validar que el nombre solo contenga letras
function validarNombre(nombre) {
    return /^[a-zA-Z\s]+$/.test(nombre);
}

// Agregar una nueva tarea
function agregarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!validarNombre(nombre)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    tareas.push({ nombre: nombre });
    guardarTareas();
    alert("Tarea agregada");
}

// Listar todas las tareas
function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas");
        return;
    }
    alert(tareas.map((tarea) => tarea.nombre).join("\n"));
}

// Editar una tarea existente
function editarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!validarNombre(nombre)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    let index = tareas.findIndex((tarea) => tarea.nombre === nombre);
    if (index === -1) {
        alert("La tarea no existe");
        return;
    }
    let nuevoNombre = prompt("Ingresa el nuevo nombre de la tarea");
    if (nuevoNombre.trim() === "") {
        alert("El nuevo nombre de la tarea no puede estar vacío");
        return;
    }
    if (!validarNombre(nuevoNombre)) {
        alert("El nuevo nombre de la tarea solo puede contener letras");
        return;
    }
    tareas[index].nombre = nuevoNombre;
    guardarTareas();
    alert("Tarea editada");
}

// Eliminar una tarea existente
function eliminarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!validarNombre(nombre)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    let index = tareas.findIndex((tarea) => tarea.nombre === nombre);
    if (index === -1) {
        alert("La tarea no existe");
        return;
    }
    tareas.splice(index, 1);
    guardarTareas();
    alert("Tarea eliminada");
}

// Función para mostrar el menú
function mostrarMenu() {
    let opcion = prompt("Ingrese una opción:\n1. Agregar Tarea\n2. Listar Tareas\n3. Editar Tarea\n4. Eliminar Tarea\n0. Salir");
    switch (parseInt(opcion)) {
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 0:
            finalizarprograma();
            return; // Salir del programa
        default:
            alert("Opción inválida");
    }
    mostrarMenu(); // Mostrar el menú nuevamente después de ejecutar una opción
}

// Función para finalizar el programa
function finalizarprograma() {
    if (confirm("¿Desea finalizar el programa?")) {
        alert("Hasta pronto");
    } else {
        mostrarMenu();
    }
}

// Iniciar el programa mostrando el menú
mostrarMenu();
