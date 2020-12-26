const API_KEY = `3891916b2f364e56d63c5d9ee9a57228`
const myvueComponent = new Vue({
    el : '#mydiv',
    data : {
        heading : "Weather App using Vue",
        query : null,
    },
    methods : {
        fetchWeather(){
            console.log(this.query)
            const api = `https://api.openweathermap.org/data/2.5/weather?appid=` + API_KEY + `&q=` + `${this.query}`+ `&units=metric`
            console.log(api)
            axios.get(api)
            .then((response)=>{
                console.log("fetching response....")
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })

        }
    }
})

