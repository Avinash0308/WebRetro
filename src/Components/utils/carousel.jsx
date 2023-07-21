import React from "react"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { EventData } from "../../../Components/EventData"
import "../style.css"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [position, setPosition] = useState(0)
    const [isOngoing, setIsOngoing] = useState()

    useEffect(() => {
        const EventContainerInterval = setInterval(() => {
            goToNext();
            console.log(position)
        }, 3000);
        return () => clearInterval(EventContainerInterval);
    }, [currentIndex]);

    const goToPrev = () => {
        if (currentIndex == 0) {
            setPosition((EventData.length - 1) * -105)
            setCurrentIndex(EventData.length - 1)
        } else {
            setPosition(position + 105)
            setCurrentIndex(currentIndex - 1)
        }
    }
    const goToNext = () => {
        if (currentIndex != EventData.length - 1) {
            setPosition(position - 105)
            setCurrentIndex(currentIndex + 1)
        } else {
            setPosition(position + 210)
            setCurrentIndex(0)
        }
    }

    const dotStyles = {
        background: "black"
    }
    const eventContainerStyles = {
        transform: `translateX(${position}%)`
    }

    return (
        <>
            <div className="carousel-container relative overflow-hidden flex gap-[5%] text-white h-[18rem] md:h-[30rem] w-[90vw]">
                <button onClick={goToPrev} className="absolute z-[1] top-0 bottom-0 left-3">&lt;</button>
                <button onClick={goToNext} className="absolute z-[1] top-0 bottom-0 right-3">&gt;</button>
                {
                    EventData.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} style={eventContainerStyles} className="eventContainer" >
                                {/* <img src="#" className="background" alt="" /> */}
                                <div className=" flex flex-col items-start justify-center md:justify-start gap-2 md:gap-5 text-white w-max">
                                    <p className="eventName text-3xl md:text-7xl md:py-10">
                                        {item.name}
                                    </p>
                                    <p className="eventTime text-2xl md:text-4xl text-[#ff0000] underline">
                                        {item.time}
                                    </p>
                                    <p className="eventPlace text-2xl mb-8">
                                        {item.place}
                                    </p>
                                    <NavLink className="w-full" to={item.time == "ongoing" ? item.Navlink[1] : item.Navlink[0] } >
                                        <button className="participateBtn">
                                            {item.time == "ongoing" ? " Participate " : " Notify Me "}
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="indexContainer absolute bottom-2 left-[0] right-[0] flex justify-center gap-5 ">

                    {
                        EventData.map((event, eventIndex) => {
                            return (
                                <button key={eventIndex} onClick={() => { setCurrentIndex(eventIndex) }} style={currentIndex == eventIndex ? dotStyles : null} className=" h-2 w-2 bg-white rounded-[50%]" ></button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Carousel