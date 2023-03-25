import { collection, onSnapshot } from 'firebase/firestore'
import React, {createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const CategoriesContext = createContext()
export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function getCategories() {
            const categoriesRef = collection(db, "categories");
            onSnapshot(categoriesRef, (querySnapshot) => {
              const categoriess = querySnapshot.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id,
              }));
              setCategories(categoriess)
            });
          }
        getCategories()
    }, [])
    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    )
}
