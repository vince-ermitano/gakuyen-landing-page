import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="landing-page-content">
                <section className="two-column">
                    <div className="left-column">
                        <div className="main-logo">
                            <div className="img-container logo">
                                <img
                                    src="/theodyssey_366x100.png"
                                    alt="gakuyen"
                                />
                            </div>
                            <div className="img-container sub-logo">
                                <img
                                    src="/onlineeducationportal.png"
                                    alt="gakuyen"
                                />
                            </div>
                        </div>
                        <div className="content-headings">
                            <span className="yellow-background">
                                Creative Masterclass
                            </span>
                            <span className="no-mobile">.</span>
                            <span className="yellow-background">
                                Editing Assets
                            </span>
                            <span className="no-mobile">.</span>
                            <span className="yellow-background">
                                Freelance Tools
                            </span>
                        </div>
                        <div className="launching-w-form">
                            <div id="launching-text">
                                <span>Launching imminently...</span>
                                <span>SIGN UP to be the first to know :)</span>
                            </div>
                            <form>
                                <div className="text-inputs">
                                    <input
                                        type="text"
                                        placeholder="Enter Name Here*"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Enter Email Here..."
                                    />
                                </div>
                                <div className="bottom-form-section">
                                    <div className="accept-terms">
                                        <input type="checkbox" />
                                        <label>
                                            I accept the terms &<br />{" "}
                                            conditions
                                        </label>
                                    </div>
                                    <button type="submit">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="img-container">
                            <img src="/macfinder.png" alt="gakuyen" />
                        </div>
                    </div>
                    <div className="img-container" id="teachings-overtime">
                        <img src="/teachingsovertime.png" alt="gakuyen" />
                    </div>

                    <div className="teachings-overtime-text mobile">
                        <pre>(Teachings           Over          Time)          (Instructional       Interlude)           (Creative           Refinement)</pre>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default App;
