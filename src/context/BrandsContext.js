import { addDoc, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db, storage } from '~/firebase'
import { toast } from "react-toastify";
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const BrandsContext = createContext()
export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([])
  const errorToast = (text) => toast.error(`${text}`);
  const successToast = (text) => toast.success(`${text}`);
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
  const addBrand = async (image, name) => {
    // upload brand logo
    const imgRef = ref(storage, `brands image/${name}.png`);
    await uploadBytes(imgRef, image);
    const photoURL = await getDownloadURL(imgRef).catch((err) => {
      errorToast(err.message);
    });
    // add product info
    await addDoc(collection(db, "brands"), {
      image: photoURL,
      name: name
    })
      .then(() => {
        successToast("Đã thêm");
      })
      // success notification
      .catch((err) => errorToast(err.message));
  }
  const deleteBrand = async (id,name) => {
    await deleteDoc(doc(db, "brands", id))
      .then(() => {
        successToast("Xóa thành công");
      })
      .catch((err) => {
        errorToast(err.message);
      });
      const imgRef = ref(storage, `brands image/${name}.png`);
        deleteObject(imgRef).then(() => {
        }).catch((error) => {
            errorToast(error.message);
        });
  };
  return (
    <BrandsContext.Provider value={{ brands, addBrand, deleteBrand }}>
      {children}
    </BrandsContext.Provider>
  )
}
