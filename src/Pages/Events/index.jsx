import React from 'react'
import PrizesUtil from '../../Components/utils/prizes'
import RulesUtil from '../../Components/utils/rules'
import SubmitUtil from '../../Components/utils/submit'
import eventsData from "../../JSON/events.json"

export default function Events({ name, date, desc, image, googleForm }) {
  console.log(googleForm)
  return (
    <>
      <section className=" flex flex-col items-center gap-10 py-20">
        <div className=" mt-10 text-white p-2 text-[30px] md:text-[55px]  gagalin">
          {name}
        </div>
        <div className=" flex flex-col items-center w-[80vw] md:w-[900px] md:gap-0 gap-10  py-5">

          <div className="image-wrapper w-[75%] p-2 flex items-center justify-center md:aspect-video rounded-xl bg-gray-50">
            <img className="rounded-xl" src={image} alt="There is an image" />
          </div>

          <div className="description-wrapper text-white text-xl md:py-16">
            {desc}
          </div>
          <div className="details-wrapper flex flex-col  w-[95%] md:w-[60%] p-5 mt-2 md:p-8 rounded-xl text-white bg-[#333]">
            <p className=" text-xl md:text-2xl gagalin">
              {name}
            </p>
            <div className='pt-3'>
              <p className="text-[#a0a0a0] ">SCHEDULE</p>
              <p className="text-xl md:text-2xl">
                {date}
              </p>
            </div>
            <div className='pt-3'>
              <p className="text-[#a0a0a0]">HAPPENING</p>
              <p className="text-xl md:text-2xl">Online</p>
            </div>
            <button className="py-3 mt-5 text-xl font-semibold rounded-xl bg-[#f00] transition hover:bg-[#e40000]">
              <a href={googleForm} target="_blank" className=' md:px-[40%]'>
                PARTICIPATE
              </a>
            </button>
          </div>


        </div>

        <div className="text-white">
          <RulesUtil />
          <SubmitUtil />
          <PrizesUtil />
        </div>
      </section>
    </>
  )
}
