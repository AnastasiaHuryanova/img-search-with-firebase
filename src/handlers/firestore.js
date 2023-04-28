import { serverTimestamp, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "../lib/firebase.config";

const Firestore = {
  writeDoc: (...args) => {
    const [inputs, collection_name] = args;
    return new Promise(async (resolve) => {
      const index = uuidv4();
      try {
        const docRef = doc(db, "stocks", `${index}`);
        await setDoc(docRef, {...inputs, createdAt: serverTimestamp()});
        resolve('new doc successfully inserted')
      } catch (e) {}
    });
  },
};
