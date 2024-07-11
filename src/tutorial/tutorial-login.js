
import { Formik, useFormik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function TutorialLogin() {

    const [cookie,setCookie,removeCookie]=useCookies();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserId: "",
            Password: ""
        }
        , onSubmit: (values) => {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:5000/customer',
            })
                .then((response) => {
                    for (var user of response.data) {
                        if (user.UserId === values.UserId && user.Password === values.Password) {
                            setCookie("UserId",values.UserId);
                            navigate("/vedios");
                            break;
                        }
                        else {
                            navigate("/invalid")
                        }
                    }
                });
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>User login</h2>
                <dl>
                    <dt>User id</dt>
                    <dd>
                        <input type="text" name="UserId" onChange={formik.handleChange}></input>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" name="Password" onChange={formik.handleChange}></input>
                    </dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}