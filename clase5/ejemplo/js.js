/*Creo todas mis variables que tomaran de referencias etiquetas en mi HTML*/
/*tomode referencia el ID de la etiqueta*/
const addList = document.getElementById("txt");
const search = document.getElementById("search");
const main = document.getElementById("mainId");
const spinner = document.getElementById("spinner");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
/*Tomo de referencia el nombre d ela etiqueta*/
const msg = document.querySelector("label");
/*Creo un array vacio en donde ire pusheando mis objetos*/
const arr = [];
/*Creo un elemento HTML, en este caso una etique <li>*/
let listItem = document.createElement("li");
/*creo mi primera funcion llamada a travez del evento "click"
La tarea de esta funcion es verificar si hay texto agregado en el input y si el elemento a agregar ya existe, 
en caso que el elemento a agregar ya exista retornara una funcion distinta a que si el elemento no existiera*/
btn.addEventListener("click" , () => {
    /*llamo a un funcion cuyo objetivo es verificar si el elemento a agregar ya existe en el array*/
    let find = findElement(addList.value);
    /*condicion para evitar que cadenas de texto vacias sean agregadas al array*/
    if(addList.value.length > 0)
    {
        /*Si el elemento no existe llamo a la funcion createList()*/
        if(find == -1)
        {
           return createList()
        }else {
            /*Si el elemento no existe llamo a la funcion existingElement()*/
            return existingElement()
        }
    }
})
/*Funcion destinada a modificar el DOM creando mi lista de elementos*/
function createList(filter) {
    let map;
    /*Verifico nuevamente si la cadena de texto ingresada tiene contenido (este paso lo hice para corregir un error que tenia)*/
    if(addList.value.length > 0)
    {
        /* agrego un objeto a mi array, el elemento tiene dos "keys" uno es el valor del input y otro es la clase que ire agregando en otra funcion */
        arr.push({value : addList.value, class : ""})
    }
    /*Solo le paso paremetro a esta funcion desde la funcion que ejecuta mi buscador, por lo tanto si no utilizo el buscador y llamo a esta funcion desde otro lado 
    el paremetro queda como "undefined" asi que para evitar errores cree esta condicion*/
    if(filter != undefined)
    {
        /*Este parametro que llame "filter" proviene del resultado de mi campo de busqueda, lo que hago aqui es
        recorrer solo el array de objetos que arrojo mi busqueda*/
        map = filter.map((x) => {
            return (
                `<li class="${x.class}">${x.value} 
                    <button class="check ">✔</button> 
                    <button class="delete">❌</button>
                </li>`
                )
        })
    }else {
        /*Recorro mi array de objetos donde tengo todas las tareas agregadas*/
        map = arr.map((x) => {
            return (
                `<li class="${x.class}">${x.value} 
                    <button class="check ">✔</button> 
                    <button class="delete">❌</button>
                </li>`
                )
        })
    }
/*Inserto mi codigo HTML, todo proviene de lo que retorna mi variable "map" utilizo el metodo join() por que mi variable map me retorna los valores con una 
coma " , " entre cada objeto, asi que la elimino con este metodo*/
    list.innerHTML = map.join("");
    /*Seteo el valor del input */
    addList.value = "";
    /*Finalizo la funcion retornando otra funcion*/
    return modifierList()
}
/* Funcion creada con el unico proposito de agregarle funciones a los botones creados dentro de la variable "map"*/
function modifierList()
{
    /*Tomo de referencia en nombre de la clase de mis botones creados en la variable "map" */
    let checkItem = document.getElementsByClassName("check");
    let deleteItem = document.getElementsByClassName("delete");
    /*Cuando utilizamos getElementsByClassName este nos devolvera un "collections" con todos los elementos que coincidan, 
    asi que este "collections" o recorro con mi bucle for y le asigno una funcion a cada elemento*/
    for (let i = 0; i < checkItem.length; i++) {
        checkItem[i].addEventListener("click", () => {
            return complete( checkItem[i].parentElement);
        })
        
    }
    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].addEventListener("click", () => {
            return suppress(deleteItem[i].parentElement.innerText.slice(0,-4))
        })
    }
}
/* Funcion destinada a agregar una clase que contiene una propiedad que tacha al texto de la lista para que el usuario pueda marcar
las tareas que ya realizo */
function complete(element)
{
    /*Agrego la clase "lineCheck a la etiqueta <li>*/
    element.classList.add("lineCheck")
    /*En el texto de mi etiqueta <li> entra tambien los simbolo "✔""❌" que use para los botones, esto no lo necesito asi que con el metodo slice()
    solo obtengo el texto que necesito*/
    let onlyTxt = element.innerText.slice(0,-4);
    /* Llamo a mi funcion encargada de verificar si mi elemnto existe en mi array */
    let find = findElement(onlyTxt)
    /* mediante el indice que retorna la funcion  findElement() busco el objeto al que le asigne la clase "lineCheck", 
    ya encontrado el objeto especifico modifico el valor de la "key" "class" 
    (este paso fue agregado ya que si tachabas una tarea de la lista y luego agregabas una nueva la tarea tachada aparecia como si no fuera realizada)*/
    arr[find].class = element.classList[0];
}
/*Funcion destinada a eleminar un elemento en especifico de la lista*/
function suppress(textElement)
{
    /*Llamo a mi funcion destinada a verificar si el elemnto existe en mi array*/
    let find = findElement(textElement);
    /*mediante el metodo splice() elimino de mi array el objeto especifico*/
    let deleteItemFromArr = arr.splice(find,1);
    /* retorno la funcion createList() para que me vuelva a crea la lista sin el elemento eliminado*/
    return createList();
}
/* Mi funcion favorita de todo el script */
function findElement(textElement)
{
    /* mediante el meotod findIndex busco algun valor que coincida con el parametro de mi funcion, este metodo me devuelve el indice del objeto que coincida y
    en caso que no coincida devuelve -1*/
    return arr.findIndex((item) => item.value == textElement);
}
/* Funcion destinada a enviar un mensaje al usuario notificando que la tarea que quiere agregar ya existe */
function existingElement() {
    msg.classList.remove("hide");
    msg.classList.add("show");
    addList.value = "";
    setTimeout(() => {
        msg.classList.add("hide");
        msg.classList.remove("show");
    },4000)
}
/* Mi buscador, funcion destinada a buscar en mi array algun elemento que coincida con el valor del input */
search.addEventListener("input", () => {
    /* Mediante el metodo filter() buscado algun valor que conincida con el valor del input 
    (este metodo me devuelve un array de objetos si consigue coincidencia alguna) */
    let filter = arr.filter((item)  => item.value == search.value);
    /* si fillter.length no tiene longitud, basicamente si la longitud es igual a cero es por que no encontro coincidencia*/
    if(filter.length <= 0)
    {
        /*Si la longitud del valor de mi input en mayor a cero quiere decir que el usuario esta ejecutando una busqueda*/
        if(search.value.length > 0)
        {
            /*Aqui lo que hago es agregar y eliminar clases para mostrar mi "spinner" */
            spinner.classList.remove("hide")
            list.classList.add("hide")
        /* Si la longitud del valor de mi input es igual a cero quiere decir que mi usuario no esta buscando nada */
        }else if (search.value.length <= 0){
            /*Aqui lo que hago es agregar y eliminar clases para ocultar mi "spinner" */
            spinner.classList.add("hide")
            list.classList.remove("hide")
            createList(undefined)
        }
    }else {
        /*Si la variable "filter" encontro coincidecia, oculto mi spinner y llamo a la funcion createList() enviandole como parametro
        mi array de objeto devuelto por mi variable "filter" */
        spinner.classList.add("hide")
        list.classList.remove("hide")
        createList(filter)
    }
})