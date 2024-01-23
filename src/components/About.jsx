import { Link } from "react-scroll";
export default function About() {
  return (
    <section id="about" class="section mt-3">
      <div class="container mt-5">
        <div class="row text-center text-md-left">
          <div class="col-md-3">
            <img
              src="assets/imgs/avatar-madushan.png"
              alt=""
              class="img-thumbnail mb-4"
            />
          </div>
          <div class="pl-md-4 col-md-9">
            <h6 class="title">Vimukthi Madushan</h6>
            <p class="subtitle">Full Stack Developer</p>
            <p>
              Hello! I'm a Full Stack Developer with 4+ years of experience in
              creating efficient web solutions. I specialize in Node.js for
              server-side development, use React for crafting user-friendly
              interfaces, and excel in Laravel OctoberCMS for building strong
              backends that drive web applications.
            </p>
            <Link
              className="nav-item"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button class="btn btn-primary rounded">HIRE ME</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
