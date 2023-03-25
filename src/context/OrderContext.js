import { collection, onSnapshot } from 'firebase/firestore'
import React, {createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const OrderContext = createContext()
export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        async function getOrders() {
            const orderRef = collection(db, "orders");
            onSnapshot(orderRef, (querySnapshot) => {
              const orderss = querySnapshot.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id,
              }));
              setOrders(orderss)
            });
          }
        getOrders()
    }, [])
    return (
        <OrderContext.Provider value={orders}>
            {children}
        </OrderContext.Provider>
    )
}
