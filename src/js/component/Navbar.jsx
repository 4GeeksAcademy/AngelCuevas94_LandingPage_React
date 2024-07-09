import React from "react";

const Navbar = ()=> {

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12" style={{marginLeft:"auto", marginRight:"auto", backgroundColor:"grey"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav>
);

}

export default Navbar;