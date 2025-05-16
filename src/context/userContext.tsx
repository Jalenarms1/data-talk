import { createContext, useContext, useState } from "react";

type User = {
    id: string,
    email: string,
    name: string
}

type UserContextParams = {
    currUser: User | null
}

const UserContext = createContext({} as UserContextParams)

export const UserContextProvider = ({children}: {children: React.ReactNode}) => {
    const [currUser, setCurrUser] = useState<User | null>(null)

    return <UserContext.Provider value={{currUser}}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => {
    return useContext(UserContext)
}