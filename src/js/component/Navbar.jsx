import React from 'react'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Start Bootstrap</a>
      <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          <a class="nav-link text-secondary" href="#">About</a>
          <a class="nav-link text-secondary" href="#">Services</a>
          <a class="nav-link text-secondary">Contact</a>
        </div>
      </div>
    </div>
  </nav> 
  </div>
  )
}

export default Navbar