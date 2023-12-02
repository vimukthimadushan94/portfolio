function App() {
  return (
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

    <nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            
        </div>          
    </nav>
    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">hello,I'm</h6>
                <h6 class="title">James Smith</h6>
                <p>UI/UX Designer</p>

                <div class="buttons pt-3">
                    <button class="btn btn-primary rounded">HIRE ME</button>
                    <button class="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>      

                <div class="socials mt-4">
                </div>
            </div>              
            <div class="img-holder">
                <img src="assets/imgs/man.svg" alt=""/>
            </div>      
        </div>  

        <div class="widget">
            <div class="widget-item">
                <h2>124</h2>
                <p>Happy Clients</p>
            </div>
            <div class="widget-item">
                <h2>456</h2>
                <p>Project Completed</p>
            </div>
            <div class="widget-item">
                <h2>789</h2>
                <p>Awards Won</p>
            </div>
        </div>
    </header>
    
</body>
  );
}

export default App;
