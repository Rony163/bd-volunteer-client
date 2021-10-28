import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [user, setUser] = useState('');

    const { signInGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
    }

    return (
        <div>
            {user.displayName}
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;