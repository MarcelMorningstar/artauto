import { Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header id="home">
        <div className="logo_content">
            <svg viewBox="26.453 -27.436 147.035 250">
                <g>
                    <circle cx="100" cy="100" r="120" stroke="#EEEEEE" strokeWidth="6" fill="transparent"/>
                    <path d="M63.2 136.9c8.4 8.4 8.4 22.1 0 30.5-2.3 2.3-5.1 4.1-8.2 5.1-.8.3-1.6-.5-1.4-1.3l4.7-16c.1-.5.1-1-.2-1.3-4.6-6.2-12.4-8.5-19.6-5.7-.4.2-.8.5-.9 1L32.9 165c-.2.8-1.3 1-1.9.4-6.6-8.5-6-20.7 1.7-28.5 8.4-8.4 22.1-8.5 30.5 0zm0-73.8c8.4-8.4 8.4-22.1 0-30.5-2.3-2.3-5.1-4.1-8.2-5.1-.8-.3-1.6.5-1.4 1.3l4.7 16c.1.5.1 1-.2 1.3-4.6 6.2-12.4 8.5-19.6 5.7-.4-.2-.8-.5-.9-1L32.9 35c-.2-.8-1.3-1.1-1.9-.4-6.6 8.5-6 20.7 1.7 28.5 8.4 8.4 22.1 8.5 30.5 0zm104 0c7.7-7.7 8.4-20 1.7-28.5-.5-.7-1.6-.5-1.9.4l-4.6 15.9c-.1.5-.5.9-.9 1-7.2 2.8-15 .5-19.6-5.7-.3-.4-.4-.9-.2-1.3l4.7-16c.2-.8-.6-1.6-1.4-1.3-3.1 1.1-5.9 2.9-8.2 5.1-8.4 8.4-8.4 22 0 30.5 8.4 8.4 22.1 8.3 30.4-.1zm-37.8 2.4c1.5 2 3.1 3.5 5.1 5.1l-21.8 21.8 5.1 5.1L138 77.3c3.3-3.3 7.4-5.7 11.8-7-5-.5-9.8-2.6-13.6-6.4-3.8-3.8-5.9-8.7-6.4-13.6-1.3 4.5-3.7 8.5-7 11.8l-20.2 20.2 5.1 5.1 21.7-21.9zm-58.8 69c-1.5-2-3.1-3.5-5.1-5.1l21.8-21.8-5.1-5.1L62 122.7c-3.3 3.3-7.4 5.7-11.8 7 5 .5 9.8 2.6 13.6 6.4 3.8 3.8 5.9 8.7 6.4 13.6 1.3-4.5 3.7-8.5 7-11.8l20.2-20.2-5.1-5.1-21.7 21.9zm96.6 2.4c-8.4-8.4-22-8.4-30.4 0-8.4 8.4-8.4 22.1 0 30.5 2.3 2.3 5.1 4.1 8.2 5.1.8.3 1.6-.5 1.4-1.3l-4.7-16c-.1-.5-.1-1 .2-1.3 4.6-6.2 12.4-8.5 19.6-5.7.4.2.8.5.9 1l4.6 15.9c.2.8 1.3 1 1.9.4 6.7-8.7 6-20.9-1.7-28.6zm-31-.7c-3.8 3.8-5.9 8.7-6.4 13.6-1.3-4.5-3.7-8.5-7-11.8L62.1 77.2c-3.3-3.3-7.4-5.7-11.8-7 5-.5 9.8-2.6 13.6-6.4 3.8-3.8 5.9-8.7 6.4-13.6 1.3 4.5 3.7 8.5 7 11.8l60.7 60.8c3.3 3.3 7.4 5.7 11.8 7-5 .5-9.8 2.6-13.6 6.4zm-1.8-6.8L70.6 65.5c-1.5 2-3.1 3.5-5.1 5.1l63.8 63.9c1.6-2 3.2-3.6 5.1-5.1z M55 97 L0 97 L0 103 L55 103 L55 103 Z M145 97 L200 97 L200 103 L145 103 L145 97 Z"></path>
                </g>
            </svg>
            <h1>Lorem ipsum</h1>
            <h2>Lorem ipsum dolor</h2>
        </div>

        <div className="top_line">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
      </header>
    </div>
  );
}
