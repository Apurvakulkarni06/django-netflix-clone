import { useRouter } from "next/router";

const MovieDetails = ({movie, images}) =>{
    console.log("movie:", movie);
    console.log("images:", images);
    return(
        // <h1>Movie ID {movie.id}</h1>
        <>
            <h1>{movie.title}</h1>
            <h2>Overview:{movie.overview}</h2>
            <p>Release Date:{movie.release_date}</p>
            <p>status:{movie.status}</p>
            <p>video available:{movie.video}</p>
            <p>Votes:{movie.vote_average}</p>
            <img src={movie.poster_path} alt='movie details' />

        </>
    )
}

export const getServerSideProps = async pageContext =>{

    const movieId = pageContext.query.slug; 
    const API_KEY = '01c7fe23f950838a085bef3b5aa85526';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    const apiResponse = await fetch(url);
    const movie = await apiResponse.json();

    const imageUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&language=en-US`
    const imageResponse = await fetch(imageUrl);
    const images = await imageResponse.json();


    return {
        props:{
            movie,
            images
        }
    }
}

export default MovieDetails;