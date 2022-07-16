const API = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc100cf27amshaecdaec649f8d88p156495jsnb71c1bfb9df2',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data

}

(async() => {
    try {
        const news = await fetchData(API)
        //template literal para que se pueda usar el json 
        let view = 
        `
        <ul>
        ${news.map(coin => `<li>${coin.name}</li>`).join('')}
        </ul>
        
        `

      content.innerHTML = view
    } catch (error) {
        console.log(error) 
        alert('error') 
    }
})()