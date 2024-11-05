import {useState,useEffect} from 'react';

function getcurrency(currency){
    const [data,setdata]=useState({});
    useEffect(()=>{
        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(
            (res)=>res.json()   //converts the string to json format
        )
        .then(
            (res)=>setdata(res[currency])   //only fetches the currency key of the json file
        )
    },[currency])
    console.log(data);
    return data;
}
export default getcurrency