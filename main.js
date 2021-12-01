let baseURL = 'https://swapi.dev/api/'

let getRes = document.querySelector('button')

let clicked = event => {
    console.log('Button Clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res) = {
        for (let i = 0; i < res.data.length; i++) {
        axios.get ('https://swapi.dev/api/planets/?search=residents')
        }
        


        )}
    }
    
getRes.addEventListener('click', clicked)