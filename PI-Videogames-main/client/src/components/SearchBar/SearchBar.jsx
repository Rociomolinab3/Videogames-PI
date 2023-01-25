import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesName } from '../../actions';

export default function SearchBar ({setCurrentPage}){
    
    
    const dispatch = useDispatch();

    const [ name, setName ] = useState('');

    function handlerInputChange (e){
        e.preventDefault();
        setName(e.target.value);
        
    }

     async function handlerSubmit(e){
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getVideogamesName(name)) 
    
    }

    return(
        <div>
            <input
            type='text'
            placeholder='Buscar'
            onChange= {(e)=>handlerInputChange(e)}
            />
        <button type='sumbit' onClick={(e)=>handlerSubmit(e)}>Buscar</button>
        </div>
    )


}