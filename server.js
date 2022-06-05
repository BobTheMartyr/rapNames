const express = require("express")
const cors =  require('cors')
const app = express()
const PORT = 8000

app.use(cors())

/*const rappers = {
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
}*/


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')                                                //looks in the main directory for index.html
})

app.get('/api/:commander', (request, response) => {                                 
    const name = request.params.commander.toLowerCase()                                          //pulls the parameter out of the url and assigns it to a variable.  REQUEST.PARAMS.${NAME}                            
    if( deck[name] ){
        response.json( deck[name] )                                                              //Put what you want to respond with inside the .json parentheses uses brackets because .notation doesnt work with spaces. Takes the query param and passes it as a key in the rappers object 
    } else {
        response.json("I haven't gotten there yet")
    }
})

app.listen(process.env.PORT || PORT, () => {                                                //environment variable OR hardcoded port
    console.log(`Listning on port ${PORT}`)
})


const deck = {
    "elspeth": {
        "commander": 'Elspeth Resplendent',
        "cards": [
            'The Wandering Emperor', 
            'Plains', 
            'Gideon Blackblade', 
            'Castle Ardenvale', 
            "Elspeth, Sun's Nemesis", 
            "Emeria's Call", 
            'Teyo, Aegis Adept', 
            'Ugin, the Ineffable' ,
            'Eiganjo, Seat of the Empire',
            'Esper Sentinel' ,
            'Hopeful Initiate', 
            'Swords to Plowshares' ,
            'Luminarch Aspirant' ,
            'Ambitious Farmhand' ,
            'Unlicensed Hearse',
            'Pacifism' ,
            'Rune of Sustenance' ,
            'Spirited Companion',
            'Seal Away' ,
            'Thalia, Guardian of Thraben' ,
            'Tocatli Honor Guard' ,
            'Tithe Taker',
            'Valorous Stance ',
            'Adeline, Resplendent Cathar',
            'Banishing Light' ,
            'Borrowed Time' ,
            'Elite Spellbinder', 
            'Inspiring Overseer', 
            'Priest of Ancient Lore' ,
            'Skyclave Apparition ',
            'Prison Realm ',
            'The Restoration of Eiganjo' ,
            'Vryn Wingmare' ,
            'Archon of Absolution' ,
            'Felidar Retreat' ,
            'Baird, Steward of Argive' ,
            'Elesh Norn, Grand Cenobite', 
            'Rumor Gatherer' ,
            'Cosmos Elixir' ,
            'Lion Sash' ,
            'Welcoming Vampire' ,
            'Cathar Commando' ,
            'Hushbringer' ,
            'Linvala, Keeper of Silence' ,
            'Smothering Tithe',
            "Oketra's Monument", 
            'Mangara, the Diplomat' ,
            "Kinjalli's Sunwing" ,
            'Solemn Simulacrum' ,
            "Heliod's Intervention" ,
            'March of Otherworldly Light' ,
            'Settle the Wreckage' ,
            'Farewell' ,
            'Wrath of God' ,
            'Mind Stone' ,
            'Hedron Archive' ,
            'Arcane Signet' ,
            'Coldsteel Heart', 
            'Guardian Idol' ,
            'Archon of Emeria' ,
            'Reidane, God of the Worthy' ,
            'Arch of Orazca' ,
            'Field of Ruin' ,
            'Elspeth Conquers Death' ,
            'Loyal Warhound' ,
            'Celestial Vault' ,
            ],
        }
}
