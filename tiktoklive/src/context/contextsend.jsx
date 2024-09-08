import { createContext, useContext, useState } from 'react'

const UserContext = createContext()


export function AuthProvider({children}){
    const [username,setUsername] = useState("")
    return <>
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    </>
}

export const userContext = () => useContext(UserContext)