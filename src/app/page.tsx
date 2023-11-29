"use client";
import React, { useState } from "react";
import "./Home.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

const Home = () => {
  const [isModalClosed, setIsModalClosed] = useState(false);
  function closeModal(){
    setIsModalClosed(false)
  }
  return (
    <div className="home">
      <div className={isModalClosed?"book__create__modal__container": "none"}>
      <div className="book__create__modal">
        <div className="book__create__modal__heading">
          <h1>Create a book</h1>
          <button onClick={()=>closeModal()}>
            <IoCloseCircleOutline />
          </button>
        </div>
        <div className="book__create__modal__form">
          <div className="modal__input">
            <label>title</label>
            <input type="text" placeholder="Enter your title" />
          </div>
          <div className="modal__input">
            <label>author</label>
            <input type="text" placeholder="Enter your author" />
          </div>
          <div className="modal__input">
            <label>cover</label>
            <input type="text" placeholder="Enter your published" />
          </div>
          <div className="modal__input">
            <label>pages</label>
            <input type="text" placeholder="Enter your pages" />
          </div>
        </div>
        <div className="book__create__modal__btns">
          <button onClick={()=>closeModal()}>Close</button>
          <button onClick={()=>closeModal()}>Submit</button>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="home__wrapper">
          <div className="home__nav">
            <div className="home__nav__title">
              <h2>
                You’ve got <span>7 books</span>
              </h2>
            </div>
            <div className="home__nav__services">
              <input type="text" placeholder="Enter name of book" />
              <button onClick={()=>setIsModalClosed(true)}>+ Create a book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
