import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// const axios = require('axios');

function Home() {
    const [moviedata, setMoviedata] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        const fetchapi = async () => {
            const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f9976c30e5mshf71690badc03125p1f227bjsn3f058a3ae972',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setMoviedata(result);
                setFilteredData(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchapi()
    }, [])
    const navigate = useNavigate();
    const handleChange = (data) => {
        navigate("/about", { state: data })
    }
    const handleSearch = (e) => {
        const query = e.target.value;
        console.log(query);
        setSearchQuery(query);

        if (query === "") {
            setFilteredData(moviedata); // Display all items if the search query is empty
        } else {
            const filteredMovies = moviedata.filter((movie) =>
                movie.title.toLowerCase().startsWith(query.toLowerCase())
            );

            setFilteredData(filteredMovies);


        }


    }
    return (
        <div className="font-mono">
            <div className="text-3xl text-center">Movie App</div>
            <div className="text-end">
                <input type='text'
                    className="border border-gray-300 rounded px-4 py-2"
                    placeholder="search movies"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e)}
                >
                </input>
                <button>Search</button>
            </div>
            <div className=" flex flex-wrap justify-start items-center h-screen bg-gray-100 w-screen">
                {filteredData.length === 0 ? (
                    <p className="text-center text-xl">Movie not found</p>
                ) : (
                    filteredData.map((movieData) => {
                        return (
                            <div onClick={() => handleChange(movieData)} className="text-center bg-gray-300 w-[30%] p-4 rounded-lg shadow-lg custom-shadow hover:shadow-xl duration-300 my-4 mx-2 transition-shadow ease-in-out">
                                <h1 className="text-4xl font-bold mb-4">{movieData.title}</h1>
                                <img
                                    src={movieData.image}
                                    alt={movieData.title}
                                    className="mx-auto mb-4 object-fit w-full py-4 px-12 transition duration-150 ease-out hover:ease-in "
                                />


                            </div>

                        )
                    })
                )
                }
            </div>
        </div>
    );
}

export default Home;