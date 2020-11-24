/*
La aplicación actual tiene una ventana que pregunta How many km are left to go?.

Instrucciones:
Una vez el usuario ingresa la cantidad, tenemos que imprimir una de las siguientes respuestas:

Si quedan más de 100km, nosotros respondemos: "Are we there yet?"
Si quedan más de 50km, nosotros respondemos: "We'll be there in 5 minutes"
Si quedan menos o igual a 50km, nosotros respondemos: "I'm parking, I see you right now"
*/

let kilometros = 50.5

function distance () {
    if (kilometros > 100) {
        return "Are we there yet?"
    }else {
        if (kilometros > 50) {
            return "We'll be there in 5 minutes"
        }else {
            if (kilometros <= 50) {
                return "I'm parking, I see you right now"
            }
        }
    }
}

let mensage = distance()

console.log(mensage)
