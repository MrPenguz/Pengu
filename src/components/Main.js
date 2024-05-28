import Button from './UI/Button';
import React from 'react';
import foodie from './restauranfood.jpg'
import './main.css';
const Main = () => {
  return (
    <main className='background'>
        <article className='Artext'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button>Reverse a Table</Button>
          <img src={foodie} alt='pengu' className='img'></img>
        </article>
    </main>
  )
}

export default Main