import {fetchData} from './api'
import {Cards, CountryPicker, Chart} from './components'
import {useEffect, useState} from 'react'
import coronaImage from "./images/new-normality.png"
import styles from  './App.module.css';


function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {

    async function newFunction() {
      const dataFetch = await fetchData();
      setData(dataFetch);
    }
    newFunction();
    
  
  }, [])
 

  const handleCountryChange = async (country)=>{
    const data = await fetchData(country)
     setData(data)
    setCountry(country)
  }


  return (
    <div className={styles.container}>
      <img alt="CovidImage" className={styles.image} src={coronaImage} /> 
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
    </div>
  );


}

export default App;
