/*
Se tienen las calificaciones de de un alumno
const Fisica = 17
const Quimica = 16
const lenguaje = 19
const Matematica = 14
const Deporte= '09'
const Estadistica = '12'

Desarrollar una funcion que calcule el promedio de todas las materias 
y mostrar por consola por mensaje.

NOTA: Existe un bug en el backend que devuelve algunas materias 
con su valor en string y aun no ha podido ser resuelto. 
hacer la funcion que resuelva este problema desde el front al 
mostrar los datos.

Si el promedio es menor a 10, mostrar: llamar a representante. si es superior 
a 10 decirle que 10 es nota y lo demas es lujo
*/

const Fisica = 05
const Quimica = 03
const lenguaje = 09
const Matematica = 10
const Deporte= '09'
const Estadistica = '12'

function average () {
    let suma = (Fisica + Quimica + lenguaje + Matematica + parseInt(Deporte) + parseInt(Estadistica)) / 6
    if (suma > 10) {
        return '10 es nota y lo demas es lujo'
    }else {
        return 'llamar al representante'
    }
}

let totalAverage = average()

console.log(totalAverage)