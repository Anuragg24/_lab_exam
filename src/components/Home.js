import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import th from "../assets/th.jpg"
import th2 from "../assets/th2.jpg"
import th3 from "../assets/th3.jpg"
import th4 from "../assets/th4.jpg"

function Home() {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div><img src={th} alt="Image 1" /></div>
                <div><img src={th2} alt="Image 2" /></div>
                <div><img src={th3} alt="Image 3" /></div>
                <div><img src={th4} alt="Image 4" /></div>
            </Carousel>
        </div>
    );
}

export default Home;