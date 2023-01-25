import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, filterVideogamesByGenres, filterCreated, orderByName, orderByRating, getGenres } from '../../actions/index';
import { Link } from 'react-router-dom';
import style from '../Home/Home.module.css';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado'
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import FilterBar from '../Filters/Filter';



export default function Home (){
    

    const dispatch =useDispatch();
    const [carga, setCarga] = useState(true);
    const allVideogames=useSelector((state) => state.videogames);
    const allGenres = useSelector ((state)=>state.genres);
    const [loading, setLoading] = useState(true);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ videogamesPerPage, setVideogamesPerPage ] = useState(15);
    const [ /*orden*/, setOrden ] = useState('');
    const indexOfLastGame = currentPage * videogamesPerPage;
    const indexOfFirstGame = indexOfLastGame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstGame,indexOfLastGame)
    

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getVideogames()).then(()=>setCarga(false));
        dispatch(getGenres());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames());
    }

    function handleFilterStatus(e){
        dispatch(filterVideogamesByGenres(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

function handleSortByRating(e){
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
}    

function handleSortByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value); 
};

if(carga){
    return(
        <Loading/>
    )
}

    return (
        
        <div className={style.homediv}>
            {allVideogames.length ? 
            <div>
                <div className={style.wrapper}><h1 className={style.glow}>  </h1></div>
                 <div className={style.crear}><Link to='/videogame'>Crear Videojuego</Link>
                 </div>
                 <br></br>
                 <br></br>
            
            <button className={style.boton} onClick ={ e => {handleClick(e)}}>
                Volver a cargar todos los videogames
            </button>
            <br></br>
            <div>
                <FilterBar 
                handleSortByName={handleSortByName}
                handleFilterStatus={handleFilterStatus}
                handleSortByRating={handleSortByRating}
                handleFilterCreated={handleFilterCreated}
                ></FilterBar>
                <Paginado 
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginado = {paginado}
                />
                <div>
                <SearchBar 
                className={style.searchBarDiv} 
                setCurrentPage={setCurrentPage}/>
                </div>
                </div>
                <div className ={style.cards}>
                {
                   // allVideogames.length ? 
                      currentVideogames.length >0 ?
                    (currentVideogames.map( (e) => {
                        return (
                        <>
                        <Link to={'/home/'+ e.id}></Link>
                        <Card className={style.card}
                        key={e.id} 
                        id={e.id}
                        name={e.name} 
                        image={e.img ? e.img : e.image }
                        rating={e.rating}
                        genres={e.genres}
                        />
                        </>
                        );
                    })) : (<Loading/>)
                }

                </div>
           </div>
        : <p></p>}
        </div>
    )
}
