import React, {useState, useEffect} from 'react'
import {View,Text} from 'react-native'

export default function Meal (){
    let [repas,setRepas] = useState('')

    function getRepas(){
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza')
        .then(response => response.json())
        .then(data => {
            setRepas(data.meals[0].strMeal)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    useEffect(()=>{
        getRepas();
    },[])

    return (
        <View>
            <Text>Le repas est : {repas}</Text>
        </View>
    );
}