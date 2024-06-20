import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => {
        console.error("Erro ao buscar as refeições: ", error);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Receitas Deliciosas</h1>
      <Row>
        {meals.map(meal => (
          <Col key={meal.idMeal} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: '20px auto', maxWidth: '300px', border: '1px solid #4D4D4D', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <Card.Img variant="top" src={meal.strMealThumb} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <Card.Title style={{ marginBottom: '10px', textAlign: 'center' }}>{meal.strMeal}</Card.Title>
                <Card.Text style={{ marginBottom: '10px', textAlign: 'center' }}>{meal.strCategory}</Card.Text>
                <Button variant="primary" href={meal.strSource} target="_blank" style={{ width: '100%' }}>
                  Receita
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Meals;
