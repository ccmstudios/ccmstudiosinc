import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const ServiceTabs = ()=>{
    return(

<Tabs id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
      Test 1
  </Tab>
  <Tab eventKey="profile" title="Profile">
      Test 2
  </Tab>
  <Tab eventKey="contact" title="Contact" >
      Test 3
  </Tab>
</Tabs>
    )
}

export default ServiceTabs;