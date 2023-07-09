import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import City from './City';


function Weather() {
    const key = "b2fbcbd3bb9ef30579241bc135a88cb7";
    const [search,setSearch] = useState("");
    const [city,setCity] = useState("");

    useEffect(()=>{
        async function getApi(){
            try{
                const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
                console.log(responce)
                setCity(responce.data);
            }
            catch(error){
                console.log(error)
            }
        }
        getApi();
    },[search])

  return (
    <div className='p-3 w-50 mx-auto'> 
    <form >
        <h1 className='display-6 pb-2'>Hava Durumu</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="input" onChange={(event)=>setSearch(event.target.value)}/>
                <label htmlFor="floatingInput" >Şehir Giriniz</label>

                <City city={city} />
            </div>
    </form>
      
    </div>
  
  )
}

export default Weather