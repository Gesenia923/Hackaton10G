/*
   Utilizando función arrow, 
   crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

*/



function setName(name1="Sebastián", lastname1="Yabiku", age1=33) {
    return `Hola, mi nombre es ${name1} ${lastname1} y mi edad es ${age1} años.`
}

console.log(setName());
