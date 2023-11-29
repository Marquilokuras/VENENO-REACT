import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */


let totalProduct = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

let totalCategory = {
    title:' Total de Categorias', 
    color:'success', 
    cuantity: '79',
    icon:'fa-solid fa-list'
}

let totalUser = {
    title:'Total de Usuarios' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [totalProduct, totalCategory, totalUser];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;