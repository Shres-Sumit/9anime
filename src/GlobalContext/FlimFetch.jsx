import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext(null)

const MovieProvider = ({ children }) => {
    const [movieList, setMovieList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null);


    const getAllMovies = async () => {
        try {
            setLoading(true)
            setError(false)
            const { data } = await axios.get(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-1980s.json`)
            setMovieList(data.slice(0, 50))
            console.log(data.slice(0, 50))
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        getAllMovies()
    }, [])


    return (
        <MovieContext.Provider value={{ movieList, setMovieList, isLoading, error }}>
            {children}
        </MovieContext.Provider>
    )
}

const useMovie = () => {
    const context = useContext(MovieContext)
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }

    return context
}

export { MovieProvider, useMovie }