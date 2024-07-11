import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { TutorialLogin } from "./tutorial-login";
import { TutorialRegister } from "./tutorial-register";
import { TutorialVedios } from "./tutorial-vedios";
import { TutorialError } from "./tutorial-error";

export function TutorialIndex() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h1>React vedio tutorial</h1>
                </header>
                <section className="mt-2 row">
                    <nav className="col-3">
                        <div>
                            <Link to="home">Home</Link>
                        </div>
                        <div>
                            <Link to="login">Login</Link>
                        </div>
                        <div>
                            <Link to="register">Register</Link>
                        </div>
                        <div>
                            <Link to="vedios">Vedios</Link>
                        </div>
                    </nav>
                    <main className="col-9">
                      <Routes>
                        <Route path="/" element={<TutorialHome/>}/>
                        <Route path="home" element={<TutorialHome/>}/>
                        <Route path="login" element={<TutorialLogin/>}/>
                        <Route path="register" element={<TutorialRegister/>}/>
                        <Route path="vedios" element={<TutorialVedios/>}/>
                        <Route path="invalid" element={<TutorialError/>}/>
                      </Routes>

                    </main>
                </section>
            </BrowserRouter>
        </div>
    );
}
