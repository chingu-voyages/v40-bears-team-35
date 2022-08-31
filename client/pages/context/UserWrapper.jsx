const { createContext, useState, useContext } = require("react");

const UserContext = createContext()

export default function UserWrapper({children}) {
    const [user, setUser] = useState({_id: "", username: ""})

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}