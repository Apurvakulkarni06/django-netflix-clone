import Link from 'next/link';
import { Toolbar } from '../../component/Toolbar';
import styles from '../../styles/MovieCard.module.css';
function Movies ({pageNumber, movies}) {
    console.log("pagenumber:", pageNumber);
    console.log("fetched movies:", movies)
    return (
    <>
        <Toolbar />
        <h1>latest Movies</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
        { movies.results.map(movie =>(
           
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <Link className="text-lg" href={`/movies/${movie.id}`}>
                            <a className="no-underline hover:underline text-black">
                            {movie.title}
                            </a>
                        </Link>
                        <p className="text-grey-darker text-sm">
                        {movie.release_date}
                        </p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        
                            <p className="ml-2 text-sm">{movie.overview}</p>
                        
                        <p className="no-underline text-grey-darker hover:text-red-dark" >
                            <span className="hidden">{movie.vote_average} Votes</span>
                            <i className="fa fa-heart"></i>
                        </p>
                    </footer>

                </article>
                

            </div>
          
            </div>
        
        ))}
        </div>
    </>
    )
}
export const getServerSideProps = async pageContext =>{
    const pageNumber = 1;

    const API_KEY = '01c7fe23f950838a085bef3b5aa85526';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    const apiResponse = await fetch(url);
    const movies = await apiResponse.json()
    return {
        props:{
            pageNumber,
            movies
        }
    }

}
export default Movies;

