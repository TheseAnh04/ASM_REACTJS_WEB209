import React, { useState } from 'react'
// import slideImage1 from '/public/fwfqq-1--button@2x.png'; 


type Props = {}

const Slider = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            title: "Wir kümmern uns um Ihre schöner Garten und Haus",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            buttonText: "Lern mehr",
            image: '/public/fwfqq-1@2x.png'
        },
        {
          title: "hand holding eggplant sprout",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          buttonText: "Learn more",
        //   image: slideImage1 // Bạn có thể sử dụng một ảnh khác nếu có
        },
        // Add more slides here if needed
    ];
    const totalSlides = slides.length;
  
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
  
    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
  return (
    <div className="w-full h-[600px] bg-gradient-to-r from-emerald-100 to-red-50">
          <div className="overflow-hidden relative">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex-shrink-0 p-24" style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '600px',
                  transformOrigin: 'center',
              }} >
                  <h2 className="text-neutral-600 text-[55px] font-Baloo font-medium leading-[70.90px] mt-24 w-8/12 md:w-6/12 break-words">{slide.title}</h2>
                  <p className="text-stone-600 text-[13px] font-normal font-['Poppins'] leading-tight tracking-wider mt-1 w-8/12 md:w-6/12 break-words">{slide.description}</p>
                  <button className="w-[216px] h-[59px] rounded-[3px] border-2 border-neutral-600 text-neutral-600 text-xl font-normal font-['Poppins'] leading-relaxed tracking-widest hover:bg-[#545F3C] hover:text-white mt-4">
                    {slide.buttonText}
                  </button>
                  {/* <img src={slide.image} alt={slide.title} className="w-full h-[400px]" /> */}
                </div>
              ))}
            </div>
            <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 border-none outline-none">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                </svg>
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full border-none outline-none">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
            </button>
            </div>
      </div>
  )
}

export default Slider