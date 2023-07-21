import Footer from "./Components/Footer"
import Header from "./Components/Header"

const CommonContainer = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default CommonContainer