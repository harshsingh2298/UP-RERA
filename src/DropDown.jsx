import React, { useState } from 'react';
import logo2 from './uprera.jpg';
// import logo2 from './logo.png';
import bg from './banner-1.jpg';
import yogi from './homeyogi.png';
import 'tailwindcss/tailwind.css';
import modi from './pm-modi.png';
import modi2 from './images__1_-removebg-preview.png';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from 'react-icons/fa';
import logo from './foot-logo.png';

import Carousel from './Casousel';
const DropDown = () => {

  return (
      <><header className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% fixed top-0 left-0 w-full shadow-md z-40 '>
          <nav className=" mx-auto mt-8 grid grid-rows-12 grid-flow-col gap-0 w-full relative sm:rounded-bl-[840px] sm:z-[0] sm:-top-[30px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
 
    {/* <div className="mx-auto bg-white grid grid-rows-12 grid-flow-col gap-1 w-full relative sm:rounded-bl-[840px] sm:z-[0] sm:-top-[30px] "> */}
        <div className=" row-span-3 col-start-1  col-span-1 bg-blue-900 rounded-tr-[840px] ">
           {/* <h1>logo left</h1> */}
           {/* <h4 className='extra-bold text-lg text-orange-900'>Uttar Pradesh</h4> */}
           <img 
              src={logo} 
              alt='logo'
              className='h-14 mt-2 rounded-full '
            />
        </div>
        <div className="row-span-1 col-start-2 pt-2 col-span-4 ">
            
            <h4 className='text-xl ... font-serif font-bold ml-5'>Uttar Pradesh</h4>
            
        </div>
        <div className="row-span-1 col-start-6 col-span-3 w-full sm:bg-gradient-to-r sm:from-fromgrad sm:to-tograd sm:rounded-bl-[540px] sm:z-[0] sm:-top-[30px]">
           <h2 className='font-extrabold text-[24px]
                  leading-[30px] text-black'>
              <ul className='flex justify-center text-black gap-8 sm:text-gray-900  dark:text-black'>
                <li><a href="/"><FaHome /></a></li>
                <li><a href="/about"><FaInfoCircle /> </a></li>
                <li><a href="/services"><FaCogs /> </a></li>
                <li>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                      </svg>
                  </button>
                </li>
                
              </ul>
           </h2>
        </div>
        <div className="row-span-2 col-start-2 col-span-9">
          <h2 className='font-serif font-bold ml-5'>
              Real Estate Regulatory Authority
          </h2>
        </div>
        <div className="row-span-3  col-start-11  col-span-1 "> 
            <div className='flex justify-end mr-4 w-full'>
     <img 
                  src={logo2}
                  alt='menu'
                  className='h-14 ml--12 mt-3 opacity-50 rounded-full '
                />
            </div>
        </div>
          </nav>
          <div className="hidden w-full  justify-end md:block md:w-auto ml-50 " id="navbar-dropdown">
                      <ul className="flex justify-end flex-col font-medium p-4 md:p-0 mt-4 border sm:bg-gradient-to-r sm:from-fromgrad sm:to-tograd  border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">ABOUT RERA
                              
                              </button>

                              <div id="dropdownNavbar1" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">INTRODUCTION</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MEDIA SECTION </a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">UP-RERA ANNUAL REPORT</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">E-BOOK ON BEST PRACTICES</a>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar 2" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">LEGAL
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar 2" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ACTS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">RULES</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">REGULATIONS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NOTIFICATIONS</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">AGREEMENT FOR SALE/LEASE</a>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar3" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">REGISTRATION
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar3" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PROMOTERS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PROJECTS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AGENT</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">AUTHORIZED ENTITY U/S 8</a>
                                  </div>
                              </div>
                          </li>         
                           <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar4" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">CONCILITAION FORM 
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar4" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONCILIATION LOGIN</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONCILIATION STATUS</a>
                                      </li>
                                      
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar5" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">COMPLAINTS
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar5" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">REGISTER COMPLAINTS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COMPLAINTS FOR COMPENSATION</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GET COMPLAINT NUMBER</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PUBLIC GRIEVANCE</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">REQUEST FOR RACTIFICATION OF ORDER U/S 8</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">COMPLAINT STATUS</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2nd COMPLAINT OF NEW CAUSE OF ACTION</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">VIEW 2nd COMPLAINT OF NEW CAUSE OF ACTION</a>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar6" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">REQUEST 
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar6" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">REQUEST FOR CERTIFIED COPY OF DOCUMENT</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">REQUEST FOR ORDER EXECUTION</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">VIEW RC STATUS</a>
                                      </li>
                                  </ul>
                                  
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar7" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">LOGIN 
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar7" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USER LOGIN</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">INSPECTION LOGIN</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">E-COURT LOGIN/SIGN UP</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GRIEVANCE LOGIN</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">AUTHORIZED ENTITY U/S 8 LOGIN</a>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar8" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">DOWNLOADS 
                              {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              <div id="dropdownNavbar8" className="z-50 hidden font-normal w-full bg-blue-100 justify-center divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CA CERTIFICATE</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ARCHITECT CERTIFICATE </a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ENGINEERS CERTIFICATE</a>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <button id="dropdownNavbarLink"  data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">CAREERS
                               {/* <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg> */}
                              </button>

                              {/* <div id="dropdownNavbar9" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                      </li>
                                      <li>
                                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                      </li>
                                  </ul>
                                  <div className="py-1">
                                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                  </div>
                              </div> */}
                          </li>
                          
                          <li className="relative">
  <button
    id="dropdownNavbarLink"
     data-dropdown-trigger="hover"
    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
    CONTACT US
  </button>
                          </li>
                          <li>
    <button id="dropdownNavbarLink"  data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">STATISTICS
    </button></li>
                      </ul>
                  </div>
      </header>
          
      <div className="absolute top-20 right-10 z-20">
  <div className="container p-20">
    <div className="proj_regs_in">
      <div className="regs_in text-white bg-sky-500 bg-opacity-50 p-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <span>
          <img src="https://rera.bihar.gov.in/assets/images/count-icn1.png" alt="Count Icon 1" />
        </span>
        <div className="regs_in_co">
          <strong>1595</strong>
          <p>No. Of Approved Projects</p>
        </div>
      </div>
      <div className="regs_in text-white bg-sky-500 bg-opacity-50 p-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <span>
          <img src="https://rera.bihar.gov.in/assets/images/count-icn3.png" alt="Count Icon 2" />
        </span>
        <div className="regs_in_co">
          <strong>527</strong>
          <p>No. Of Approved Agents</p>
        </div>
      </div>
      <div className="regs_in text-white bg-sky-500 bg-opacity-50 p-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <span>
          <img src="https://rera.bihar.gov.in/assets/images/count-icn2.png" alt="Count Icon 3" />
        </span>
        <div className="regs_in_co">
          <strong>450</strong>
          <p>Completed Projects</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="mt-75 flex space-x-10 absolute top-80 left-40 z-20">
  {/* First person */}
  <div className="regs_in text-white bg-gray-700 bg-opacity-70 p-5 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 focus:outline-none mt-75">
    <span className="">
      <img src={yogi} alt="Count Icon 1" />
    </span>
    <div className="regs_in_co">
      <strong>Yogi Adityanath</strong>
      <p>Hon’ble Chief Minister of Uttar Pradesh</p>
    </div>
  </div>

  {/* Second person */}
  <div className="regs_in text-white bg-gray-700 bg-opacity-70 p-5 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 focus:outline-none">
    <span>
      <img src={modi2} alt="Count Icon 2"/>
    </span>
    <div className="regs_in_co">
      <strong>Narendra Modi</strong>
      <p>Hon'ble Prime Minister of India</p>
    </div>
  </div>
</div>
   
    <div>
        
    <Carousel/>
    </div>
    </>
  );
};

export default DropDown;
