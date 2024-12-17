import React from "react";



const Cards = (props) => {
    const { image, title, description } = props.cards;


    return (

        < div class="card-group" >
            <div class="card">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <button className="btn btn-primary btn-lg" type="button">
                        Find out more!
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Cards; 