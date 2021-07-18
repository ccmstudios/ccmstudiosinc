import React from 'react'
import Header from '../components/header'
import Subheader from '../components/subheader'
import Domains from '../components/domains'
import About from '../sections/about'
import Contact from '../sections/contact'
import Clients from '../sections/clients'
import Services from '../sections/services'

class Home extends React.Component{
    render(){
        return(
            <div>
{/* Header CCM in large letters */}
<Header/>
{/* Sub header Creative Concepts Manifested with button for Reseller page */}
<Subheader/>
<Domains/>
{/* menu that jumps to section */}
{/* Banner with Gif */}
{/* Intro */}
{/* Sections */}
<About/>
<Services/>
<Clients/>
<Contact/>
{/* Contact */}
            </div>
        )
    }
}
export default Home;