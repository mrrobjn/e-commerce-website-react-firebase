import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'
import { toast } from "react-toastify";

export const CategoriesContext = createContext()
export const CategoriesProvider = ({ children }) => {
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
    const addProduct = async (name) => {
        await addDoc(collection(db, "categories"), {
            name: name,
        })
            .then(() => {
                successToast("Đã thêm danh mục");
            })
            .catch((err) => errorToast(err.message));
    }
    const deleteCategories = async (id) => {
        await deleteDoc(doc(db, "categories", id))
            .then(() => {
                successToast("Xóa thành công");
            })
            .catch((err) => {
                errorToast(err.message);
            });
    };
    return (
        <CategoriesContext.Provider value={{ categories, deleteCategories,addProduct }}>
            {children}
        </CategoriesContext.Provider>
    )
}
