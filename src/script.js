document.addEventListener("DOMContentLoaded",()=>{
    const search_btn = document.getElementById("city-btn");
    const city_input = document.getElementById("city-input");
    const error_message = document.getElementById("error-message");
    const weather_info = document.getElementById("weather-info");
    const city_name = document.getElementById("city-name");
    const temp = document.getElementById("temp");
    const desc = document.getElementById("desc");
    const API_KEY = "9abfde9693c41534854d8e169deb7aa7";

    search_btn.addEventListener("click",async ()=>{

        let city_n = city_input.value.trim()
        if(!city_n)return 
        try {
         const weather_data =  await fetch_weather_data(city_n)
         display_weather_data(weather_data)
        } catch (error) {
            error_data()
        }
    })


    async function fetch_weather_data(city){

    }

    function display_weather_data(weather_data) {
        
    }

    function error_data() {
        weather_info.classList.add("hidden")
        error_message.classList.remove("hidden")
    }
})