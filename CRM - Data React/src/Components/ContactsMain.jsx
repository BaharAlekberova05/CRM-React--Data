// API ILE
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import ContactCreatedSuccesful from "./Popups/ContactCreatedSucces";
import EditContact from "./Popups/EditContact";

function ContactsMain({
  isOpen,
  setIsOpen,
  contacts,
  setContacts,
  handleDeleteContact,
}) {
  // let API = "https://jsonplaceholder.typicode.com/users";

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [isContactCreated, setIsContactCreated] = useState(false);

  const handleSaveContact = () => {
    setIsContactCreated(true);
    console.log("Contact yaradıldı:", isContactCreated);
  };

  useEffect(() => {
    if (isContactCreated) {
      console.log("Popup göründü!");
    }
  }, [isContactCreated]);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const response = await fetch(API);
  //     const data = await response.json();
  //     setContacts(data);
  //     setSelectedContacts(Array(data.length).fill(false));
  //   };

  //   fetchContacts();
  // }, []);

  const indexOfLastCard = (currentPage + 1) * cardsPerPage;
  const indexOfFirstCard = currentPage * cardsPerPage;
  const currentCards = contacts.slice(indexOfFirstCard, indexOfLastCard);

  const handleSelectAll = () => {
    const allSelected = selectedContacts.every((selected) => selected);
    const updatedSelection = selectedContacts.map(() => !allSelected);
    setSelectedContacts(updatedSelection);
  };

  const toggleContactSelection = (index) => {
    const updatedSelection = [...selectedContacts];
    updatedSelection[indexOfFirstCard + index] =
      !updatedSelection[indexOfFirstCard + index];
    setSelectedContacts(updatedSelection);
  };

  const goToNextPage = () => {
    if (indexOfLastCard < contacts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <main className="bg-[#F9FAFB] flex flex-col h-[100vh] justify-center w-full px-10 py-10 mt-[88px]">
        <div className="flex flex-col gap-[22px] mb-[26px] ">
          <div className="flex items-center justify-between">
            <p className="text-mainColor text-xl">
              Easily access and manage all your contacts with detailed
              information.
            </p>
            <div className="flex items-center gap-x-3">
              <p className="text-[#4E4E4E] text-xl">
                <span>{currentPage + 1}</span> /{" "}
                <span>{Math.ceil(contacts.length / cardsPerPage)}</span>
              </p>
              <div className="flex items-center gap-x-2">
                <button
                  className="flex items-center justify-center size-11 rounded-md border border-[#D2D2D5] p-[10px] bg-[#F3F4F6] hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 0}
                >
                  <i className="fa-solid fa-arrow-left text-xl" />
                </button>
                <button
                  className="flex items-center justify-center size-11 rounded-md border border-[#D2D2D5] p-[10px] bg-[#F3F4F6] hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
                  onClick={goToNextPage}
                  disabled={indexOfLastCard >= contacts.length}
                >
                  <i className="fa-solid fa-arrow-right text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 mb-6">
          {currentCards.map((contact, index) => (
            <ContactCard
              key={index}
              isSelected={selectedContacts[indexOfFirstCard + index]} // Düzgün indeksi istifadə et
              onClick={() => toggleContactSelection(index)} // Indeksi birbaşa keç
              contact={contact}
              setIsOpen={setIsOpen} // setIsOpen fonksiyonunu buraya ekle
              setIsEditOpen={setIsEditOpen}
              isEditOpen={isEditOpen}
            />
          ))}
          {isEditOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <EditContact
                contacts={contacts}
                handleDeleteContact={handleDeleteContact}
                setIsEditOpen={setIsEditOpen}
                isEditOpen={isEditOpen}
              />
            </div>
          )}

          {/* Kontakt yaradıldıqdan sonra popup-u göstərin */}
          {isContactCreated && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <ContactCreatedSuccesful
                onClose={() => setIsContactCreated(false)} // Popup-u bağlamaq üçün funksiyanı keçin
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            id="selectAllBtn"
            className="rounded-md border border-[#D2D2D5] bg-[#F3F4F6] px-3 py-[10px] text-mainColor text-lg hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
            onClick={handleSelectAll}
          >
            Select all
          </button>
          <button className="rounded-md px-3 py-[10px] bg-[#1971F6] text-white text-lg hover:bg-[#1263DE] duration-300">
            Send Selected Contacts to Pipeline
          </button>
        </div>
      </main>
    </div>
  );
}

export default ContactsMain;
