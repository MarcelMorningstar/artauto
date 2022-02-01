function Navbar() {
    return (
        <nav id="nav">
            <svg id="menuBtn" viewBox="0 0 24 24" width="36px" height="36px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>

            <div className="home">
                <h1><a className="link" href="#home">ARTAUTO</a></h1>
            </div>

            <div className="navigation one">
                <span><a className="link" href="#repair">REMONTS</a></span>
                <span><a className="link" href="#shop">VEIKALS</a></span>
                <span><a className="link" href="#parts">AUTODAĻAS</a></span>
            </div>
                    
            <div className="navigation two">
                <span><a className="link" href="#tow-truck">EVAKUĀTORS</a></span>
                <span><a className="link" href="#about-us">PAR MUMS</a></span>
                <span><a className="link" href="#contact">KONTAKTI</a></span>
            </div>
        </nav>
    );
}

export default Navbar;
