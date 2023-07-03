import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

// 여기서 ingredients를 관리함 => 여기에서 ingredients목록을 출력해야하기 때문
const Ingredients = () => {
  // ingredients에 재료의 목록이 저장될 예저이기 때문에 배열을 사용
 const [userIngredients,setUserIngredients] = useState([])

 const addIngredientHandler = (ingredient) =>{
  setUserIngredients((prevIngredients)=>[...prevIngredients,ingredient])
}
console.log(userIngredients);
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} onRemoveItem={()=>{}}/>
      </section>
    </div>
  );
}

export default Ingredients;
