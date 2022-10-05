import Layout from 'antd/lib/layout/layout'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({children}) => {
    return(
        <Layout
            style={{
                width: "1600px",
                margin: "auto",
                paddingTop: "56px",
                backgroundColor: "white"
            }}
        >
            <Navbar/>
            {children}
            <Footer/>
        </Layout>
    )
}

export default PageLayout