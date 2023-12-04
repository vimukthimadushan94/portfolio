export default function Portfolio(){
    return (
        <section id="portfolio" class="section">
            <div class="container text-center">
                <h6 class="subtitle">Portfolio</h6>
                <h6 class="section-title mb-4">Check My Wonderful Works</h6>
                {/* <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p> */}

                <div class="row">
                    <div class="col-sm-4">
                        <div class="img-wrapper">
                            <img src="assets/webworks/enrich-website.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Enrich tea and food exports</h5>
                                    <a href="https://www.enrichtea.com/" target="__blank"><i class="ti-link"></i></a>
                                </div>  
                            </div>
                        </div>
                        <div class="img-wrapper">
                            <img src="assets/webworks/mymaster.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Self Learning Material Platform</h5>
                                    <a href="https://mymaster.lk/" target="__blank"><i class="ti-link"></i></a>
                                </div>                              
                            </div>
                        </div>                  
                    </div>
                    <div class="col-sm-4">
                        <div class="img-wrapper">
                            <img src="assets/webworks/tuktuk.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Tuk Tuk CeylonRide</h5>
                                    <a href="http://tuktukceylonride.com/" target="__blank"><i class="ti-link"></i></a>
                                </div>  
                            </div>
                        </div>
                        <div class="img-wrapper">
                            <img src="assets/webworks/pentium-pastal.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Pentium 2000 Stationery Company</h5>
                                    <a href="https://pentium2000.lk/" target="__blank"><i class="ti-link"></i></a>
                                </div>                              
                            </div>
                        </div>                  
                    </div>
                    <div class="col-sm-4">
                        <div class="img-wrapper">
                            <img src="assets/webworks/heslaa.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Heslaa Tours</h5>
                                    <a href="https://heslaatours.com/" target="__blank"><i class="ti-link"></i></a>
                                </div>  
                            </div>
                        </div>
                        <div class="img-wrapper">
                            <img src="assets/webworks/baranas.jpg" alt=""/>
                            <div class="overlay">
                                <div class="overlay-infos">
                                    <h5>Baranas Sri Lanka</h5>
                                    <a href="https://baranassrilanka.com/" target="__blank"><i class="ti-link"></i></a>
                                </div>                              
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        </section>
    );
}