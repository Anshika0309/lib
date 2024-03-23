import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import Favorites from "./Favorites"; // Import the Favorites component

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            setLoading(true);
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=YOUR_API_KEY'+'&maxResults=40')
                .then(res => {
                    setData(res.data.items);
                    setLoading(false); 
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }

    const addToFavorites = (book) => {
        setFavorites(prevFavorites => [...prevFavorites, book]);
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {/* Pass addToFavorites function to Card component */}
                {/* <Card book={bookData} addToFavorites={addToFavorites} /> */}
                {bookData.map((book,index) => (
                    <Card key={index} book={book} addToFavorites={addToFavorites} />
                ))}
            </div>

            {/* Render the Favorites component */}
            <Favorites favorites={favorites} />
        </>
    );
}

export default Main;
