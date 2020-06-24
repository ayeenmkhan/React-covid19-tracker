import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countries.module.css'
import { fetchCountries } from '../../apis'

const Countries = ({handleCountryChange}) => {
    const [fetechedCountries, setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchCountries();
            setCountries(data);
        }

        getCountries();
    }, [setCountries]);

    // console.log("COuntries LIST ", fetechedCountries);
    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetechedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries;