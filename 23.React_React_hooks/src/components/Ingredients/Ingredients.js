import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

// 여기서 ingredients를 관리함 => 여기에서 ingredients목록을 출력해야하기 때문
const Ingredients = () => {
  // ingredients에 재료의 목록이 저장될 예저이기 때문에 배열을 사용
 const [userIngredients,setUserIngredients] = useState([])

 const addIngredientHandler = (ingredient) =>{
    fetch(process.env.REACT_APP_URL,{
    method:"POST",
    body:JSON.stringify(ingredient),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(response=>{
      return response.json()
    }).then(responseData => {
      setUserIngredients((prevIngredients)=>[...prevIngredients,{id:responseData.name,...ingredient}])
    });
}

const removeIngredientHandler =  (ingredientId) =>{
  setUserIngredients(prevIngredients=>prevIngredients.filter(item=>item.id !== ingredientId))
}
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
