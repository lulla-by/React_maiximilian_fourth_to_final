import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,setHttpError]=useState();

  const getData = async () => {
    const resppnse = await fetch(`${process.env.REACT_APP_URL}meals.json`);
    if(!resppnse.ok){
      throw new Error("Something went wrong")
    }
    const data = await resppnse.json();
    const loadedmeals = [];
    for (const key in data) {
      loadedmeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(loadedmeals);
    setIsLoading(false)
  };
  
  useEffect(() => {
      getData().catch((error)=>{
        setIsLoading(false)
        setHttpError(error.message)
      })
  
    
  }, []);

if(isLoading){
  return <section className={classes.mealsIsLoading}>
    <p>Loading...</p>
  </section>
}
if(httpError){
  return <section className={classes.mealsIsError}>
<p>{httpError}</p>
  </section>
}
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
