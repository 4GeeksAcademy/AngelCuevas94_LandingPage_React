import React from "react";

const Card = () => {

    return (
        <div className="card" style={{width: "18rem", marginLeft:"1rem", marginRight:"1rem"}}>
            <img src="https://images.unsplash.com/photo-1720044337614-467ae9e0e23b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="paisaje"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );

}

export default Card;