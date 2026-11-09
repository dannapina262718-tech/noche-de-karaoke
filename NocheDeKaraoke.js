function prepareSongs(lista){
    //tome como base el bubble sort 
    tamanioArreglo = lista.length // guardamos el tamaño del arreglo para poder recorrerlo
    for(let i = 0; i<tamanioArreglo; i++){ 
        for(let j = 0; j<tamanioArreglo; j++ ){ //con 2 recorre el arreglo con 2 indices diferentes (j y i) para poder compraralos
            if(lista[j]>lista[j+1]){ // en caso de que el numero que esta primero sea mayor al que le sigue
                let mayor = lista[j] // guardamos el mayor (osea el primero) en la variable mayo
                lista[j]= lista[j+1] // guadamos el numero mas pequeño una posicion mas abajo
                lista[j+1]= mayor // guardamos el numero mas grande en donde estaba el mas pequeño (ya los intercambiamos de lugar)
            }
            if(lista[j]===lista[j+1]){ // en caso de que el numero sea igual al que se sigue (esta repetido)
                lista[j]= null;  // cambia el numero ded la primera pocicion por un null
                // nuestra lista ya no tiene reperidos pero si nulls
            }

        }
    }
    const listaSinNull = lista.filter(elemento => elemento !== null) //con el filter quitamos los null para guardar la lista en otra variable
    return listaSinNull; // returneamos la lista sin nulls 
}

// PRUEBAS
const songs1 = [3, 1, 2, 3, 4, 2, 5]
const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]
const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []
const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []
// Nadie anotó nada, la lista queda vacía

