import { Link } from "react-scroll";

export default function HireMe(){
    return (
        <section class="bg-gray p-0 section">
            <div class="container">
                <div class="card bg-primary">
                    <div class="card-body text-light">
                        <div class="row align-items-center">
                            <div class="col-sm-9 text-center text-sm-left">
                                <h5 class="mt-3">Hire Me For Your Project</h5>
                                {/* <p class="mb-3">Accusantium labore nostrum similique quisquam.</p> */}
                            </div>
                            <div class="col-sm-3 text-center text-sm-right">
                            <Link
                                className="nav-item"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70} // Adjust this value based on your layout
                                duration={500}><button class="btn btn-light rounded">Hire Me!</button></Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section> 
    );
}