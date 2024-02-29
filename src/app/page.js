"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, doc, updateDoc, getDoc, QuerySnapshot, query, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function Home() {
  const [items, setItems] = useState([
    // { id: 1, name: "Coffee", price: 4.95 },
    // { id: 2, name: "Movie", price: 7.2 },
    // { id: 3, name: "Candy", price: 2.2 },
    // { id: 4, name: "Coke", price: 3.2 },
  ]);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [itemForUpdate, setItemForUpdate] = useState("");

  const [updateItem, setUpdateItem] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");

  // Add items

  const addItems = async (e) => {
    e.preventDefault();
    if (newItem && newPrice) {
      // console.log(newItem, newPrice);
      // setItems([...items, { id: 5, name: newItem, price: newPrice }]);
      await addDoc(collection(db, "items"), {
        name: newItem.trim(),
        price: newPrice,
      });
      setNewItem("");
      setNewPrice("");
    }
  };

  // Read Items

  useEffect(() => {
    // setItems;
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr = [];
      QuerySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce((sum, item) => sum + parseFloat(item.price), 0);
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Delete Items

  async function deleteItem(id) {
    await deleteDoc(doc(db, "items", id));
  }

  // Edit Items

  // Handle edit button click
  function editItem(id) {
    items.forEach((item) => {
      if (item.id === id) {
        setUpdateItem(item.name);
        setUpdatePrice(item.price);
        setItemForUpdate(item.id);
      }
    });
  }

  // Hangle update button click

  async function updateTheItem(e) {
    e.preventDefault();
    const itemRef = doc(db, "items", itemForUpdate);

    // Update the data in the document
    try {
      await updateDoc(itemRef, {
        name: updateItem,
        price: updatePrice,
      });
      // console.log("Document successfully updated!");
      setItemForUpdate("");
      setUpdateItem("");
      setUpdatePrice("");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  ">
        <h1 className="text-4xl p-4 text-center">Expense Tracker</h1>
        <div className="bg-slate-100 p-4 rounded-lg">
          <form onSubmit={addItems} className="grid grid-cols-6 items-center text-black">
            <input value={newItem} onChange={(e) => setNewItem(e.target.value)} className="col-span-3 p-3 rounded-l border" type="text" placeholder="Enter Item" />
            <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="col-span-2 p-3 border" type="number" placeholder="Enter $" />
            <button className="text-white bg-slate-950 hover:bg-slate-800 px-3 py-2 text-xl rounded-r" type="submit">
              +
            </button>
          </form>
          <ul>
            {items.map((i) => {
              return (
                <li key={i.id} className="my-4 rounded w-full flex bg-slate-900 text-white justify-between">
                  <div className="p-4 w-full flex justify-between">
                    <span className="capitalize">{i.name}</span>
                    <span>{i.price}</span>
                  </div>
                  <button onClick={() => editItem(i.id)} className="ml-8 p-4 border-l-2 border-l-amber-900   hover:bg-slate-700  ">
                    Edit
                  </button>
                  <button onClick={() => deleteItem(i.id)} className="ml-8 p-4 border-l-2 border-l-amber-900 hover:bg-slate-700 w-16">
                    X
                  </button>
                </li>
              );
            })}
          </ul>
          {itemForUpdate && (
            <form onSubmit={updateTheItem} className="grid mb-5 grid-cols-6 items-center text-black">
              <input value={updateItem} onChange={(e) => setUpdateItem(e.target.value)} className="col-span-2 p-3 rounded-l border" type="text" placeholder="Enter Item" />
              <input value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} className="col-span-2 p-3 border" type="number" placeholder="Enter $" />
              <button className="text-white bg-slate-950 hover:bg-slate-800 px-3 py-2 text-xl rounded-r" type="submit">
                Update
              </button>
              <button onClick={() => setItemForUpdate("")} className="text-white bg-slate-950 hover:bg-slate-800 px-3 py-2 text-xl rounded-r" type="submit">
                Cancel
              </button>
            </form>
          )}
          {items.length > 0 && (
            <div className="flex justify-between   bg-slate-500 text-white rounded p-4">
              <span>Total</span> <span>${total}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
