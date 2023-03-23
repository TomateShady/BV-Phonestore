

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
  apiKey: "AIzaSyBJqcKuyMpPixmLF7CtYaiOaqMiQ1TvIlg",
  authDomain: "bv-phonestore-b8028.firebaseapp.com",
  projectId: "bv-phonestore-b8028",
  storageBucket: "bv-phonestore-b8028.appspot.com",
  messagingSenderId: "907209138876",
  appId: "1:907209138876:web:7ee48c4b1acfbdd353e6b9",
  measurementId: "G-24L4KKZLX4"
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