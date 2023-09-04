import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'; 
import { faBuilding,faPhone } from '@fortawesome/free-solid-svg-icons'

const RunningHighlights = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-yellow-300 to-transparent w-full h-full animate-run-highlights"></div>
      <div className="relative z-10 p-4 bg-white">Running Highlights Text</div>
    </div>
  );
};


const Card = ({ title, imageSrc, description }) => {
  return (
    
    <div className="max-w-sm rounded overflow-hidden bg-gray-500 bg-opacity-50 p-5 ml-4 mt-4">
      <img className="w-full h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer object-cover" src={imageSrc} alt={title} />
      <div className="px-8 py-5">
        <div className="font-bold text-xl mb-4 ml-4 ">{title}</div>
        <p className="text-black-700 text-base">{description}</p>
      </div>

    </div>
  );
};

const CardList = () => {
    
  const cards = [
    {
      title: 'Register Projects with RERA, Safeguard Interests of Home Buyers: UP RERA Chairman to Promoters',
      imageSrc: 'https://static.toiimg.com/photo/msid-93788707/93788707.jpg',
      
    },
    {
      title: 'UP-Rera received 47,000 complaints from homebuyers since 2017',
      imageSrc: 'https://images.news18.com/ibnkhabar/uploads/2022/02/auction-oida-16456702833x2.jpg',

    },
    {
      title: 'UP RERA asks Ajnara Realtech to complete stuck project by June 2025',
      imageSrc: 'https://upreradisk.blob.core.windows.net/azureportaldeploy/News_90624DainikJagaran.jpeg',
      
    },
    {
        title: 'Delink developer penalties with registrations to give relief of over 45,000 homebuyers in Noida, Greater Noida: UP-Rera Chairman',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4GnVwg5-lQvF_IjeAeNvLBKDpQLZTJ5wNg&usqp=CAU',
       
      },
      {
        title: 'UP RERA takes stern action aginst defaulter developers, to auction properties of Wave Mega City Center builder',
        imageSrc: 'https://upreradisk.blob.core.windows.net/azureportaldeploy/News_49559AmarUjalaFeb23.jpg',
        
      },
      {
        title: 'RCs worth Rs 1,200 crore resolved since 2018, says UP RERA chairman',
        imageSrc: 'https://static.toiimg.com/thumb/imgsize-23456,msid-102788154,width-600,resizemode-4/102788154.jpg',
        
      },
    
  ];
  const containerStyle = {
    background: 'url(https://blog.ipleaders.in/wp-content/uploads/2021/06/Arch2O-architectural-sketching-10-architecture-sketching-tips-1.jpg) center/cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem',
  };
  return (
    <div style={containerStyle}>
    <div className="flex flex-col-3 flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </div>
  );
};

const CardComp = () => {
  return (
    <>
    <div>
    <div>
      <marquee className=''> सर्वव्‍यापी स्‍वच्‍छता के कवरेज के प्रयासों में तेजी लाने के लिए और स्‍वच्‍छता पर बल देने के लिए प्रधानमंत्री ने दिनांक 2 अक्‍टूबर, 2014 को स्‍वच्‍छ भारत मिशन की शुरूआत की थी। दो उप मिशन, स्‍वच्‍छ भारत मिशन (ग्रामीण) और स्‍वच्‍छ भारत मिशन (शहरी) के लिए मिशन समन्‍वयकर्त्‍ता पेयजल और स्‍वच्‍छता मंत्रालय के सचिव हैं। दोनों मिशनों का उद्देश्‍य महात्‍मा गांधी की 150वीं वर्षगाँठ को सही रूप में श्रद्धांजलि देते…               मुख्यमंत्री सामग्र ग्राम विकास योजना – चयनित राजस्व गांव सूची 2018- 2019             प्रधान मंत्री आवास योजना- ग्रामीण स्थायी प्रतीक्षा सूची            जिला योजनान्तर्गत कृषकवार बोरिंगों की सूची 2017-2018  जिला योजनान्तर्गत कृषकवार बोरिंगों की सूची 2016-2017</marquee>
    </div>
          <CardList />
      </div>
      
      <section className="h-screen bg-center bg-cover bg-no-repeat bg-[url('https://peakvisor.com/img/news/Uttar-Pradesh-India.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">UP RERA HELPLINE</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Timing: 09:30 AM - 06:30 PM ( Mon to Sat )</p>
        <div className="flex items-center space-x-8">
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        <FontAwesomeIcon icon={faBuilding} shake />  Lucknow Headquarter
      </p>
      <h1 className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        <FontAwesomeIcon icon={faBuilding} shake />  NCR Regional Office
      </h1>
    </div><br></br>

    <div className="flex items-center space-x-8">
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
      <FontAwesomeIcon icon={faPhone} bounce />  For Technical & Complaint :
+919151602229, +919151642229
      </p>
      <h1 className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      <FontAwesomeIcon icon={faPhone} bounce /> For Technical & Complaint : +919151672229, +919151682229, 0120-2326111
      </h1>
    </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>
<div>
  
<footer className="mx-auto mt-8 grid grid-rows-12 grid-flow-col gap-0 w-full relative sm:rounded-bl-[840px] sm:z-[0] sm:-top-[30px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mr-40">
              <a href="https://flowbite.com/" className="flex items-center ">
                  <img src="data:image/png;base64,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" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">UP RERA</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">QUICK LINKS</h2>
                  <ul className="text-white-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">HOME</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">ABOUT</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">CAREER</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">MEDIA</a>
                      </li >
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">DOWNLOAD</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://tailwindcss.com/" className="hover:underline">CONTACT US</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">WEB INFORMATION MANAGER</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">SOCIAL LINKS</h2>
                  <ul className="text-white-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">FACEBOOK</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">TWITTER</a>
                      </li><br></br>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">YOUTUBE</a>
                      </li>
                  </ul>
              </div>
              
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">CIRCULARS & NOTICES</h2>
                  <ul className="text-white-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">AGREEMENT FOR SALES & LEASE</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">ORDER FOR CA, ARCHITECT, ENGINEER CERTIFICATE</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">ORDER FOR PROJECT REGISTRATION & EDITING CERTIFICATE</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">SOP FOR COMPLAIN AND REDRESSAL</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">CMS Computers LTD</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-white-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-white-500 hover:text-gray-900 dark:hover:text-white">
  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.9 7.61A2.29 2.29 0 0 0 20.29 6.3c-2.09-.14-4.16-.22-6.25-.22h-3.75c-2.09 0-4.16.08-6.25.22A2.29 2.29 0 0 0 3.71 7.6c-.14 2.09-.22 4.16-.22 6.25v3.75c0 2.09.08 4.16.22 6.25a2.29 2.29 0 0 0 1.31 1.31c2.09.14 4.16.22 6.25.22h3.75c2.09 0 4.16-.08 6.25-.22a2.29 2.29 0 0 0 1.31-1.31c.14-2.09.22-4.16.22-6.25v-3.75c0-2.09-.08-4.16-.22-6.25zM9.75 17.06V6.94l7.67 5.06L9.75 17.06z"/>
  </svg>
  <span className="sr-only">YouTube channel</span>
</a>
              <a href="#" className="text-white-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a> */}
          </div>
      </div>
    </div>
</footer>

</div>
      
      </>
  );
};

export default CardComp;
