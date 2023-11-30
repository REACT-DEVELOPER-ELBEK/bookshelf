"use client";
import "./BooksData.scss";
import { useEffect } from "react";
import { fetchBooks } from "@/redux/slicers/getSlicer";
import { AppDispatch, RootState } from "@/redux/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { deleteBook } from "@/redux/slicers/deleteBookSlicer";
import { editBook } from "@/redux/slicers/editBookSlicer";

const BooksData = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const data = useSelector((state: RootState) => state.books.data);
  const removeBook = useSelector((state: RootState) => state.deleteBook.data);

  function remove(id:any){
    dispatch(deleteBook(id))
    setTimeout(() => {
      window.location.reload()
    }, 1200);
  }

  function updateBook(id:any){
    dispatch(editBook(id))
    console.log(id);
  }
  return (
    <div className="booklist">
      <div className="container">
        <div className="booklist__wrapper">
          {data?.map((item: any) => (
            <div className="book__item" key={item.id}>
              <h1>{item.data.title}</h1>
              <p>{item.data.cover}</p>
              <div className="book__item__info">
                <h3>
                  {item.data.author}: {item.data.publish}-year
                </h3>
                <h5>{item.data.pages} pages</h5>
              </div>
              <div className="book__actions">
                <button onClick={()=>remove(item.id)}>
                  <MdOutlineDelete />
                </button>
                <button onClick={()=>updateBook(item.id)}>
                  <BiEditAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksData;
