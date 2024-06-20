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




// Olá, esse aqui era um teste para adicionar os cards manualmente, mas preferi fazendo com uma api externa

// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const FoodAlbum = () => {
//   const foods = [
//     { nome: 'Pizza', tipo: 'Italiana', descricao: 'Pizza deliciosa com massa fina e crocante.' },
//     { nome: 'Sushi', tipo: 'Japonês', descricao: 'Sushi fresco com variedade de peixes e vegetais.' },
//     { nome: 'Hambúrguer', tipo: 'Americano', descricao: 'Hambúrguer suculento com queijo cheddar e bacon.' },
//     { nome: 'Tacos', tipo: 'Mexicano', descricao: 'Tacos tradicionais com carne de porco marinada e guacamole.' },
//     { nome: 'Pad Thai', tipo: 'Tailandês', descricao: 'Pad Thai autêntico com camarões frescos e amendoim.' },
//     { nome: 'Paella', tipo: 'Espanhol', descricao: 'Paella valenciana com frutos do mar e açafrão.' },
//     { nome: 'Sopa de Tomate', tipo: 'Vegetariano', descricao: 'Sopa de tomate caseira com manjericão fresco.' },
//     { nome: 'Curry de Frango', tipo: 'Indiano', descricao: 'Curry cremoso de frango com especiarias aromáticas.' },
//   ];

//   return (
//     <Container>
//       <h1>Descubra Pratos Deliciosos</h1>
//       <Row>
//         {foods.map((food, index) => (
//           <Col key={index} md={4}>
//             <Card style={{ margin: '20px 0', borderRadius: '8px' }}>
//               <Card.Body>
//                 <Card.Title>{food.nome}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">Tipo: {food.tipo}</Card.Subtitle>
//                 <Card.Text>{food.descricao}</Card.Text>
//                 <Button variant="primary">Ver Receita</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default FoodAlbum;
