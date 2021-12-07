import React from 'react'

export default function Card(props){
    

    return(
        

        <div className="card-single">
            <img src={img} className="card-img"/>
            <div className="card-rating">
                <span className="rating">{rating}({reviewCount}).</span>
                <span className="rating-country">{location}</span>
            </div>

            <div className="card-details">
                <p className="card-para">{title}
                </p>
                <span className="card-price">From {price} / person
                </span>

            </div>
        </div>
       
    )
}



