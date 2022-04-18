import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
export default function MovieDetails(){
const [movie,setMovieDetails]=useState({});
const parms=useParams();
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${parms.id}?api_key=1ed824424ba92372fda5f9a9469d4875`)
        .then((res)=>setMovieDetails(res.data)).catch((error)=>console.log(error));
    },[])
    
    return (
        <div className="text-white boxDetails" style={{ background:`linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .6)), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}) center center no-repeat`}}>
            <div className="container py-5"> 
                <div className="row">
                    <div className="col-md-4 position-relative">
                        <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        
                    </div> 
                    <div className="col-md-8 mt-5">
                        <h2 className="title">{movie.original_title}</h2>
                        <div className="d-flex align-items-center">
                            <p className="rate" style={{position:'static'}}>{movie.vote_average}</p>
                            <div className="title mt-2">User <br/>Score</div>
                        </div>

                        {/* {movie.genres.map((genreName)=>{
                            return(
                                <p key={genreName.id}>{genreName.name}</p>
                        )
                        })} */}
                        
                        <div className="title mt-2" style={{marginLeft:'20px'}}>Overview</div>
                        <p className="mt-2" style={{marginLeft:'20px'}}>{movie.overview}</p>
                    </div> 
                </div>
                
                
            </div>
        </div>
        );
    }   