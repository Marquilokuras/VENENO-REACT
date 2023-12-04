import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import TotalCategory from './TotalCategory';
import ProductsList from './ProductsList';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastMovieInDb />
            <GenresInDb />
            <TotalCategory />
            <ProductsList />
        </div>
    )
}

export default ContentRowCenter;