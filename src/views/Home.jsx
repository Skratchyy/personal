import React from 'react'

function Home() {
  return (
    <main>
      <section className='h-main'>
        <div className="h-main-section-text">
          <h2>Skratchy is a <span>Software Developer</span></h2>
          <p>Take a look and leave feedback by following my linked in page. <span>{"<3"}</span></p>
          <button>Contact me!</button>
        </div>
        <div className="h-main-section-image">
          <div className="h-images">
            <img className="main-img" src="/main-image.png" alt="" />
            <img className="pattern-img" src="/background-pattern.png" alt="" /><div className="current-work">
            <p>Currently Working on <span>TON</span></p>
          </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default Home