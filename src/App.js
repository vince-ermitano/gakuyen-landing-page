import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="landing-page-content">
                <section className="two-column">
                    <div className="left-column">
                        <div className="img-container">
                            <img src="/theodyssey_366x100.png" alt="gakuyen" />
                        </div>
                        <div className="img-container">
                            <img
                                src="/onlineeducationportal.png"
                                alt="gakuyen"
                            />
                        </div>
                        <div className="content-headings">
                            <span>Creative Masterclass</span>
                            <span>.</span>
                            <span>Editing Assets</span>
                            <span>.</span>
                            <span>Freelance Tools</span>
                        </div>
                        <span>Launching imminently...</span>
                        <span>SIGN UP to be the first to know :)</span>
                        <form>
                            <input type="text" placeholder="Enter Name Here*" />
                            <input
                                type="email"
                                placeholder="Enter Email Here..."
                            />
                            <div className="accept-terms">
                                <input type="checkbox" />
                                <label>I accept the terms and conditions</label>
                            </div>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                    <div className="right-column">
                        <div className="img-container">
                            <img src="/macfinder.png" alt="gakuyen" />
                        </div>
                    </div>
                </section>
                <div className="img-container" id="teachings-overtime">
                    <img src="/teachingsovertime.png" alt="gakuyen" />
                </div>
            </div>
        </div>
    );
}

export default App;
