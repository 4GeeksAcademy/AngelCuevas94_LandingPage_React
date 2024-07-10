import React from "react";

const Card = ({title, url,texto}) => {

    return (
        <div className="card text-center">
            <img src={url} className="card-img-top" style={{objectFit:"fill", width:"200px", height:"130px", justifyContent:"center"}} alt="paisaje"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );

}

export default Card;