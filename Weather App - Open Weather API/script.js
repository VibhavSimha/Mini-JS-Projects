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
                }
                catch(error){
                    showError();
                }
                searchInput.value='';
            }
        }
    )
    function fetchWeatherData(city){

    }
    function displayWeatherData(weatherData){

    }
    function showError(){
        searchOutput.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})