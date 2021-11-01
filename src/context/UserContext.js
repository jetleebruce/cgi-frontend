import React, {createContext, usestate} from 'react'
import { useState } from 'react/cjs/react.development'

export const UserConext = createContext(null)

export default ({children}) => {
    const [user, setUser] = useState({jwt: 'assssss'})
    return (
        <UserConext.Provider value={{user, setUser}}>
            {children}
        </UserConext.Provider>
    )
}