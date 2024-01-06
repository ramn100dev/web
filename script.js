document.body.style.overflow = 'hidden';

                        /* ORGANIZACION DEL ARCHIVO "script.js"

                            1.Variables para almacenar los id del HTML importantes
                            2.Funciones para mostrar el contenido de los apartados
                            -sobreMi
                            -experiencia
                            -conocimientos
                            -proyectos
                            3.Funcion eraseContent para borrar todo menos los puntos

                            (☞⌐▀͡ ͜ʖ͡▀ )☞
                        */ 

/*------------------ VARIABLES ------------------*/    

//Relaccionadas con el main
var contentIsErased = false //Bool para comprobar si se ha modificado el content
var indice = 0 //Contador que guardara el apartado con el que se ha interactuado
var main = document.getElementById('main')
var mainOgHeigh = main.style.height.length
var contentGuardado = document.getElementById('content').innerHTML
var logo = document.getElementById('logo')

//Relaccionadas con los apartados
var sobreMiActivated = false 


var proyectosActivated = false

/*------------------ FUNCIONES APARTADOS ------------------*/   

//LOGICA DEL CODGIGO
/*
    Cuando se clicka en un punto o en un div respectivo a un apartado, borra el contenido principal, muestra el del indice, accede a la
    funcion check() que se encarga de revisar que no haya ningun otro apartado abierto, y se le asigna al indice un valor. En el caso 
    de que se clicke de nuevo el apartado(Comprobado por un if) se restaura el contenido y el apartado, ademas de cambiar el valor
    del indice a 0. Si se pulsa en el logo, comprueba el indice, cerrando el apartado y mostrando de nuevo el contenido
 */



//1.-SOBRE MI

function sobreMi(){
    if(indice == 1){ //Se vuelve a cerrar
        restaurarSobreMi()
        restaurarContent()
        indice = 0
    } else { 
        contentIsErased = true
        aumentarSobreMi()
        borrarContent()
        check(i = 1)
        
        indice = 1
    }
    
}

function aumentarSobreMi(){ //Se muestra el indice 1, guardando el valor, y se llama al checker para que borre el contenido
    var sobreMi = document.getElementById('sobreMi')
    sobreMi.id = 'sobreMiAumentado'
}

function restaurarSobreMi(){
    var sobreMi = document.getElementById('sobreMiAumentado') //Aqui la consola da un error porque en el HTML no existe tal id, pero si esta creado y funciona correctamente, no he podido corregirlo de ninguna manera, y no me era prioritario ya que la pagina funciona de manera correcta
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


//CHECK (Comprueba si tiene que cerrar un indice antes de abrir otro)

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

function checkerContent(){ //Revisa si tiene que borrar o restaruar el contenido
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
    } else {
        alert("Muchas gracias a mi profesora Vanesa por aguantarme, Ivan y Vicente por echarme una mano con temas del dominio, y a ti visitante de mi pagina web (づ ◕‿◕ )づ")
    }
}

function borrarContent(){
    var content = document.getElementById('content')
    content.innerHTML = ''
    main.style.height = "20%"
    logo.style.maxWidth = "25%"
    logo.style.cursor = "pointer"
    logo.style.marginBottom = "20px"
}

function restaurarContent(){
    var content = document.getElementById('content')
    content.innerHTML = contentGuardado
    main.style.height = "60%"
    logo.style.maxWidth = "40%"
    logo.style.cursor = null
}