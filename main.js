document.querySelector('button').addEventListener('click', apiRequest())

async function apiRequest(){
    const commanderName = document.querySelector('input').value
    try {
        const response = await fetch(`https://simple-commander-api.herokuapp.com/api/${commanderName}`)
        const data = await response.json()

        document.querySelector('#commander').innerText = data['commander']
        document.querySelector('#decklist').innerText = data['cards']
    } catch(error){
        console.log(error)
    }
}