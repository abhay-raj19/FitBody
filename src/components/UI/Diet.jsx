import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from './Footer'
import '../../styles/Diet.css'
import "../../styles/header.css";

const Diet = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  const diet = [
    {
      "gym_diet": {
        "breakfast": {
          "time": "7:00 AM",
          "items": [
            {
              "name": "Oatmeal",
              "quantity": "1 cup",
              "calories": 150,
              "protein": "5g",
              "carbs": "27g",
              "fats": "3g"
            },
            {
              "name": "Greek Yogurt",
              "quantity": "1 cup",
              "calories": 100,
              "protein": "10g",
              "carbs": "6g",
              "fats": "0g"
            },
            {
              "name": "Banana",
              "quantity": "1 medium",
              "calories": 105,
              "protein": "1g",
              "carbs": "27g",
              "fats": "0g"
            }
          ],
          "total_calories": 355
        },
        "lunch": {
          "time": "12:00 PM",
          "items": [
            {
              "name": "Grilled Chicken Breast",
              "quantity": "6 oz",
              "calories": 165,
              "protein": "31g",
              "carbs": "0g",
              "fats": "3.6g"
            },
            {
              "name": "Brown Rice",
              "quantity": "1 cup",
              "calories": 215,
              "protein": "5g",
              "carbs": "45g",
              "fats": "1.6g"
            },
            {
              "name": "Steamed Broccoli",
              "quantity": "1 cup",
              "calories": 55,
              "protein": "4g",
              "carbs": "11g",
              "fats": "0g"
            }
          ],
          "total_calories": 435
        },
        "snacks": {
          "time": "3:00 PM",
          "items": [
            {
              "name": "Protein Shake",
              "quantity": "1 serving",
              "calories": 150,
              "protein": "25g",
              "carbs": "5g",
              "fats": "2g"
            },
            {
              "name": "Almonds",
              "quantity": "1 oz",
              "calories": 160,
              "protein": "6g",
              "carbs": "6g",
              "fats": "14g"
            }
          ],
          "total_calories": 310
        },
        "dinner": {
          "time": "7:00 PM",
          "items": [
            {
              "name": "Baked Salmon",
              "quantity": "6 oz",
              "calories": 280,
              "protein": "25g",
              "carbs": "0g",
              "fats": "18g"
            },
            {
              "name": "Quinoa",
              "quantity": "1 cup",
              "calories": 220,
              "protein": "8g",
              "carbs": "39g",
              "fats": "3.5g"
            },
            {
              "name": "Mixed Salad",
              "quantity": "2 cups",
              "calories": 80,
              "protein": "2g",
              "carbs": "10g",
              "fats": "4g"
            }
          ],
          "total_calories": 580
        }
      }
    }
  ]

  const dietData = diet[0].gym_diet;

  return (
    <>
      <div className={isDarkMode ? "dark-mode-app" : "light-mode-app"}>
        <Header className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        <div className="exercise-container">
          <h1>Free Diet Plan</h1>
          <div className="diet-container">
            {Object.keys(dietData).map(meal => (
              <div key={meal} className="meal-card">
                <h2 className="meal-title">{meal.charAt(0).toUpperCase() + meal.slice(1)}</h2>
                <p className="meal-time">Time: {dietData[meal].time}</p>
                <ul className="meal-items">
                  {dietData[meal].items.map((item, index) => (
                    <li key={index} className="meal-item">
                      <p><strong>{item.name}</strong></p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Calories: {item.calories}</p>
                      <p>Protein: {item.protein}</p>
                      <p>Carbs: {item.carbs}</p>
                      <p>Fats: {item.fats}</p>
                    </li>
                  ))}
                </ul>
                <p className="meal-total-calories">Total Calories: {dietData[meal].total_calories}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Diet
