import { collection, onSnapshot } from 'firebase/firestore'
import React, {createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const BrandsContext = createContext()
export const BrandsProvider = ({children}) => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        async function getBrands() {
            const brandRef = collection(db, "brands");
            onSnapshot(brandRef, (querySnapshot) => {
              const brandss = querySnapshot.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id,
              }));
              setBrands(brandss);
            });
          }
        getBrands()
    }, [])
    return (
        <BrandsContext.Provider value={brands}>
            {children}
        </BrandsContext.Provider>
    )
}
