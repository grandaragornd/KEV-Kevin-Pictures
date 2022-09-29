import React from 'react'

function Featured() {
  return (
    <div className='h-screen w-full p-4 custom-img2 bg-cover bg-fixed'>
      <div class="socials">
      <div class="card text-center card-vsco">
        <div class="card-body">
          <h2 class="card-title">VSCO picture collection</h2>
          <p class="card-text">Click to see all pictures</p>
          <a target="_blank" href="https://vsco.co/saintkevinst/gallery" class="btn bg-dark">@saintkevinst</a>
        </div>
      </div>
      <div class="card text-center card-vsco">
        <div class="card-body">
          <h2 class="card-title">Unsplash picture collection</h2>
          <p class="card-text">Click to see all pictures</p>
          <a target="_blank" href="https://unsplash.com/@grandaragornd" class="btn bg-dark">@grandaragornd</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured