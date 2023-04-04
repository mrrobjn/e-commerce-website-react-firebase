import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { toast } from "react-toastify";

export const OrderContext = createContext()
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const errorToast = (text) => toast.error(`${text}`);
  const successToast = (text) => toast.success(`${text}`);
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
  const updateStatus = async (id, state) => {
    const statusRef = doc(db, "orders", id);
    await updateDoc(statusRef, {
      status: state
    }).then(() => {
      successToast("Cập nhật thành công")
    })
      .catch((err) => {
        errorToast(err.message)
      })
  }
  return (
    <OrderContext.Provider value={{ orders, updateStatus }}>
      {children}
    </OrderContext.Provider>
  )
}
