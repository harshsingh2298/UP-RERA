
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import StateMap from './StateMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
// import {ChoroplethMapDrillDown} from '../src/utils/GeoMap'

import GeoMap, { ChoroplethMapDrillDown} from "./utils/GeoMap"
function Casousel() {
  const slides = [
    {
        url: 'https://macj-abuyerschoice.com/wp-content/uploads/2019/06/RERA-Banner-6.jpg',
      },
      {
        url: 'https://rera.bihar.gov.in/assets/images/banner-image4.png',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Uttar_Pradesh_districts.png/800px-Uttar_Pradesh_districts.png',
      },
  
      {
        url: 'https://assets.vccircle.com/uploads/2019/07/infrastructurerf.jpg',
      },
      {
        url: 'https://realtynxtmedia201121.s3.ap-south-1.amazonaws.com/media/2023/08/64d71bdaed6ff_upgovttobringco-developmentpolicytorevivestuckprojectsinnoidaandgreaternoida.jpg',
      },
      {
        url: 'https://img.freepik.com/premium-vector/building-construction-plan-facades-with-machinery-architectural-sketch-vector-illustration_474511-228.jpg?w=2000'
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 0.3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Run effect when currentIndex changes

  return (
    <><div>
          <marquee className='inset-0 bg-gradient-to-l from-yellow-300 to-transparent w-full h-full animate-run-highlights'> सर्वव्‍यापी स्‍वच्‍छता के कवरेज के प्रयासों में तेजी लाने के लिए और स्‍वच्‍छता पर बल देने के लिए प्रधानमंत्री ने दिनांक 2 अक्‍टूबर, 2014 को स्‍वच्‍छ भारत मिशन की शुरूआत की थी। दो उप मिशन, स्‍वच्‍छ भारत मिशन (ग्रामीण) और स्‍वच्‍छ भारत मिशन (शहरी) के लिए मिशन समन्‍वयकर्त्‍ता पेयजल और स्‍वच्‍छता मंत्रालय के सचिव हैं। दोनों मिशनों का उद्देश्‍य महात्‍मा गांधी की 150वीं वर्षगाँठ को सही रूप में श्रद्धांजलि देते…               मुख्यमंत्री सामग्र ग्राम विकास योजना – चयनित राजस्व गांव सूची 2018- 2019             प्रधान मंत्री आवास योजना- ग्रामीण स्थायी प्रतीक्षा सूची            जिला योजनान्तर्गत कृषकवार बोरिंगों की सूची 2017-2018  जिला योजनान्तर्गत कृषकवार बोरिंगों की सूची 2016-2017</marquee>
      </div><div className='h-screen w-screen relative group overflow-hidden'>
              {slides.map((slide, slideIndex) => (
                  <div
                      key={slideIndex}
                      style={{ backgroundImage: `url(${slide.url})` }}
                      className={`${slideIndex === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 absolute top-0 left-0 w-full h-full bg-center bg-cover`}
                  ></div>
              ))}
              {/* Left Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className='flex top-4 justify-center py-2'>
                  {slides.map((_, slideIndex) => (
                      <div
                          key={slideIndex}
                          onClick={() => goToSlide(slideIndex)}
                          className={`${slideIndex === currentIndex ? 'text-black' : 'text-gray-400'} text-2xl cursor-pointer`}
                      >
                          <RxDotFilled />
                        
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex bg-image-container" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1202457233/vector/high-building-silhouette-city-with-a-blue-sky-background.jpg?s=170667a&w=0&k=20&c=s_WDA_hEw_oIxuFzDKvNdH5VnKZRBSO0eUtQw0LPShc=")', backgroundSize: 'cover' }}>
  {/* First Section */}
  <div className='mt-10 mb-10 w-37 ml-20 z-20'>
    <StateMap/>
  </div>

  {/* Second Section */}
  <div className="col-md-5 col-sm-12 mt-10 mb-10 w-45 ml-40 p-2">
    <div className="regst_data">
      <h2 className='bg-blue-500 flex items-center font-bold text-2xl'>
        <span>
          <img className='mr-9 ml-4' src="https://rera.bihar.gov.in/assets/images/count-icn1.png" alt="Count Icon 1" />
        </span>
        Registered Projects: <strong  className="ml-6 mr-9">1596</strong>
      </h2>

      <div className="regst_data_ls" style={{ minHeight: '275px' }}><br></br>
        <ul className='text-black font-bold text-2xl'>
        <li className="ng-star-inserted text-2xl mr-9">
          <i className='mr-6'><FontAwesomeIcon icon={faMapMarker} /></i> Kanpur: <strong className='ml-10'>1127</strong>
        </li><br></br>
        <li className="ng-star-inserted text-2xl mr-9">
          <i className='mr-6'><FontAwesomeIcon icon={faMapMarker} /></i> Varanasi: <strong className='ml-9'>94</strong>
        </li><br></br>
        <li className="ng-star-inserted text-2xl mr-9">
          <i className='mr-6'><FontAwesomeIcon icon={faMapMarker} /></i> Lucknow: <strong className='ml-8'>91</strong>
        </li><br></br>
        <li className="ng-star-inserted text-2xl mr-9">
          <i className='mr-6'><FontAwesomeIcon icon={faMapMarker} /></i> Goarakhpur: <strong className='ml-1'>82</strong>
        </li><br></br>
        <li className="ng-star-inserted text-2xl mr-9">
          <i className='mr-6'><FontAwesomeIcon icon={faMapMarker} /></i> Agara: <strong className='ml-16'>38</strong>
        </li><br></br>
        {/* You can add more <li> elements here */}
      </ul>
      </div>
    </div>
  </div>
</div>

 </>
  );
}
export default Casousel