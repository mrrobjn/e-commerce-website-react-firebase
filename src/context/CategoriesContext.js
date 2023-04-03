import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React, {createContext, useEffect, useState } from 'react'
import { db, storage } from '~/firebase'
import { toast } from "react-toastify";

export const CategoriesContext = createContext()
export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const errorToast = (text) => toast.error(`${text}`);
    const successToast = (text) => toast.success(`${text}`);
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
    const deleteCategories = async (id, title) => {
      await deleteDoc(doc(db, "categories", id))
          .then(() => {
              successToast("Xóa thành công");
          })
          .catch((err) => {
              errorToast(err.message);
          });
      const imgRef = ref(storage, `product images/${title}.png`);
      deleteObject(imgRef).then(() => {
      }).catch((error) => {
          errorToast(error.message);
      });
  };
    return (
        <CategoriesContext.Provider value={{categories,deleteCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}
