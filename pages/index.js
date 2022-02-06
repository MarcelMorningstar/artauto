import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '../components';

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);

      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerStyle = {
    backgroundPositionY: offset * 0.4 + 'px',
  };

  return (
    <div>
      <Navbar />

      <header id="home" style={headerStyle}>
        <div className="logo_content">
            <svg viewBox="26.453 -27.436 147.035 250">
                <g>
                  <circle cx="100" cy="100" r="120" stroke="#EEEEEE" strokeWidth="6" fill="transparent"/>
                  <path d="M63.2 136.9c8.4 8.4 8.4 22.1 0 30.5-2.3 2.3-5.1 4.1-8.2 5.1-.8.3-1.6-.5-1.4-1.3l4.7-16c.1-.5.1-1-.2-1.3-4.6-6.2-12.4-8.5-19.6-5.7-.4.2-.8.5-.9 1L32.9 165c-.2.8-1.3 1-1.9.4-6.6-8.5-6-20.7 1.7-28.5 8.4-8.4 22.1-8.5 30.5 0zm0-73.8c8.4-8.4 8.4-22.1 0-30.5-2.3-2.3-5.1-4.1-8.2-5.1-.8-.3-1.6.5-1.4 1.3l4.7 16c.1.5.1 1-.2 1.3-4.6 6.2-12.4 8.5-19.6 5.7-.4-.2-.8-.5-.9-1L32.9 35c-.2-.8-1.3-1.1-1.9-.4-6.6 8.5-6 20.7 1.7 28.5 8.4 8.4 22.1 8.5 30.5 0zm104 0c7.7-7.7 8.4-20 1.7-28.5-.5-.7-1.6-.5-1.9.4l-4.6 15.9c-.1.5-.5.9-.9 1-7.2 2.8-15 .5-19.6-5.7-.3-.4-.4-.9-.2-1.3l4.7-16c.2-.8-.6-1.6-1.4-1.3-3.1 1.1-5.9 2.9-8.2 5.1-8.4 8.4-8.4 22 0 30.5 8.4 8.4 22.1 8.3 30.4-.1zm-37.8 2.4c1.5 2 3.1 3.5 5.1 5.1l-21.8 21.8 5.1 5.1L138 77.3c3.3-3.3 7.4-5.7 11.8-7-5-.5-9.8-2.6-13.6-6.4-3.8-3.8-5.9-8.7-6.4-13.6-1.3 4.5-3.7 8.5-7 11.8l-20.2 20.2 5.1 5.1 21.7-21.9zm-58.8 69c-1.5-2-3.1-3.5-5.1-5.1l21.8-21.8-5.1-5.1L62 122.7c-3.3 3.3-7.4 5.7-11.8 7 5 .5 9.8 2.6 13.6 6.4 3.8 3.8 5.9 8.7 6.4 13.6 1.3-4.5 3.7-8.5 7-11.8l20.2-20.2-5.1-5.1-21.7 21.9zm96.6 2.4c-8.4-8.4-22-8.4-30.4 0-8.4 8.4-8.4 22.1 0 30.5 2.3 2.3 5.1 4.1 8.2 5.1.8.3 1.6-.5 1.4-1.3l-4.7-16c-.1-.5-.1-1 .2-1.3 4.6-6.2 12.4-8.5 19.6-5.7.4.2.8.5.9 1l4.6 15.9c.2.8 1.3 1 1.9.4 6.7-8.7 6-20.9-1.7-28.6zm-31-.7c-3.8 3.8-5.9 8.7-6.4 13.6-1.3-4.5-3.7-8.5-7-11.8L62.1 77.2c-3.3-3.3-7.4-5.7-11.8-7 5-.5 9.8-2.6 13.6-6.4 3.8-3.8 5.9-8.7 6.4-13.6 1.3 4.5 3.7 8.5 7 11.8l60.7 60.8c3.3 3.3 7.4 5.7 11.8 7-5 .5-9.8 2.6-13.6 6.4zm-1.8-6.8L70.6 65.5c-1.5 2-3.1 3.5-5.1 5.1l63.8 63.9c1.6-2 3.2-3.6 5.1-5.1z M55 97 L0 97 L0 103 L55 103 L55 103 Z M145 97 L200 97 L200 103 L145 103 L145 97 Z"></path>
                </g>
            </svg>
            <h1>ARTAUTO</h1>
            {/* <h2>Lorem ipsum dolor</h2> */}
        </div>

        <div className="top_line">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </header>

      <section className='content'>
        <div className="bottom_line">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className='box'>
          <div id="services" className="info">
            <div className="title">
              <h2>PAKALPOJUMI</h2>
            </div>
            <div className='services'>
              <div>
                <svg viewBox="-459 301 160 160">
                  <g>
                    <path d="M-393.6 414.3H-416c-4.6 0-8.3-4.3-8.3-9.5l-.3-36.1c0-5.3 3.6-9.5 8.1-9.5h49.4c2.8 0 5.4 1.7 6.9 4.5h.3c4.5 0 8.1 2.7 8.1 6.1v10.6c0 3.3-3.3 6-7.7 6.1-1.2 3.6-4.2 6.2-7.6 6.2h-18.3v12.1c.1 5.3-3.7 9.5-8.2 9.5zm-22.9-51.8c-2.6 0-4.8 2.8-4.8 6.2l.3 36.1c0 3.4 2.2 6.2 5 6.2h22.3c2.7 0 5-2.8 5-6.2V391c0-.9.7-1.7 1.7-1.7h20c2.2 0 4.1-2 4.6-4.8.1-.8.8-1.4 1.6-1.4h.9c2.8 0 4.7-1.5 4.7-2.8v-10.6c0-1.3-1.9-2.8-4.7-2.8h-1.4c-.7 0-1.3-.4-1.6-1.1-.8-2.1-2.5-3.4-4.3-3.4h-49.3z"></path>
                    <path d="M-398.3 405.6h-12.9c-3 0-5.5-2.2-5.5-4.9v-7.4c0-2.7 2.5-4.9 5.5-4.9h12.9c3 0 5.5 2.2 5.5 4.9v7.4c0 2.7-2.5 4.9-5.5 4.9zm-13-13.8c-1.2 0-2.2.7-2.2 1.6v7.4c0 .8 1 1.6 2.2 1.6h12.9c1.2 0 2.2-.7 2.2-1.6v-7.4c0-.8-1-1.6-2.2-1.6h-12.9z"></path>
                    <path d="M-398.7 370.8h-12.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h12.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-335.1 400c-.9 0-1.7-.7-1.7-1.7v-49c0-.9.7-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7v49c0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-341.1 364.6a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                    <path d="M-347.2 358.2a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                    <path d="M-336.1 377.4h-15.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h15.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-349.1 392c-.4 0-.8-.1-1.1-.4-.7-.6-.8-1.7-.2-2.4l7-8.3c.6-.7 1.7-.8 2.4-.2.7.6.8 1.7.2 2.4l-7 8.3c-.3.4-.8.6-1.3.6z"></path>
                    <path d="M-379 461c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0-156.6c-42.2 0-76.6 34.3-76.6 76.6s34.3 76.6 76.6 76.6c42.2 0 76.6-34.3 76.6-76.6s-34.4-76.6-76.6-76.6z"></path>
                  </g>
                </svg>
                <h2>REMONTS</h2>
                <p>General Repairs, Electrical Repairs, Specialist Repairs & Computer Diagonostics</p>
                <Link href='/repair'><a>View</a></Link>
              </div>
              <div>
                <svg viewBox="0 0 512 512">
                  <circle cx="256" cy="256" r="246" fillOpacity="0" stroke="var(--color_dark)" strokeOpacity="1" strokeWidth="10"></circle>
                  <g>
                    <path d="M80.08 82.66L60.24 102.5 192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8 1.18 5.8-.43 10.8-3.85 14.9-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6 6.58-7.9 9.97-18.9 7.65-30.1-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48 29.9 0 55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47zm288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47z" transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
                  </g>
                </svg>
                <h2>EVAKUATORS</h2>
                <p>General Repairs, Electrical Repairs, Specialist Repairs & Computer Diagonostics</p>
                <Link href='/tow-truck'><a>View</a></Link>
              </div>
              <div>
                <svg viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="246" fillOpacity="0" stroke="var(--color_dark)" strokeOpacity="1" strokeWidth="10"></circle>
                  <g>
                    <path d="M256.18 21c-23.242 0-46.577 3.01-63.186 8.54-8.304 2.763-14.868 6.196-18.808 9.558-3.94 3.36-5.167 5.956-5.186 8.96L168.943 57H41v14h430V57H342.967l.033-9.033c.01-3.002-1.17-5.55-5.057-8.895-3.887-3.344-10.407-6.773-18.677-9.535C302.724 24.014 279.42 21 256.18 21zM38.277 89l-10.443 94h80.9l20.243-86.36L122.81 183h81.07l17.114-86.68-3.096 86.68h75.75l-4.634-86.518L307.694 183h81.497l-6.167-86.36L403.266 183h80.9l-10.443-94H38.277zM25.834 201l-.51 4.588C39.822 226.445 52.968 235 64 235c11.32 0 24.852-8.89 39.8-30.96l.714-3.04h-78.68zm95.687 0l-.32 4.498C135.753 226.495 148.935 235 160 235c11.293 0 24.788-8.85 39.693-30.803l.63-3.197h-78.802zm95.736 0l-.156 4.352C231.69 226.455 244.908 235 256 235c11.08 0 24.28-8.525 38.85-29.576l-.237-4.424h-77.357zm94.324 0l.674 3.12c15 22.192 28.503 31.044 39.773 31.013 11.03-.03 24.212-8.62 38.772-29.637l-.32-4.496h-78.9zm95.906 0l.713 3.04C423.147 226.11 436.68 235 448 235c11.032 0 24.178-8.555 38.676-29.412l-.51-4.588h-78.68zM112 223.31C97.313 242.11 81.492 253 64 253c-13.972 0-26.884-6.906-39-19.264V487h318V279h114v208h30V233.736C474.884 246.094 461.972 253 448 253c-17.49 0-33.31-10.888-47.996-29.684-14.664 18.808-30.432 29.77-47.926 29.817-17.508.048-33.352-10.87-48.092-29.807C289.303 242.116 273.486 253 256 253c-17.492 0-33.313-10.89-48-29.69-14.687 18.8-30.508 29.69-48 29.69s-33.313-10.89-48-29.69zM55 279h258v178H55V279zm18 18v142h222V297H73zm288 0v71.064l78 .573V297h-78zM88 312h128c-108.235 8-116.31 24-128 113.11V312zm273 74.066v13.998l78 .573v-14.002l-78-.57zm0 32V487h78v-68.365l-78-.57z" transform="translate(102.4, 102.4) scale(0.6, 0.6) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
                  </g>
                </svg>
                <h2>VEIKALS</h2>
                <p>General Repairs, Electrical Repairs, Specialist Repairs & Computer Diagonostics</p>
                <Link href='/shop'><a>View</a></Link>
              </div>
            </div>
          </div>
          
          <div id='about-us' className="info">
            <div className="title">
              <h2>PAR MUMS</h2>
              <p>PILNA SERVISA AUTOCENTRS PARŪPĒSIES PAR JŪSU MAŠĪNU</p>
            </div>
            <div className='about-us'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempore, qui mollitia impedit dolorem veniam eveniet sequi! Qui possimus earum necessitatibus eius beatae non molestias, nisi repudiandae blanditiis quas magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus neque sint aperiam rerum hic maxime quisquam. Aliquam veniam, doloremque nam autem est, odio porro iusto quis numquam, accusamus deserunt reiciendis?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempore, qui mollitia impedit dolorem veniam eveniet sequi!</p>
            </div>
          </div>
          
          <div id="gallery" className="info">
            <div className="title">
              <h2>GALERIJA</h2>
            </div>
            <div className='gallery'>
              <img src="/img/owner.jpg" />
              <img src="/img/device2.jpg" />
              <img src="/img/serviss.jpg" />
              <img src="/img/device1.jpg" />
              <img src="/img/device3.jpg" />
              <img src="/img/autograph.png" />
            </div>
          </div>
          
          <div id="contact-us" className="info">
            <div className="title">
              <h2>KONTAKTI</h2>
            </div>
            <div className="contact-us">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.8733844640251!2d27.325494200357056!3d56.51246628801215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDMwJzQ0LjgiTiAyN8KwMTknMzMuMyJF!5e1!3m2!1sen!2slv!4v1633293831028!5m2!1sen!2slv" allowFullScreen="" loading="lazy"></iframe>
                  
              <div>
                <div>
                  <h3>PHONE</h3>
                  <span className='phone'>+371 26 118 112</span>
                </div>
                
                <div>
                  <h3>LOCATION</h3>
                  <span>Rīgas iela 16 Rēzekne, Latvia</span>
                </div>
                
                <div>
                  <h3>HOURS</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Mon:</td>
                        <td>09:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td>Tue:</td>
                        <td>09:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td>Wed:</td>
                        <td>09:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td>Thu:</td>
                        <td>09:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td>Fri:</td>
                        <td>09:00 - 16:00</td>
                      </tr>
                      <tr>
                        <td>Sat:</td>
                        <td>Closed</td>
                      </tr>
                      <tr>
                        <td>Sun:</td>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
