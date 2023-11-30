"use client";
import React, { useState } from "react";
import "./Home.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "@/redux/slicers/postBookSlicer";
import { AppDispatch, RootState } from "@/redux/store/store";

const Home = () => {
  const loading = useSelector((state:RootState)=>state.postBooks.loading)
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [publish, setPublish] = useState("");
  const [pages, setPage] = useState("");

  const [isModalClosed, setIsModalClosed] = useState(false);
  function closeModal() {
    setIsModalClosed(false);
  }

  function submitBook() {
    dispatch(postBook({title, author, cover, publish, pages}));
    setIsModalClosed(false);
    console.log({title, author, cover, publish, pages});
  }
  return (
    <div className="home">
      <div
        className={isModalClosed ? "book__create__modal__container" : "none"}
      >
        <div className="book__create__modal">
          <div className="book__create__modal__heading">
            <h1>Create a book</h1>
            <button onClick={() => closeModal()}>
              <IoCloseCircleOutline />
            </button>
          </div>
          <div className="book__create__modal__form">
            <div className="modal__input">
              <label>title</label>
              <input type="text" placeholder="Enter your title" onChange={e=>setTitle(e.target.value)} />
            </div>
            <div className="modal__input">
              <label>author</label>
              <input type="text" placeholder="Enter your author" onChange={e=>setAuthor(e.target.value)} />
            </div>
            <div className="modal__input">
              <label>cover</label>
              <input type="text" placeholder="🔗 Enter your cover" onChange={e=>setCover(e.target.value)} />
            </div>
            <div className="modal__input">
              <label>cover</label>
              <input type="text" placeholder="📅 Enter your published" onChange={e=>setPublish(e.target.value)} />
            </div>
            <div className="modal__input">
              <label>pages</label>
              <input type="text" placeholder="Enter your pages" onChange={e=>setPage(e.target.value)} />
            </div>
          </div>
          <div className="book__create__modal__btns">
            <button onClick={() => closeModal()}>Close</button>
            <button onClick={() => submitBook()}>Submit</button>
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
              <button onClick={() => setIsModalClosed(true)}>
                + Create a book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
