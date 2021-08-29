import React, {useEffect, useState } from 'react';
import './Products.css'



export const ProductList = () => {
    const [products, setProducts] = useState([]) //useState returns an array and a function [customers is the array, assignCustomers or setCustomers is the function]
    const [totalProductsMessage, updateMessage] = useState("")

    useEffect(   // useEffect is like an Event Listener. It runs the code when the state changes
        () => {
            console.log("Intitial useEffect")
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )

    useEffect(
        () => {
            console.log("Products state changed", products)
            if (products.length === 1) {
                updateMessage("You have 1 product")
            } else {
                updateMessage(`You have ${products.length} products`)
            }
        },
        [products]
    )
    
    return (
        <>
            <div>{ totalProductsMessage }</div>
            <h1 className="productsHeading">Products</h1>
        {
            products.slice(0, 10).map(
                 (productObject) => {
                    return <p key={`product--${productObject.id}`} >{productObject.name} {productObject.productType}</p>
                 }
            )
        }
        </>
    )
}