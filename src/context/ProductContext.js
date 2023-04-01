import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db, storage } from '~/firebase'
import { toast } from "react-toastify";
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const errorToast = (text) => toast.error(`${text}`);
    const successToast = (text) => toast.success(`${text}`);
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
    const addProduct = async (image, title, price, discount, categoryId, brandId, description) => {
        // upload product image
        const imgRef = ref(storage, `product images/${title}.png`);
        await uploadBytes(imgRef, image);
        const photoURL = await getDownloadURL(imgRef).catch((err) => {
            errorToast(err.message);
        });
        // add product info
        await addDoc(collection(db, "products"), {
            image: photoURL,
            title: title,
            price: +price,
            discount: +discount,
            category_id: categoryId,
            brand_id: brandId,
            description: description,
        })
            .then(() => {
                successToast("Đã thêm mặt hàng");
            })
            // success notification
            .catch((err) => errorToast(err.message));
    }
    const deleteProduct = async (id, title) => {
        await deleteDoc(doc(db, "products", id))
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
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )
}
