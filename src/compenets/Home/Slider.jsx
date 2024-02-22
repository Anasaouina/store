import './Slider.css'
import bg from '../../assets/img/bg.png'
import bg1 from '../../assets/img/bg1.png'
import bg2 from '../../assets/img/bg2.png'
import { useEffect } from 'react';
function Slider (){

    let currentSlide = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slide'); // Use querySelectorAll to get all slides
        if (!slidesContainer || slides.length === 0) {
            console.error('Slides container or slides not found.');
            return;
        }
    
        const slideWidth = slides[0].offsetWidth; // Assuming all slides have the same width
        slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3; // Adjust the number based on the number of slides
        showSlide(currentSlide);
    }
    
    function startAutoSlide() {
        return setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
    }
    
    // Assuming this is a React component
    useEffect(() => {
        const intervalId = startAutoSlide();
        return () => clearInterval(intervalId);
    }, []);
 return(
    <section id="main-section">
        <div className="slider-container">
            <div className="slides">
                <div className="slide"><img src={bg} alt="Slide 1"/></div>
                <div className="slide"><img src={bg1} alt="Slide 2"/></div>
                <div className="slide"><img src={bg2} alt="Slide 3"/></div>
            </div>
        
    </div>
  </section>
 )
}
export default Slider;