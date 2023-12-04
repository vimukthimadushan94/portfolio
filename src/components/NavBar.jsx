import { Link } from "react-scroll";

export default function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
            <div className="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto align-items-center">
                        <Link
                            className="nav-item"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="nav-link">Home</span></Link>
                        <li class="nav-item"></li>
                        <Link
                            className="nav-item"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="nav-link">About</span></Link>
                        <li class="nav-item"></li>
                        <Link
                            className="nav-item"
                            to="service"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="nav-link">Service</span></Link>
                        <li class="nav-item"></li>
                        <Link
                            className="nav-item"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="nav-link">Portfolio</span></Link>
                        <li class="nav-item"></li>
                        {/* <Link
                            className="nav-item"
                            to="testmonial"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="nav-link">Testmonial</span></Link>
                        <li class="nav-item"></li> */}
                        <Link
                            className="nav-item"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust this value based on your layout
                            duration={500}><span className="- btn btn-primary rounded ml-4">Contact</span></Link>
                    </ul>
                </div>
            </div>          
        </nav>
    );
}