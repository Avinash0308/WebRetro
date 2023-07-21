import React from 'react'
import Countdown from '../../Components/CountDown'
import './style.css'
import eventsData from '../../JSON/events.json'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' up'>
      <div className="homeTopSec h-[100vh]">
        <div className="homeherosec flex flex-col max-width justify-center items-center h-[100vh] md:h-[65vh] pt-24 md:pt-36">
          <div className='py-16 text-center gagalin text-white text-[40px] md:text-[75px]'>
            frontend blast
          </div>

          <Countdown />

          <div className="buttons">
            <button className='homePage-button'>Know more</button>
            <button className='homePage-button'>notify me</button>
          </div>
        </div>
      </div>


      <div className="commingSoomSec max-width h-[75vh] flex flex-col justify-center items-center">
        <div className='gagalin text-center my-10 text-[35px] md:text-[45px]'>
          Upcoming Events
        </div>

        <div className="events flex justify-between items-center w-[90%]">
          {eventsData.map((event) => {
            return (
              <NavLink to ={`/${event.eventName}`}>
                <div className="nextbox flex flex-col justify-start">
                  <div className="name gagalin md:text-[30px] text-[23px] coke">
                    {event.eventName}
                  </div>
                  <div className="des text-justify md:text-[17px] text-[13px]">
                    {event.description}
                  </div>
                  <div className="comingSoon">
                    {event.eventDate}
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>

    </div>
  )
}
