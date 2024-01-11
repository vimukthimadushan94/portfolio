import { Link } from "react-scroll";

export default function Header() {
  return (
    <header class="header" id="home">
      <div class="container">
        <div class="infos">
          <h6 class="subtitle">hello,I'm</h6>
          <h6 class="title">Vimukthi Madushan</h6>
          <p>Full Stack Developer</p>

          <div class="buttons pt-3">
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

            <a href="assets/cv/CV2-madushan.pdf" target="__blank">
              <button class="btn btn-dark rounded">DOWNLOAD CV</button>
            </a>
          </div>

          <div class="socials mt-4">
            <a
              class="AppHeader-logo ml-2"
              target="__blank"
              href="https://github.com/vimukthimadushan94"
              data-hotkey="g d"
              aria-label="Homepage "
              data-turbo="false"
              data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
            >
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle color-fg-default"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>

            <a
              target="__blank"
              title="Homepage"
              id="logo"
              class="has-tooltip ml-3"
              aria-label="Homepage"
              data-track-label="main_navigation"
              data-track-action="click_gitlab_logo_link"
              data-track-property="navigation_top"
              href="https://gitlab.com/vimukthi.madushan"
            >
              <svg
                aria-hidden="true"
                role="img"
                class="tanuki-logo"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="tanuki-shape tanuki"
                  d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                  fill="#E24329"
                ></path>
                <path
                  class="tanuki-shape right-cheek"
                  d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                  fill="#FC6D26"
                ></path>
                <path
                  class="tanuki-shape chin"
                  d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                  fill="#FCA326"
                ></path>
                <path
                  class="tanuki-shape left-cheek"
                  d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                  fill="#FC6D26"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="img-holder">
          <img
            src="assets/imgs/madushan-header.png"
            style={{ width: "600px", height: "470px", marginBottom: "15%" }}
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
