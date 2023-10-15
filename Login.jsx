import { useRef, useState, useEffect } from 'react';
import './login.css'; // Import your CSS file

const Login = () => {
    const inputRef = useRef(); // Rename this variable to inputRef
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {
                success ? (
                    <section>
                        <h1>You are Logged in</h1>
                    </section>
                ) : (
                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offsceen"} aria-live='assertive'>{errMsg}</p>
                        <h1>Sign in</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='username'>username</label>
                            <input
                                type='text'
                                id="username"
                                ref={inputRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            ></input>

                            <label htmlFor='password'>password</label>
                            <input
                                type='password'
                                id="password"
                                ref={inputRef}
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd} 
                                required
                            ></input>
                            <button>Sign In</button>
                            <button>Cancel</button>
                        </form>
                    </section>
                )
            }
        </>
    )
}

export default Login;
