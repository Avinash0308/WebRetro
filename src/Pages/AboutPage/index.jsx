import React from 'react'
import aboutData from "../../JSON/about.json"

const About = () => {
    return (
        <div className='flex justify-center items-center pt-16 text-white' >
            <div className=" flex flex-col items-center md:p-8 py-12 gap-16">
                <div className="flex flex-col items-center gap-2 w-2/3">
                    <p className="text-2xl font-semibold">Who we are</p>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore, ducimus architecto debitis sit tenetur repudiandae labore voluptas maxime officiis. Aliquam quia inventore culpa dolor.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-16 px-12 w-full">
                    {
                        aboutData.map((item) => {
                            return (
                                <div className="flex flex-col gap-1">
                                    <img src={item.image} alt="" className='h-[180px] bg-red-500' />
                                    <div className="flex flex-col gap-1 p-2">
                                        <p>{item.name}</p>
                                        <p className='text-sm text-[#c5c5c5]'>-{item.designation}</p>
                                        <p className='text-sm text-[#797979]'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
