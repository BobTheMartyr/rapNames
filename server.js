const express = require("express")
const res = require("express/lib/response")
const app = express()
const PORT = 8000

const rappers = {
    "21 savage": {
        'age': 29,
        "birthName": 'Shéyaa Bin Abraham-Joseph',
        "birthLocation": 'London, England'
    },
    "chance the rapper": {
        'age': 29,
        "birthName": 'Chancelor Bennett',
        "birthLocation": 'Chicago, Illinois'
    },
    'unknown': {
        'age': 69,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')                                                //looks in the main directory for index.html
})

app.get('/api/:name', (request, response) => {                                  
    const name = request.params.name.toLowerCase()                                              //pulls the parameter out of the url and assigns it to a variable.  REQUEST.PARAMS.${NAME}                            
    if( rappers[name] ){
        response.json(rappers[name])                                                  //Put what you want to respond with inside the .json parentheses uses brackets because .notation doesnt work with spaces. Takes the query param and passes it as a key in the rappers object 
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`)
})