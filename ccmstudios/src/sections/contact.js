import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Contact extends React.Component{
    render(){
        return(
            <div id='contact'> 
        <Card className="text-center" id="contact">
          <Card.Header><h1>About</h1></Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              consectetur lobortis ornare. Ut id facilisis velit, eu semper
              turpis. Phasellus ultrices, sapien porttitor lacinia fringilla,
              ipsum nisi ultrices risus, vel tincidunt lorem dui tempus erat.
              Morbi non odio id lacus malesuada dignissim vitae sed quam.
              Maecenas ipsum odio, feugiat eu egestas id, euismod non turpis.
              Phasellus risus turpis, commodo non ante ut, venenatis consequat
              lacus. Etiam lacinia tempus diam, ac efficitur nisl ullamcorper
              quis. Vestibulum imperdiet ut mauris sit amet ornare. Fusce
              accumsan quis nulla id vulputate. Donec molestie semper sodales.
              Pellentesque pretium nec eros in aliquet. Suspendisse vel porta
              sapien, eget blandit ante. Aenean euismod pharetra felis in
              gravida. In vehicula lectus lacus. Vestibulum sit amet aliquet
              urna.
            </Card.Text>
            <Button variant="light">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>            </div>
        )
    }
}

export default Contact;