
/* eslint-disable no-undef */

import { initializeApp } from "firebase/app";
import { getFirestore, 
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc,
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYJptosDZac-F7RD4vfZbyDjJgmUxfdIs",
  authDomain: "react-js--mi-proyecto.firebaseapp.com",
  projectId: "react-js--mi-proyecto",
  storageBucket: "react-js--mi-proyecto.appspot.com",
  messagingSenderId: "903588502575",
  appId: "1:903588502575:web:e56761f258eb357799bada",
  measurementId: "G-SE3WEZ91FS"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems(){
    const collectionProductsRef = collection (DB, "productos");
    const documentSnapshot = await getDocs(collectionProductsRef);
    const documentData = documentSnapshot.docs.map ((doc) => {
        return{
           ...doc.data(),
           id: doc.id
        };
    });

    return documentData;
}

export async function getSingleItem(idParams){
    const docRef = doc(DB, "productos", idParams);

    const docSnapshot = await getDoc(docRef);

    return{
        ...docSnapshot.data(),
        id: docSnapshot.id
    };
}

export async function getItemsByCategory(categoryParams){
    const collectionRef = collection(DB, "productos");

    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapshot = await getDocs(queryCat);

    const documentData = documentSnapshot.docs.map ((doc) => {
        return{
           ...doc.data(),
           id: doc.id
        };
    });

    return documentData;
};


export async function createOrder(order){
    const collectionRef = collection (DB, "orders");
    const docOrder = await addDoc(collectionRef, order);
    return docOrder.id;
}