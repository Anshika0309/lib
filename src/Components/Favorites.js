import React, {useState, useEffect} from 'react';
import Card from './Card';

const Favorites = ({ favorites: favoriteBooks }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesData = [];
        setFavorites(favoritesData);
    }, [favoriteBooks]);
    return (
        <div>
            <h2>Favorite Books</h2>-
            <ul>
                {favorites.map(book => (
                    <Card key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
