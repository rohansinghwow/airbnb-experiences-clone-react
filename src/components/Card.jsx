import React from 'react'

export default function Card(props){
    

    return(
        

        <div className="card-single">
            <div className="img-div">

            <img src={props.img} className="card-img"/>

            </div>
           
            <div className="card-rating">
                <span className="rating">{props.rating}({props.reviewCount}).</span>
                <span className="rating-country">{props.location}</span>
            </div>

            <div className="card-details">
                <p className="card-para">{props.title}
                </p>
                <span className="card-price">From {props.price} / person
                </span>

            </div>
        </div>
       
    )
}



