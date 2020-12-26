const API_KEY = `3891916b2f364e56d63c5d9ee9a57228`
const myvueComponent = new Vue({
    el : '#mydiv',
    data : {
        heading : "Weather App using Vue",
        query : null,
        jsonObject : null,
        errorflag : false,
        errormsg : ''
    },
    methods : {
        fetchWeather(){
            const api = `https://api.openweathermap.org/data/2.5/weather?appid=` + API_KEY + `&q=` + `${this.query}`+ `&units=metric`
            axios.get(api)
            .then((response)=>{
                this.jsonObject = response.data
                this.errorflag = false
                this.errormsg = ''
            })
            .catch((error)=>{
                this.errorflag = true
                this.errormsg = "Please try out with a valid city name"
            })

        }
    }
})

