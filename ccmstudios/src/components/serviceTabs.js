import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Startbutton from "./startbutton";

const ServiceTabs = () => {
  return (
    <div id="servicetabs">
      <Tabs
        bg="dark"
        text="light"
        id="DIY"
        className="mb-3"
      >
        <Tab bg="dark" text="light" eventKey="home" title="DIY Web Design">
          <h3>Starting at $20.99 Domain + $15.99 Website Builder</h3>
          <br></br>
          <br></br>
          <h5>
            This is for the client who is looking to get up and running but
            want's to have full creative control over the design process. You
            simply need to click the link below and purchase a domain and the
            website builder of your choice. This website builder is very user
            friendly and is simple to get started. You can purchase any
            additional features that you need to maximize your websites
            functionality and visibility such as online stores, email marketing,
            and more. This is the cheapest package to get started with and gives
            the client complete control over their web building experience.
          </h5>
          <br></br>
          <Startbutton />
        </Tab>
        <Tab
          id="webOnly"
          bg="dark"
          text="light"
          eventKey="profile"
          title="Web Design Services Only"
        >
          <h3>Starting at $250.00 for one Website</h3>
          <br></br>
          <br></br>
          <h5>
            This is for the client who has already purchased a domain, has the
            capability to host it, and simply needs someone to design an
            eye-catching website; this package is for you. We will build from
            the ground up, a custom website to your own specifications with
            classic styling and functionality. Upon completion, you will receive
            all of the files along with instructions on how to load them into
            your cPanel hosting. You will also receive a years worth of free
            updates and revisions to the website upon completion.
          </h5>
          <br></br>

          <Startbutton />
        </Tab>

        <Tab
          id="fullPackage"
          bg="dark"
          text="light"
          eventKey="contact"
          title="Complete Web Design Package"
        >
          <h3>
            Starting at $20.99 Domain + $15.99 Web Hosting and $100.00 Website
          </h3>
          <br></br>
          <br></br>
          <h5>
            This is for the client who wants to start at the top for launching a
            website and doesn't know where to begin. First you will need to
            click the button below and purchase your domain, and hosting. Once
            you have done this, you will complete the necessary requirements to
            begin building your website. We will build from the ground up, a
            custom website to your own specifications with classic styling and
            functionality. Upon completion, you will receive all of the files
            for your own records. We will load the files into your domain and
            you just have to sit back and wait for your website to go live. You
            will also receive unlimited free updates and revisions to the
            website upon completion as long as you retain your hosting through
            our services.
          </h5>
          <br></br>

          <Startbutton />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
