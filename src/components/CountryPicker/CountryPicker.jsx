import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl,} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {Countries} from '../../api/index'

const CountryPicker = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchCountries = async ()=>{
            const fetchData  = await Countries();
            setData(fetchData.data.countries)
        }
        fetchCountries()
    },[])
    

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e)=>props.handleCountryChange(e.currentTarget.value)}>
                <option value="">Global</option>
                
                {
                    data.map((country,i) => {
                        return(
                            <option key={i} value={country.name}>{country.name}</option>
                        )
                    })
                }
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;
