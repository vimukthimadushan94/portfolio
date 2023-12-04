export default function Skills(){
    return (
        <section class="section">
            <div class="container text-center">
                <h6 class="subtitle">Skills</h6>
                <h6 class="section-title mb-4">Why Choose me</h6>
                <p class="mb-5 pb-4">I use the most recent technological stacks available in the tech sector.<br/>
                Node.js, Express, TypeScript, React js, Redux, AWS, Docker, Javascript, Vue.js, PHP, JAVA, Laravel, Spring
Boot, OctoberCMS, Git, Jira, Livewire, JQuery, HTML, CSS </p>

                <div class="row text-left">
                    <div class="col-sm-6">
                        <h6 class="mb-3">Node JS</h6>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>89%</span></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h6 class="mb-3">Javascript</h6>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>83%</span></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h6 class="mb-3">Laravel</h6>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h6 class="mb-3">React, Redux</h6>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    );
}