import { Facebook, FacebookOutlined, Instagram, LinkedIn, Gmail, Mail} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col items-center justify-center border-t-2 border-[#bbbbbb] md:border-0 smallText shadow-2xl">
                <div className="container max-w-[1200px] flex justify-between md:items-center flex-col-reverse md:flex-row px-5">
                    <div className="footer-logo py-32 md:py-10 ">
                        <img src="assets/logo2.png" className='w-[200px] md:w-[200px] ' alt="" />
                    </div>
                    <div className="footer-div flex flex-col">
                        <div className="footer-col">
                            <ul className='flex flex-col md:flex-row md:gap-5 '>
                                <li><a href="#">Contests</a></li>
                                {/* <li><a href="#">Performances</a></li>
                                <li><a href="#">Tasks</a></li> */}
                                <li><a href="#">Program</a></li>
                                <li><a href="#">Upcoming Contests</a></li>
                                <li><a href="#">Participation </a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="social-links flex gap-5 py-8">

                            <a href="https://www.facebook.com/profile.php?id=100091230918150" target="_blank"> <Facebook fontSize='inherit'/> </a>
                            <a href="mailto:gigacode17@gmail.com" target="_blank"> <Mail fontSize='inherit' /> </a>
                            <a href="https://www.instagram.com/gigacode17/" target="_blank"> <Instagram fontSize='inherit' /> </a>
                            <a href="https://www.linkedin.com/company/gigacode/" target="_blank"> <LinkedIn fontSize='inherit' /> </a>

                        </div>
                        <div className="footer-col terms-col">
                            <ul className="flex flex-wrap">
                                <li>@ skillance corp.</li>
                                <li><a href="/assets/docs/Terms_of_Services.pdf" target="_blank">Terms & conditions</a></li>
                                <li><a> <NavLink to={"/about"} >About us</NavLink></a></li>
                                <li><a href="/assets/docs/Privacy_Policy.pdf" target="_blank">Privacy Policy</a></li>
                                <li><a href="/assets/docs/Code_of_Conduct.pdf" target="_blank">Code of Conduct</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer