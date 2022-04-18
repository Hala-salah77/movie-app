import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Movies(){
const [movies,setMovies]=useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1ed824424ba92372fda5f9a9469d4875")
        .then((res)=>setMovies(res.data.results)).catch((error)=>console.log(error));
    },[])
    
    return (
        <div className="container mt-5">
            <div className="row"> 
            {movies.map((movie)=>{
                return(
                
                    <div className="col-md-3" key={movie.id}>
                        <a href={`/product-details/${movie.id}`}>
                            <div className="post position-absoulute mb-5">
                                <h5 className="rate">{movie.vote_average}</h5>
                                <div className="img-box">
                                    <img className="w-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                </div>
                                    <h4 className="title my-3">{movie.title}</h4>
                            </div>
                        </a>
                    </div> 
                 )
            })}
                
            </div>
        </div>
        );
    }   