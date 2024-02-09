"use client"
import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim"; 

import "../particles.css"
import { useCallback } from "react";
const Banner = () => {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div >
            
       <div style={{ width: "auto", height: "400px", }}>
       <div id="particle-container" className="particle-container mb-20 " style={{ height:"550px" ,marginTop:"0px",  }}>
            
            <h1 className="relative z-10 text-white text-3xl text-center font-bold pt-40" >Admin can fix any <br/><span className="text-pink-400"> type of  problem</span>   <br /> that is faced by user</h1>
            <Particles
            
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#202242",
                    },
                },
                style:{
                    position: "absolute"
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>

       </div>

        </div>
    );
};

export default Banner;