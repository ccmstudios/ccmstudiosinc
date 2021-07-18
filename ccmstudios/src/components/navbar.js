import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <ul id='navbar'>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Clients</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;