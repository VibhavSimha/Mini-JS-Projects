document.addEventListener('DOMContentLoaded',()=>{
    let searchBtn=document.getElementById('search-btn');
    let searchInput=document.getElementById('search');
    let searchOutput=document.getElementById('output_container');
    let cityOutput=document.getElementById('city-name');
    let temperatureOutput=document.getElementById('temperature');
    let descriptionOutput=document.getElementById('description');
    let errorMessage=document.getElementById('error-message');
    const API_KEY="6238fd7adb5225cd6e765c95d2f35313"; //add to env var later
    searchBtn.addEventListener(
        'click', async ()=>{
            let inputVal=searchInput.value.trim();
            if(inputVal!=''){
                try{
                   let weatherData=await fetchWeatherData(inputVal);
                   displayWeatherData(weatherData);
                }
                catch(error){
                    showError();
                }
                searchInput.value='';
            }
        }
    )
    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        try{
            const response = await fetch(url);
            if(!response.ok)throw new Error(`Error status:${response.status}`);
            const data= await response.json();
            console.log(data);
            return data;
        }catch (error){
            console.error(error.mesage);
            throw Error(error);
        }
    }
    function displayWeatherData(weatherData){
        cityOutput.textContent=weatherData.name;
        
        temperatureOutput.textContent=`Temperature: ${weatherData.main.temp} deg Celcius`;
        descriptionOutput.textContent=`Weather: ${weatherData.weather[0].description}`;
        searchOutput.classList.remove('hidden');
        searchOutput.classList.add('output_container');
        errorMessage.classList.remove('error-message');
        errorMessage.classList.add('hidden');
    }
    function showError(){
        searchOutput.classList.remove('output_container');
        searchOutput.classList.add('hidden');
        errorMessage.classList.remove('hidden');
        errorMessage.classList.add('error-message');
    }
})