import { collection, onSnapshot } from 'firebase/firestore'
import React, {createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            const productRef = collection(db, "products");
            onSnapshot(productRef, (querySnapshot) => {
                const productss = querySnapshot.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setProducts(productss)
            });
        }
        getProducts()
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}
