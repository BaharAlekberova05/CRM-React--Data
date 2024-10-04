import React from 'react';
import "./App.css";
import { useEffect, useState } from "react";
import ContactsMainTest from "./Components/ContactsMain";
import Header from "./Components/Header";
import UploadedFile from "./Components/Popups/UploadedFile";
import NoContactPage from "./Components/NoContactPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);

  //  onSubmit funksiyası yalnız form məlumatlarını qəbul edir
  async function onSubmit(data) {
    console.log(data);
    // POST METHOD
    // try {
    //   const response = await fetch(`your_api_endpoint_here`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",

    //     },
    //     body: JSON.stringify(data), // Sending the data in the body
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     setContacts((contacts) => [...contacts, result]); // Add the new contact only after success
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    setContacts((contacts) => [...contacts, data]);
  }

  // Get method
  // async function fetchContacts() {
  //   try {
  //     const response = await fetch(`your_api_endpoint_here`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setContacts(data); // Set contacts with fetched data
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchContacts();
  // }, []);

  // DELETE METHOD
  function handleDeleteContact(id) {
    const deletedArr = contacts.filter((contactId) => contactId !== id);
    setContacts(deletedArr);
  }

  return (
    <div className="overflow-x-hidden h-[100%]">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isUploadOpen={isUploadOpen}
        setIsUploadOpen={setIsUploadOpen}
        contacts={contacts}
        setContacts={setContacts}
        onSubmit={onSubmit}
        contactCount={contacts.length}
        setIsSortOpen={setIsSortOpen}
        isSortOpen={isSortOpen}
      />

      <NoContactPage />

      <ContactsMainTest
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isUploadOpen={isUploadOpen}
        setIsUploadOpen={setIsUploadOpen}
        contacts={contacts}
        setContacts={setContacts}
        handleDeleteContact={handleDeleteContact}
        setIsSortOpen={setIsSortOpen}
        isSortOpen={isSortOpen}
      />

      <UploadedFile />
    </div>
  );
}

export default App;
