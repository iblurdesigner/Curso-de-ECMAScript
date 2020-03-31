// <<< Object entries >>>
const data = {
    frontend: 'David',
    backend: 'Sara',
    designer: 'Lulo'
}

const entries = Object.entries(data)
console.log(entries)

// cuantos elementos contiene un objeto?
console.log(entries.length)

//tranformar los valores de un objeto a un array
const data = {
    frontend: 'David',
    backend: 'Sara',
    designer: 'Lulo'
}

const transf = Object.values(data)
console.log(transf)
console.log(transf.length)


//<<< Padding >>
const frase = 'World'
console.log(frase.padStart(11, 'Hello '))
console.log(frase.padEnd(12, '!'))


// <<<< Async await >>>>

const helloWorld = () => {
    return new Promise( (resolve, reject ) => {
        (true) ? setTimeout( ()=> resolve('Hello World'), 3000) : reject(new Error('Test Error'))
    })
}

const saludo = async () => {
    const hello = await helloWorld()

    console.log(hello)
}

saludo()

// otra forma

const foo = async () => {
    try{
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log('ocurrio un error! ${error}')
    }
}

foo()