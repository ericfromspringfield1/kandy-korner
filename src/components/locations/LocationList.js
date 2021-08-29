import React, {useEffect, useState } from 'react';
import './Locations.css'



export const LocationList = () => {
    const [locations, setLocations] = useState([]) //useState returns an array and a function [customers is the array, assignCustomers or setCustomers is the function]
    const [totalLocationsMessage, updateMessage] = useState("")

    useEffect(   // useEffect is like an Event Listener. It runs the code when the state changes
        () => {
            console.log("Intitial useEffect")
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        []
    )

    useEffect(
        () => {
            console.log("Locations state changed", locations)
            if (locations.length === 1) {
                updateMessage("You have 1 location")
            } else {
                updateMessage(`You have ${locations.length} locations`)
            }
        },
        [locations]
    )
    
    return (
        <>
            <div>{ totalLocationsMessage }</div>
            <h1 className="locationsHeading">Locations</h1>
        {
            locations.slice(0, 5).map(
                 (locationObject) => {
                    return <p key={`location--${locationObject.id}`} >{locationObject.address} {locationObject.city}, {locationObject.state} -
                    square footage: {locationObject.squareFootage}</p>
                 }
            )
        }
        </>
    )
}