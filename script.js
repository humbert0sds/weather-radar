// 8c709e30b79cbf7872f0ba9e29af2650

 async function SearchPlace() {
    try {
        const carregando = document.querySelector('.loading')

        carregando.style.display = 'block'

    const cidade = document.querySelector('.place').value

    if(cidade == '') {
        alert('adicione um lugar')
        carregando.style.display = 'none'
        return
    }
    const city = cidade;

    apiKey = '8c709e30b79cbf7872f0ba9e29af2650'
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`)

    const data = await response.json()

    document.querySelector('.content .contentPlace h1').innerHTML = `${data.name.toUpperCase()} - ${data.sys.country}`

    document.querySelector('.content .contentTemp h1').innerHTML = `${data.main.temp.toFixed(0)}°C`

    document.querySelector('.content .contentHumidit h1').innerHTML = `${data.main.humidity}%`

    const iconCode = data.weather[0].icon;

    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`

    iconImg = document.querySelector('.content .weather-icon #weatherIcon')

    iconImg.src = iconUrl;

    document.querySelector('.content').style.display = 'block'

    carregando.style.display = 'none'

    document.querySelector('.place').value = ''

 } catch(error) {
    console.log('erro na requisicao' + error)
    alert('Ou voce escreveu errado, ou ocorreu um erro na requisicao')
    const carregando = document.querySelector('.loading')
    carregando.style.display = 'none'
    document.querySelector('.content').style.display = 'none'
    document.querySelector('.place').value = ''
    
 } 
}

