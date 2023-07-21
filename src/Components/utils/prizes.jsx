import prizesData from "../../JSON/prizes.json"

export default function PrizesUtil() {
    return (
        <div className="flex flex-col items-center w-full px-[5vw]">
            <p
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl md:text-5xl pb-[8rem]">
                Prizes
            </p>
            <ul className=" flex justify-center flex-wrap items-center gap-5 ">

                {
                    prizesData.map((item, key) => {
                        return (
                            <li
                            data-aos="fade-right"
                            data-aos-delay={key==0? `100` : `${(key+1)*100}`}
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                            className="rounded-lg h-[120px] md:h-[200px] aspect-square bg-[#cecece]">
                                <div className="image-wrapper w-full h-full object-cover">
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
                    className="rounded-lg h-[120px] md:h-[200px] aspect-square bg-[#cecece]"></li>
                <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    className="rounded-lg h-[120px] md:h-[200px] aspect-square bg-[#cecece]"></li>
                <li
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    className="rounded-lg h-[120px] md:h-[200px] aspect-square bg-[#cecece]"></li>
                <li
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    className="rounded-lg h-[120px] md:h-[200px] aspect-square bg-[#cecece]"></li> */}
            </ul>
        </div>
    )
}