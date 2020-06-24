import React, { useState, useEffect } from 'react';
import { fetchPakistanData } from '../../apis'
import { HorizontalBar } from 'react-chartjs-2';
import styles from './charts.module.css'

const Pakistan=()=>{

const [ pkData,setPkData ]= useState([]);

useEffect(() => {
const getpkData = async () => {
        const data= await fetchPakistanData();
        //  console.log("API CALL",data);
        setPkData(data);
    }
    // console.log("Pakistan data is ",pkData);
    getpkData();
},[]);
 const { confirmed, recovered, deaths } = pkData
//  console.log("Confirmed Data is ", confirmed);
 let HorizontalChart=(
    pkData.confirmed ?
        <HorizontalBar    
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgb(0,0,255,0.5)',
                    'rgb(0,255,0,0.5)',
                    'rgb(255,0,0,0.5)',
               ],
                 data:[confirmed.value, recovered.value, deaths.value]
            }]
       }}
       options={{
           legend:{display:true},
           title:{display:true, text:`Current State in Pakistan`}
       }}
        />:null
    )
    return(
        <div className={styles.container}>

            {HorizontalChart}
        </div>

    )
}

export default Pakistan