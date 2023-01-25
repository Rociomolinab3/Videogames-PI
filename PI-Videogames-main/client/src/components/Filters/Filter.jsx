import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getGenres } from '../../actions';
import style from '../Filters/Filter.module.css'

export default function FilterBar ({handleSortByName,handleFilterStatus,handleSortByRating, handleFilterCreated})
 {
    const dispatch = useDispatch();
    const allGenresh = useSelector((state) => state.genres);

    useEffect(()=>{
        dispatch(getGenres());
    },[dispatch]);

    return(
        <div className={style.filters}>
            <select 
                className ={style.options}
                onChange={(e)=>handleSortByName(e)}
             >
                <option value='asc'> A-Z </option>
                <option value='desc'> Z-A </option>
            </select>
            <select 
                className ={style.options}
                onChange={(e)=>handleSortByRating(e)}
             >
                <option value='asc'> Rating Ascendente </option>
                <option value='desc'> Rating Descendente </option>
            </select>
            <select
            className={style.options}
            onChange={(e)=>handleFilterStatus(e)}>
                <option value="" select disable hidden>Generos</option>
                <option value="all">All</option>
                {allGenresh.map(g=><option value={g.name} key={g.id}>{g.name}</option>)}
            </select>
            <select
                className={style.options}
                onChange={(e)=>handleFilterCreated(e)}
            >
                <option value="All">Todos</option>
                <option value="createdInDb">Creados</option>
                <option value="api">Existentes</option>
            </select>




        </div>
    )

}