import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country)=>{
    let changeableUrl = url

    if(country){
        changeableUrl = `${url}/countries/${country}`
    }

    try{
        const {data} = await axios.get(changeableUrl)
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
          }
        
        return modifiedData;
    }catch(error){
        console.log(error)
    }
}

export const fatchdailyData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData)=>{
            return {
                confirmed: dailyData.confirmed.total,
                recovered: dailyData.recovered.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }
        }) 
        return modifiedData;
    }catch(err){
        console.log(err)
    }
}


export const Countries = async ()=>{

    try{
        const data = axios.get(`${url}/countries`)
        
        return data;
    }catch(err){
        console.log(err)
    }
}