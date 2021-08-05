import React from 'react'
import Header from '../components/header'
import Subheader from '../components/subheader'
import Domains from '../components/domains'
import About from '../sections/about'
import Contact from '../sections/contact'
import Clients from '../sections/clients'
import Services from '../sections/services'
import Banner from '../components/banner'
import Footer from '../components/footer'

class Home extends React.Component{
    render(){
        return(
            <div >
                <div id='home'>
                    
<Domains/>

<Header/>
<Subheader/>
<br></br>
<br></br>
                </div>

{/* Header CCM in large letters */}
{/* Sub header Creative Concepts Manifested with button for Reseller page */}
{/* menu that jumps to section */}
{/* Banner with Gif */}
{/* Intro */}
{/* Sections */}
<About/>
<br></br>
<br></br>
<br></br>
<br></br>
<Services/>
{/* <Clients/>
<Contact/> */}
{/* Contact */}
            <div>
                <Domains/>
                <Footer/>
            </div>
            </div>
        )
    }
}
export default Home;