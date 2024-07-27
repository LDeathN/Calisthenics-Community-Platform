import { createContext, useState } from "react";


export const AuthContext = createContext({
    userId: '',
    email:'',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        // TODO: Fix this
        localStorage.setItem('accessToken', state.accessToken);
    
        setAuthState(state);
      };

    const constextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={constextData}>
            {props.children}
        </AuthContext.Provider>
    );
}