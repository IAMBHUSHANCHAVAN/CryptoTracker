import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../../CryptoContext'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
)

const Histogram = () => {
  const [historicdata ,setHistoricdata] = useState()
  const [days ,setDays] = useState(1)
const {id} = useParams()
const {currency} = CryptoState();

  const historicalChart = async ()=>{
    const response = await fetch(  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
    try {
      const result = await response.json()
      setHistoricdata(result.prices)
      console.log("dta" ,historicdata);
    } catch (error) {
      console.log(error);
    }
  }
useEffect(()=>{
  historicalChart()
},[currency,days])

const option = {
  Plugin:{
    legend : true
  }
}
  return (
    <div className='mt-5'>
      {
        !historicdata ? (
           <h1 className='text-center'>Fetching data</h1>
        ):(
          <>
        <Line 
        data={
          {
            labels: historicdata.map((coin=>{
              let date = new Date(coin[0])
              let time = date.getHours()
              return days===1?time:date.toDateString()
              // if(days===1){
              //   return time
              // }
              // else{
              //   return date.toDateString()
              // }
            })),

            datasets:[
            {  
              label:"Track Value",
              data : historicdata.map((coin)=>coin[1]),
              backgroundColor:"gold"
            }
            ],
          }
        }
         />
          </>
        )
      }
      <div className="mt-5 d-flex justify-content-center">
      <button className='btn mx-3 btn-outline-light' onClick={(e)=>setDays(e.target.value)} value="1">1 day</button>
      <button className='btn mx-3 btn-outline-light' onClick={(e)=>setDays(e.target.value)} value="10">10 days</button>
      <button className='btn mx-3 btn-outline-light' onClick={(e)=>setDays(e.target.value)} value="20">20 days</button>
      <button className='btn mx-3 btn-outline-light' onClick={(e)=>setDays(e.target.value)} value="30">30 days</button>
      </div>
      
    </div>
  )
}

export default Histogram
