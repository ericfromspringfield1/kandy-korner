import React from 'react';
import { LocationList } from './locations/LocationList';
import { ProductList } from './products/ProductList.js';



export const KandyKorner = () => {

    return (
        <>
            <h1>Kandy Korner</h1>
            <LocationList />
            <ProductList />
        </>
    )
}