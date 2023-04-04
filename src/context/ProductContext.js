import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db, storage } from '~/firebase'
import { toast } from "react-toastify";
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [productFilter, setProductFilter] = useState(products)
    const [cartItem, setCartItem] = useState([])
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
    const searchProduct = (input) => {
        const productFilter = products.filter((product) => {
            return product.data.title.toLowerCase().includes(input.toLowerCase())
        })
        setSearchResult(productFilter)
    }
    // filter product by type
    const filterProduct = (item) => {
        const result = products.filter((product) => {
            return product.data.category_id === item
        })
        setProductFilter(result)
    }
    // add item to cart
    const addToCart = (product) => {
        const productExist = cartItem.find((item) => item.id === product.id)
        if (productExist) {
            setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
        }
        else {
            setCartItem([...cartItem, { ...product, qty: 1 }])
        }
    }
    // decrease item
    const descreaseQty = (product) => {
        const productExist = cartItem.find(item => item.id === product.id)
        if (productExist.qty === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        }
        else {
            setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
        }
    }
    // delete item from cart
    const deleteCart = (product) => {
        setCartItem(cartItem.filter((item) => item.id !== product.id))
    }
    // add to cart with quantity value
    const addToCartQty = (product, quantity) => {
        const productExist = cartItem.find((item) => item.id === product.id)
        if (productExist) {
            setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + quantity } : item)))
        }
        else {
            setCartItem([...cartItem, { ...product, qty: quantity }])
        }
    }
    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, searchProduct, searchResult, filterProduct, productFilter, setProductFilter, addToCartQty, addToCart, deleteCart, descreaseQty, cartItem }}>
            {children}
        </ProductContext.Provider>
    )
}
