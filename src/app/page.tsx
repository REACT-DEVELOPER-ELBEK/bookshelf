"use client";
import React, { useEffect, useState } from "react";
import "./Home.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { postBook } from "@/redux/slicers/postBookSlicer";
import { AppDispatch, RootState } from "@/redux/store/store";
import BooksData from "./routes/home/booksData/BooksData";
import { fetchBooks } from "@/redux/slicers/getSlicer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const loading = useSelector((state:RootState)=>state.postBooks.loading)
  const data = useSelector((state:RootState)=>state.postBooks.data)
  const length = useSelector((state: RootState) => state.books.data);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [publish, setPublish] = useState("");
  const [pages, setPage] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchBooks());
  }, [])

  const [isModalClosed, setIsModalClosed] = useState(false);
  function closeModal() {
    setIsModalClosed(false);
  }

  function submitBook() {
    try {
      dispatch(postBook({title, author, cover, publish, pages}));
      setIsLoading(true);
      setTimeout(() => {
        window.location.reload()
      }, 1270);
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
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
              <label>published</label>
              <input type="text" placeholder="📅 Enter your published" onChange={e=>setPublish(e.target.value)} />
            </div>
            <div className="modal__input">
              <label>pages</label>
              <input type="text" placeholder="Enter your pages" onChange={e=>setPage(e.target.value)} />
            </div>
          </div>
          <div className="book__create__modal__btns">
            <button onClick={() => closeModal()}>Close</button>
            <button onClick={() => submitBook()}>{isLoading?<div className="loading"><AiOutlineLoading/></div>: "Submit"}</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home__wrapper">
          <div className="home__nav">
            <div className="home__nav__title">
              <h2>
                You’ve got <span>{length?.length} books</span>
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
        <BooksData />
      </div>
    </div>
  );
};

export default Home;
