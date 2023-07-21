import rulesData from '../../JSON/rules.json'

export default function RulesUtil() {
    return (
        <div className="RulesUtil flex flex-col items-center px-10 pb-[10rem] w-full">
            <p
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="text-3xl md:text-5xl pb-[8rem] gagalin"
            >
                Rules & Regulations
            </p>
            <div className="w-full max-w-[1200px] flex items-center justify-start">
                <span
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-anchor-placement="top-bottom"
                    className="block border-l-2 py-20 border-[#ff0000]"
                >
                    <ul className=" h-full gap-10 flex flex-col ml-4 text-2xl text-[#ff0000]">
                        {
                            rulesData.map((rules, key) => {
                                return (
                                    <li
                                        data-aos="fade-right"
                                        data-aos-delay={key == 0 ? "100" : `${(key + 1) * 100}`}
                                        data-aos-duration="500"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        {rules.heading} :
                                        <span className='text-white '>
                                            &nbsp; {rules.rule}
                                        </span>
                                    </li>
                                )
                            })
                        }
                        {/* <li
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                        >#rule 1
                        </li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                        >#rule 2</li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                        >#rule 3</li>
                        <li
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                        >#rule 3</li> */}
                    </ul>
                </span>
            </div>

        </div>
    )
}