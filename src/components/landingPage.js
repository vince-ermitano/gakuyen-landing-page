import React from "react";
import './landingPage.css'
import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


export const LandingPage = (props) => {

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [acceptTerms, setAcceptTerms] = React.useState(false);
    const emailListCollectionRef = collection(db, "emailList");

    const { isDialogOpen, handleOpenDialog } = props;

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!acceptTerms) {
            alert("You must accept the terms and conditions");
            return;
        }


        try {

            await addDoc(emailListCollectionRef, {
                name: name,
                email: email,
            });
            handleOpenDialog();
        } catch(err) {
            console.error(err);
        }



        setEmail("");
        setName("");
        setAcceptTerms(false);
    };

    return (
        <div className="landing-page-content">
            { isDialogOpen && (
                    <dialog open>
                        <h1>thank you!</h1>
                        <p>we'll reach out to you soon!   </p>
                        <div className="img-container">
                            <img src="/theodyssey_366x100.png" alt="gakuyen" />
                        </div>
                    </dialog>
                ) }
                {/* <dialog open>
                        <h1>thank you!</h1>
                        <p>we'll reach out to you soon!   </p>
                        <div className="img-container">
                            <img src="/theodyssey_366x100.png" alt="gakuyen" />
                        </div>
                </dialog> */}
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
                            <form onSubmit={handleSubmit}>
                                <div className="text-inputs">
                                    <input
                                        type="text"
                                        placeholder="Enter Name Here*"
                                        autoFocus
                                        required
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <input
                                        type="email"
                                        placeholder="Enter Email Here..."
                                        value={email}
                                        required
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="bottom-form-section">
                                    <div className="accept-terms">
                                        <input type="checkbox" 
                                        checked={acceptTerms}
                                        onChange={(e) => setAcceptTerms(e.target.checked)}
                                        />
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
    )
}