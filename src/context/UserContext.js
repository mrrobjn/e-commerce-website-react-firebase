import { collection, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState()
    useEffect(() => {
        async function getUsers() {
            const userRef = collection(db, "users");
            onSnapshot(userRef, (querySnapshot) => {
                const userss = querySnapshot.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setUsers(userss)
            });
        }
        getUsers()
    }, [])
    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    )
}
