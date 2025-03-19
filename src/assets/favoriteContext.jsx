import { createContext, useEffect, useState } from 'react';


export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [myFavorites, setMyFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(myFavorites));
    }, [myFavorites])

    const favoritesValues = { myFavorites, setMyFavorites }

    return (
        <FavoritesContext.Provider value={favoritesValues}>
            {children}
        </FavoritesContext.Provider>
    )
}