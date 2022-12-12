import React from "react"
import MyPic from '../../assets/Arqum.png'
import './About.css'
import { useState } from "react"

export default function About() {
  const [state, setState]= useState('hello arqum')
  return (
    <section id="About" >
    <div>
        <img className="aboutpic" src={MyPic} alt=""/>
    </div>
    <div className="aboutme">
        <h1 className="abo">ABOUT</h1>
        <p>Hi, I am Arqum Ahmad a Computer Scientist . 
             I do frontend web development with html, css, javascript, and bootstrap from almost 2.5 years. 
              I love solving complex problems and making animations with css and javascript.



            I will provide: 
            
            → Pixel perfect design <br />
            → Fully handwritten code (no AI) <br />
            → Responsive design <br />
            → High-quality code <br />
            → SEO Friendly design <br />
            → CSS and JS animations <br />
            → Boostrap Flexibility <br />
        
            convert xd to html, figma to html css bootstrap, convert PSD to HTML css 
            responsive, psd to bootstrap, Sketch to html
        </p>
        <p>{state}</p>
        {/* <input className="btn" type="button"  value="Download CV" onClick="window.location.href='https://drive.google.com/file/d/1raYS8YtSb8nD1zUIxhYdaYksmK3A9lsM/view'"/> */}
        {/* <i style="display: inline-block;" className="fa-solid fa-cloud-arrow-down" aria-hidden="true"></i> */}
    </div>
</section>
  )
}
