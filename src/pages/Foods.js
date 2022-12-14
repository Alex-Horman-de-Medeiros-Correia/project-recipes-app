import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import FoodCards from '../components/FoodCards';
import FoodCategories from '../components/FoodCategories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

const limite = 12;

function Foods(props) {
  const { getFood, food } = useContext(RecipesContext);
  const { meals } = food;

  useEffect(() => {
    if (food && food.length === 0) {
      getFood('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header { ...props } />
      <h1 data-testid="page-title">Foods</h1>
      <FoodCategories />
      <div className="cardsContainer">
        {meals && meals.slice(0, limite).map((meal, index) => (
          <FoodCards meal={ meal } key={ meal.idMeal } index={ index } />
        ))}

      </div>
      <Footer />
    </>

  );
}

Foods.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Foods;
