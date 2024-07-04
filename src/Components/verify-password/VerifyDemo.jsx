import { useState } from "react";

export function VerifyPassword() {
    const [users] = useState([
        { "Username": "pramod" },
        { "Username": "rutika" },
        { "Username": "mahesh12" }
    ]);
    const [userNameError, setUsernameError] = useState('');
    const [userStyle, setUserStyle] = useState('');
    const [passwordError, setPasswordError] = useState({ 'display': 'none' });

    function VerifyUsername(e) {
        const input = e.target.value;
        let userExists = false;

        for (const user of users) {
            if (user.Username === input) {
                userExists = true;
                break;
            }
        }

        if (userExists) {
            setUsernameError('User already taken');
            setUserStyle('text-danger');
        } else {
            setUsernameError('User name available');
            setUserStyle('text-success');
        }
    }

    function VerifyPasswordCapital(e) {
        if (e.getModifierState('CapsLock')) {
            setPasswordError({ 'display': 'block' });
        } else {
            setPasswordError({ 'display': 'none' });
        }
    }

    return (
        <div className="container-fluid">
            <h4>Register user</h4>
            <dl>
                <dt>Name :</dt>
                <dd>
                    <input type="text" onKeyUp={VerifyUsername} />
                </dd>
                <dd className={userStyle}>{userNameError}</dd>
                <dt>Password :</dt>
                <dd>
                    <input type="password" onKeyPress={VerifyPasswordCapital} />
                </dd>
                <dd style={passwordError}>
                    <span className="bi bi-exclamation-triangle"></span> Warning caps on
                </dd>
            </dl>
        </div>
    );
}
