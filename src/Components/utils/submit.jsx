import submitData from "../../JSON/submit.json"
export default function SubmitUtil() {
    return (
        <div className="flex flex-col items-center px-10 pb-[10rem] w-full">
            <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl md:text-5xl pb-[8rem]">
                How To Submit ?
            </p>
            <div className=" w-full flex items-center justify-center">
                <span
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-bottom"
                    className="block border-l-2 py-20 border-[#ff0000]">
                    <ul className="flex flex-col gap-[6rem] -ml-5 ">

                        {
                            submitData.map((item, key) => {
                                return (
                                    <li
                                        data-aos="fade-right"
                                        data-aos-delay={key == 0 ? "100" : `${(key + 1) * 100}`}
                                        data-aos-duration="500"
                                        data-aos-anchor-placement="top-bottom"
                                        className="">
                                        <div className="ml-5 text-xl p-2 w-[70vw] md:w-[600px]">
                                            {item.text}
                                        </div>
                                        <div className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] object-cover bg-[#cecece]">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {/* <li
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[10rem] w-[80vw] md:w-[700px] bg-[#cecece]"></li> */}
                    </ul>
                </span>
            </div>
        </div>
    )
}