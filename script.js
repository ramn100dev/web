/* ORGANIZACION DEL ARCHIVO "script.js"

    1.Variables para almacenar los id del HTML importantes

    2.Funciones para mostrar el contenido de los apartados
    -sobreMi
    -experiencia
    -conocimientos
    -proyectos
    -check

    3.Funcion eraseContent para borrar todo menos los puntos

    (☞⌐▀͡ ͜ʖ͡▀ )☞

    -----------

    NOTAS: Me habria gustado, igual que el main se edita cuando se abre el apartado 1 o 4, que hiciera lo mismo en el 2 y 3, dejando
    solo el logo, y los puntos cambiarian a tener un flex-direction: row, de forma que vayan uno debajo de otro, creo que es una buena
    idea ya que el usuario promedio tendra mas facil para entender que para cerrar todas las pestañas solo debe de cerrar el logo, aunque
    ahora mismo no dispongo del tiempo para perfeccionarlo, mas en adelante lo terminare ;-;

    NOTAS SOBRE EL ERROR DEL APARTADO 1,2,3: No entiendo el error que me muestra en la consola al interactuar con el logo, lo extraño
    es que no repercute en la interfaz de la pagina, y que con el apartado 4 no pasa a pesar de que comparte exactamente la misma estructura
    y metodologia que los otros 3 apartados, seguramente este sea la ultima cosa que intente corregir, no es importante, pero me gustaria
    tener un codigo lo mas limpio posible

    ----------
*/ 


//ESTA FUNCION ES NECESARIA PARA QUE LA PAGINA NO HAGA SCROLL EN NINGUNA DIRECCION (Tal vez sea el motivo por el cual causa que desde el movil se vea mal, idk, lo testeare proximamente)
document.body.style.overflow = 'hidden';


/*------------------ VARIABLES ------------------*/    

//Relaccionadas con el main
var contentIsErased = false //Bool para comprobar si se ha modificado el content
var indice = 0 //Contador que guardara el apartado con el que se ha interactuado
var main = document.getElementById('main')
//var mainOgHeigh = main.style.height.length
var contentGuardado = document.getElementById('content').innerHTML
var contentGuardado2 = document.getElementById('content2').innerHTML
var logo = document.getElementById('logo')

//Relaccionadas con los apartados
var sobreMiActivated = false 


var proyectosActivated = false

/*------------------ FUNCIONES APARTADOS ------------------*/   

//LOGICA DEL CODGIGO
/*
    Cada vez que se selecciona un apartado, ya sea desde el main o desde una de las tiras de los lados, se revisa el indice en la funcion 
    check(), para asi poder cerrar un apartado en el caso en el que haya alguno abierto. Tras esto, se guarda un nuevo indice en una 
    variable, segun el apartado seleccionado. Si se pulsa el logo, se revisa el indice para cerrar dicho apartado, y se establece en 0
    ya que no hay ninguno abierto. Se sigue una logica parecida cuando se clicka de nuevo sobre la etiqueta, Se cierra el apartado y se
    establece el indice en 0
 */



//1.-SOBRE MI

function sobreMi(){
    if(indice == 1){ //Se vuelve a cerrar
        restaurarSobreMi()
        restaurarContent()
        indice = 0
    } else { //Si no esta abierto este indice, se abre
        contentIsErased = true
        aumentarSobreMi()
        borrarContent()
        check(i = 1)
        
        indice = 1
    }
    
}

function aumentarSobreMi(){ //Se muestra el indice 1
    var sobreMi = document.getElementById('sobreMi')
    sobreMi.id = 'sobreMiAumentado'
}

function restaurarSobreMi(){
    var sobreMi = document.getElementById('sobreMiAumentado') 
    sobreMi.id = 'sobreMi'
}



//2.-EXPERIENCIA

function experiencia(){
    if(indice == 2){ 
        restaruarExperiencia()
        restaurarContent()
        indice = 0
    } else { 
        contentIsErased = true
        aumentarExperiencia()
        restaurarContent()
        check(i = 2)
        indice = 2
    }
    
}

function aumentarExperiencia(){
    var experiencia = document.getElementById('experiencia')
    experiencia.id = 'experienciaAumentado'
}

function restaruarExperiencia(){
    var experiencia = document.getElementById('experienciaAumentado') 
    experiencia.id = 'experiencia'
}



//3.-CONOCIMIENTOS 

function conocimientos(){
    if(indice == 3){ 
        restaurarConocimientos()
        restaurarContent()
        indice = 0
    } else { 
        contentIsErased = true
        aumentarConocimientos()
        restaurarContent()
        check(i = 3)
        indice = 3
    }
    
}

function aumentarConocimientos(){
    var conocimientos = document.getElementById('conocimientos')
    conocimientos.id = 'conocimientosAumentado'
}

function restaurarConocimientos(){
    var conocimientos = document.getElementById('conocimientosAumentado') 
    conocimientos.id = 'conocimientos'
}



//4.-PROYECTOS

function proyectos(){
    if(indice == 4){ 
        restaurarProyectos()
        restaurarContent()
        indice = 0
    } else { 
        console.log(indice)
        contentIsErased = true
        aumentarProyectos()
        borrarContent()
        check(i = 4)
        indice = 4
    }

}

function aumentarProyectos(){ 
    var proyectos = document.getElementById('proyectos')
    proyectos.id = 'proyectosAumentado'
}

function restaurarProyectos(){
    
    var proyectos = document.getElementById('proyectosAumentado')
    proyectos.id = 'proyectos'
}               


//CHECK (Comprueba si tiene que cerrar un indice antes de abrir otro, en caso contrario, simplemente no hace nada)

function check(i){
    
    if(indice != i){
        
        switch (indice) {
            case 1:
                restaurarSobreMi()
                break;
            case 2:
                restaruarExperiencia()
                break;
            case 3:
                restaurarConocimientos()
                break;
            case 4:
                restaurarProyectos()
            default:
                break;
        }
    }
}



/*------------------ FUNCION CONTENT ------------------*/  

function checkerContent(){ //Revisa el indice que tiene que cerrar una vez que se clicka el logo y restaura el main 
    if(contentIsErased){
        contentIsErased = false
        switch (indice) {
            case 1:
                restaurarSobreMi()
                indice = 0
                restaurarContent()
            case 2:
                restaruarExperiencia()
                indice = 0
                restaurarContent()
            case 3:
                restaurarConocimientos()
                indice = 0
                restaurarContent()
            case 4:
                restaurarProyectos()
                indice = 0
                restaurarContent()
            default:
                break;
        }
    } else { //Mensaje secreo o mai ga (─‿‿─)
        alert("Muchas gracias a mi profesora Vanesa por aguantarme, Ivan y Vicente por echarme una mano con temas del dominio, y a ti visitante de mi pagina web (づ ◕‿◕ )づ")
    }
}

function borrarContent(){
    var content = document.getElementById('content')
    content.innerHTML = ''
    main.style.height = "20%"
    logo.style.maxWidth = "30%"
    logo.style.cursor = "pointer"
    logo.style.marginBottom = "20px"

    var content2 = document.getElementById('content2')
    content2.innerHTML = ''
}

function restaurarContent(){
    var content = document.getElementById('content')
    content.innerHTML = contentGuardado
    main.style.height = "60%"
    logo.style.maxWidth = "80%"
    logo.style.cursor = null

    var content2 = document.getElementById('content2')
    content2.innerHTML = contentGuardado2
}