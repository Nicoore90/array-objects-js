let input = [
    {nombre: "Pedro", edad: 20, ciudad: "Cordoba"},
    {nombre: "Patricia", edad: 22, ciudad: "Cordoba"},
    {nombre: "Jose", edad: 23, ciudad: "Mendoza"},
    {nombre: "Maria", edad: 20, ciudad: "Cordoba"},
    {nombre: "Juan", edad: 20, ciudad: "Cordoba"},
    {nombre: "Ana", edad: 22, ciudad: "Cordoba"},
];
/*
function sortArray(a,b) {
    if(a.nombre < b.nombre) {
        if(a.edad > b.edad) {
            return 1
        } else {
            return -1
        }
        return 1
    } else if(a.nombre > b.nombre) {
        if(a.edad > b.edad) {
            return 1
        } else return -1
    } else {
        if(a.edad > b.edad) {
            return 1
        } else return -1
    }
}
*/

function sortArray(a,b) {
    if(a.edad < b.edad) {
        return -1
    } else if(a.edad > b.edad) {
        return 1
    } else {
        if(a.nombre < b.nombre) {
            return -1
        } else if(a.nombre > b.nombre) {
            return 1
        } else return 0
    }
}

input.sort(sortArray)

let arr = []

function agregar() {
    for (el in input) {
        if(input[el].ciudad == "Cordoba"){
            arr.push(input[el].nombre)
        }
    }
}

agregar()
