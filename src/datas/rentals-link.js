import {useState, useEffect} from 'react'


export const Rentals = async() => {
   // const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
    const jsonFile = './rentals.json'

    const [data, setData]= useState([]);
    
    const getData=()=>{
      fetch(jsonFile
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }

    useEffect(()=>{
      getData()
    }, [])

    return data
}

            