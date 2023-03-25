import { collection, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '~/firebase'

export const SlideContext = createContext()
export const SlideProvider = ({ children }) => {
    const [slides, setSlides] = useState([])
    useEffect(() => {
        async function getSliders() {
            const sliderRef = collection(db, "sliders");
            onSnapshot(sliderRef, (querySnapshot) => {
                const sliderss = querySnapshot.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setSlides(sliderss)
            });
        }
        getSliders()
    }, [])
    return (
        <SlideContext.Provider value={slides}>
            {children}
        </SlideContext.Provider>
    )
}
