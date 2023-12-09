import { useLocation ,Link } from "react-router-dom"

function FullDesc() {
    const location = useLocation();
    const movieData = location.state;
    return (
        <div>
            <div className=" bg-gray-100 w-full p-4  rounded-lg  place-items-center grid grid-cols-1 gap-4">
                <div className="flex">
                    <iframe
                        src={movieData.trailer}
                        title={`${movieData.title} Trailer`}
                        width="960"
                        height="515"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-4 rounded mx-4 h-[40px] "><Link to='/'>Go Back</Link> </button>
                </div>
                

                <div className="flex bg-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300  w-[60%]  ">
                    <div className="w-1/2 shadow-2xl ">
                        <img src={movieData.image} alt={movieData.title} className=" p-2 mx-auto mb-4 object-fit " />
                    </div>
                    <div className=" mx-4 w-1/2">
                        <h1 className="text-3xl text-inherit font-bold mb-4 ">{movieData.title}</h1>
                        <p className="text-lg mb-2"> {movieData.description}</p>

                        <p className="text-lg mb-2"><span className="font-semibold">Year: </span>{movieData.year}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Director: </span>{movieData.director[0]}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">Genre: </span>{movieData.genre[0]}</p>
                        <p className="text-lg mb-2"><span className="font-semibold">IMDB Rating:</span> {movieData.rating}</p>

                        <p className="text-lg mb-2"><span className="font-semibold">Writers:</span></p>
                        <ul className="text-lg mb-4">
                            {movieData.writers.map((writer, index) => (
                                <li key={index}>{writer}</li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
} export default FullDesc;