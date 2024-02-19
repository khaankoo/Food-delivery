import React from 'react'
import axios from 'axios'

const Food = () => {
    const foodData = async () => {
        const res = await axios.get("http://localhost:8000/foods/getfood")
        console.log(res);
    }
  return (
    <div>
        <button onClick={foodData}>gas</button>
    </div>
  )
}

export default Food