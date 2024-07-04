import { BrowserRouter,Link, Route, Routes } from "react-router-dom";

export function RoutingDemo() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <h3>Totorial Home</h3>
                <ol>
                    <li> <Link to="html">HTML</Link> </li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="js">Javascript</Link></li>
                </ol>
                <hr size="4" noshade />
                <Routes>
                    <Route
                        path="html"
                        element={
                            <div>
                                <h2>Html</h2>
                                <p>it is markup language</p>
                            </div>
                        }
                    />
                    <Route
                        path="css"
                        element={
                            <div>
                                <h2>CSS</h2>
                                <p>it is Style language</p>
                            </div>
                        }
                    />
                    <Route
                        path="Js"
                        element={
                            <div>
                                <h2>Javascript</h2>
                                <p>it is Dom language</p>
                            </div>
                        }
                    />
                    <Route path="/" element={
                        <div>
                            <h2>Welcome to Tutorial form</h2>
                        </div>
                    }


                    />
                    <Route path="*" element={
                        <div>
                            <h2>Not found</h2>
                            <p>Tutorial you requested not found</p>
                        </div>
                    }


                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
