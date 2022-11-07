import React, { useState } from 'react'
import { filmData } from './film-data'

let i = 0
const Slideshow = () => {
    const [slide, setSlide] = useState(filmData[i])
    return (
        <section className='slide-container'>
            <div className='title'>
                <h1>{slide.title}</h1>
            </div>
            <div className='slide'>
                <img src={slide.image} />
                <section className='details'>
                    <h1>{slide.original_title}</h1>
                    <h3>{slide.release_date}</h3>
                    <p>{slide.description}</p>
                </section>
            </div>
            <div className='buttons'>
                <button onClick={() => setSlide(filmData[0], i = 0)}>↺ Start Over</button>
                <button disabled={i===0 ? true : false} onClick={() => setSlide(filmData[i-=1])}>← Back</button>
                <button disabled={i===8 ? true : false}onClick={() => setSlide(filmData[i+=1])}>Next →</button>
                {console.log(i)}
            </div>
        </section>
    )
}

export default Slideshow