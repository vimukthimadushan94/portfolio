export default function Service(){
    return (
        <section id="service" class="section">
            <div class="container text-center">
                <h6 class="subtitle">Service</h6>
                <h6 class="section-title mb-4">What I Do</h6>
                {/* <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p> */}

                <div class="row">
                    <div class="col-sm-6 col-md-3 mb-4">
                        <div class="custom-card card border">
                            <div class="card-body">
                                <i class="icon ti-shopping-cart"></i>
                                <h5>e-commerce sites</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-4">
                        <div class="custom-card card border">
                            <div class="card-body">
                                <i class="icon ti-desktop"></i>
                                <h5>Web Development</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-4">
                        <div class="custom-card card border">
                            <div class="card-body">
                                <i class="icon ti-mobile"></i>
                                <h5>Mobile Apps</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-4">
                        <div class="custom-card card border">
                            <div class="card-body">
                                <i class="icon ti-bar-chart"></i>
                                <h5>SEO</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}