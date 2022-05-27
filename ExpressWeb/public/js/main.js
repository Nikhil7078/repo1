const cityName = document.getElementById("cityName");
const SubmitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo = async (e) => {
  e.preventDefault();
  // alert('hii');
  let cityval = cityName.value;
  if (cityval === "") {
    city_name.innerText = `Plz write the name before search`;
  } else
   {
    try
    {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=89c1ac22fd86aedf9ec32f684e6be4ac`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      console.log(data);
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`; 
      temp_real_value.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;

      console.log(tempMood);

      if(tempMood === "Clear"){
        temp_status.innerHTML = "<i class='fas fa-sun' style = 'color : #fff97f'></i>";
      } 
      else if(tempMood === "Clouds"){
       temp_status.innerHTML = "<i class = 'fas fa-cloud' style ='color : wight'></i>";
    
      }
      else if(tempMood === "Haze"){
        temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color : #a4b0be'></i> "
      }

    //   else {
    //     temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color : #f1f2f6'></i> "
    //   }
      datahide.classList.remove('data_hide');
    } 
    catch
    {
      city_name.innerText = `Plz enter the city name properly`;
      datahide.classList.add('data_hide');
    }
  }
};

SubmitBtn.addEventListener("click", getInfo);
