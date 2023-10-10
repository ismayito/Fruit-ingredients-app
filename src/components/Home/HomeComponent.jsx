import React, { useEffect } from 'react';
import '../../pages/Pages.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFruits } from '../../Redux/FruitSlice';

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { fruits } = useSelector((store) => store.fruit);
  console.log(fruits);

  useEffect(() => {
    if (!fruits.length) {
      dispatch(fetchFruits());
    }
  }, [
    dispatch,
  ]);
  console.log(fruits.length);
  return (
    <>
      <div className="headSection">
        <section className="imageContainer">
          <img src="../assets/images/fruity.jpg" alt="fruityImage" className="fruityImage" />
        </section>
        <section className="introInfo">
          <p> this is a fruit ingredients app</p>
        </section>
      </div>
      <section className="inputContainer">
        <input type="search" placeholder="search..." className="input" />
      </section>
      <div className="cardContainer">
        <button className="button" type="button">Content goes here</button>
        <button className="button" type="button">Content goes here</button>
      </div>
    </>
  );
};

export default HomeComponent;
