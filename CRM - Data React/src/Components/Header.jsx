// import { useState } from "react";
// import CreateContact from "./Popups/CreateContact";
// import { FaChevronDown } from "react-icons/fa6";

// import UploadExcelCSV from "./Popups/UploadExcelCSV";

// function Header({
//   isOpen,
//   setIsOpen,
//   contactCount,
//   onSubmit,
//   isUploadOpen,
//   setIsUploadOpen,
//   contacts,
//   handleDiscard,
// }) {
//   const [openModal, setOpenModal] = useState(false);
//   return (
//     <header className="flex flex-col w-full h-[80px] px-10 py-[20px] border-b-[1px] border-b-[#F2F2F2] bg-white z-10">
//       {/* LOGO, MENUS AND USER*/}
//       <div className="flex items-center justify-between">
//         {/* LOGO AND MENUS */}
//         <div className="flex items-center gap-x-6">
//           {/*LOGO  */}
//           <div className="size-8">
//             <a href="#">
//               <img
//                 src="\src\assets\logo.svg"
//                 alt="logo"
//                 className="object-cover w-full h-full"
//               />
//             </a>
//           </div>
//           {/* MENUS */}
//           <a
//             href="#"
//             className="text-mainColor text-[16px] leading-[19px] px-4 py-[10px]"
//           >
//             Dashboard
//           </a>
//           <a
//             href="#"
//             className="text-mainColor text-[16px] leading-[19px]  px-4 py-[10px]"
//           >
//             Sales pipeline
//           </a>
//           <a
//             href="#"
//             className="text-mainColor text-[16px] leading-[19px]  px-4 py-[10px] bg-[#DEEBFF] rounded-md"
//           >
//             Contacts
//           </a>
//           <a
//             href="#"
//             className="text-mainColor text-[16px] leading-[19px]  px-4 py-[10px]"
//           >
//             Admin panel
//           </a>
//         </div>
//         {/* USER */}
//         <div className="flex items-center gap-x-4">
//           {/* USER PROFILE */}
//           <div className="flex items-center gap-x-3">
//             <a href="#" className="text-[16px] leading-[19px]  text-mainColor">
//               Sophia Peterson
//             </a>
//             {/* PROFILE PHOTO */}
//             <div className="size-11 rounded-md">
//               <a href="#">
//                 <img
//                   src="\src\assets\userPP.svg"
//                   alt="userPP"
//                   className="w-full h-full rounded-md object-cover"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CONTACTS & SEARCH & BTNS */}
//       <div className="flex items-center justify-between mt-10 z-10">
//         {/* CONTACTS */}
//         <div className="flex items-center gap-x-2">
//           <span className="font-medium text-3xl text-mainColor">Contacts</span>
//           <span className="font-medium text-3xl text-[#C2C4CA]">
//             {contactCount}
//           </span>
//         </div>
//         {/* SEARCH AND FILTER */}
//         <div className="flex items-center gap-x-3">
//           {/* SEARCH INPUT */}
//           <div className="relative">
//             <input
//               type="text"
//               className="border w-[413px] h-11 px-4 pl-12 py-[10px] placeholder:text-[#7C838B] text-lg outline-[#1971F6] rounded-md"
//               placeholder="Search contacts"
//             />
//             <div className="size-6 absolute top-[10px] left-4">
//               <a href="#">
//                 <img
//                   src="/src/assets/search.svg"
//                   alt="search"
//                   className="w-full h-full object-cover"
//                 />
//               </a>
//             </div>
//           </div>
//           {/* SORT BY */}
//           <div className="w-[222px]  relative">
//             <button className="flex items-center px-3 py-[10px] border border-[#D2D2D5] rounded-md bg-[#F3F4F6]">
//               <span className="mr-3 text-lg text-mainColor">
//                 Sort by: Date created
//               </span>
//               {/* Replace the button with a span or div */}
//               <div
//                 onClick={() => setOpenModal(true)}
//                 className="cursor-pointer"
//               >
//               <FaChevronDown />
//               </div>
//             </button>

//             <div
//               className={`hidden ${
//                 openModal ? "block" : ""
//               } absolute top-[50px] left-0 w-[216px] h-[86px] flex-col items-center px-4 py-[10px] border border-[#D2D2D5] rounded-md shadow-[0px_0px_6px_0px_#00000040]`}
//             >
//               <span className="text-[16px] leading-[19px] text-mainColor mb-[20px]">
//                 Oldest to Newest
//               </span>
//               <span className="text-[16px] leading-[19px] text-mainColor">
//                 Newest to oldest
//               </span>
//             </div>
//           </div>

//           {/* UPLOAD RECORDS */}
//           <button
//             onClick={() => {
//               setIsUploadOpen(true);
//             }}
//             className="flex items-center px-3 py-[10px] border border-[#D2D2D5] rounded-md bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
//           >
//             Upload records
//           </button>
//           {/*NEW CONTACT*/}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="flex items-center bg-[#1971F6] px-3 py-[10px] rounded-md gap-x-3 text-white text-lg hover:bg-[#1263DE] duration-300"
//           >
//             <img src="/src/assets/user-cirlce-add.svg" alt="user-cirlce-add" />
//             New contact
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <CreateContact
//           setIsOpen={setIsOpen}
//           onSubmit={onSubmit}
//         ></CreateContact>
//       )}

//       {isUploadOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <UploadExcelCSV
//             contacts={contacts}
//             setIsUploadOpen={setIsUploadOpen}
//             isUploadOpen={isUploadOpen}
//             setIsOpen={setIsOpen}
//             isOpen={isOpen}
//             handleDiscard={handleDiscard}
//           />
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import CreateContact from "./Popups/CreateContact";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"; // Import both icons
import UploadExcelCSV from "./Popups/UploadExcelCSV";
import DateCreated from "./Popups/DateCreated"; // Import the DateCreated component

function Header({
  isOpen,
  setIsOpen,
  contactCount,
  onSubmit,
  isUploadOpen,
  setIsUploadOpen,
  contacts,
  handleDiscard,
  handleSaveContact
}) {
  const [openModal, setOpenModal] = useState(false); // State to toggle the modal

  return (
    <header className="flex flex-col w-full h-[80px] px-10 py-[20px] border-b-[1px] border-b-[#F2F2F2] bg-white z-10">
      {/* LOGO, MENUS AND USER */}
      <div className="flex items-center justify-between">
        {/* LOGO AND MENUS */}
        <div className="flex items-center gap-x-6">
          <div className="size-8">
            <a href="#">
              <img
                src="\src\assets\logo.svg"
                alt="logo"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
          <a
            href="#"
            className="text-mainColor text-[16px] leading-[19px] px-4 py-[10px]"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-mainColor text-[16px] leading-[19px] px-4 py-[10px]"
          >
            Sales pipeline
          </a>
          <a
            href="#"
            className="text-mainColor text-[16px] leading-[19px] px-4 py-[10px] bg-[#DEEBFF] rounded-md"
          >
            Contacts
          </a>
          <a
            href="#"
            className="text-mainColor text-[16px] leading-[19px] px-4 py-[10px]"
          >
            Admin panel
          </a>
        </div>

        {/* USER */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-3">
            <a href="#" className="text-[16px] leading-[19px] text-mainColor">
              Sophia Peterson
            </a>
            <div className="size-11 rounded-md">
              <a href="#">
                <img
                  src="\src\assets\userPP.svg"
                  alt="userPP"
                  className="w-full h-full rounded-md object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTS & SEARCH & BTNS */}
      <div className="flex items-center justify-between mt-10 z-10">
        {/* CONTACTS */}
        <div className="flex items-center gap-x-2">
          <span className="font-medium text-3xl text-mainColor">Contacts</span>
          <span className="font-medium text-3xl text-[#C2C4CA]">
            {contactCount}
          </span>
        </div>

        {/* SEARCH AND FILTER */}
        <div className="flex items-center gap-x-3">
          {/* SEARCH INPUT */}
          <div className="relative">
            <input
              type="text"
              className="border w-[413px] h-11 px-4 pl-12 py-[10px] placeholder:text-[#7C838B] text-lg outline-[#1971F6] rounded-md"
              placeholder="Search contacts"
            />
            <div className="size-6 absolute top-[10px] left-4">
              <a href="#">
                <img
                  src="/src/assets/search.svg"
                  alt="search"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* SORT BY */}
          <div className="w-[222px] relative">
            <button
              onClick={() => setOpenModal(!openModal)} // Toggle modal state
              className="flex items-center px-3 py-[10px] border border-[#D2D2D5] rounded-md bg-[#F3F4F6]"
            >
              <span className="mr-3 text-lg text-mainColor">
                Sort by: Date created
              </span>
              {openModal ? <FaChevronUp /> : <FaChevronDown />}{" "}
              {/* Toggle icon */}
            </button>

            {/* Conditionally render the DateCreated popup */}
            {openModal && (
              <div className="absolute top-[50px] left-0">
                <DateCreated />
              </div>
            )}
          </div>

          {/* UPLOAD RECORDS */}
          <button
            onClick={() => {
              setIsUploadOpen(true);
            }}
            className="flex items-center px-3 py-[10px] border border-[#D2D2D5] rounded-md bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
          >
            Upload records
          </button>

          {/* NEW CONTACT */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center bg-[#1971F6] px-3 py-[10px] rounded-md gap-x-3 text-white text-lg hover:bg-[#1263DE] duration-300"
          >
            <img src="/src/assets/user-cirlce-add.svg" alt="user-cirlce-add" />
            New contact
          </button>
        </div>
      </div>

      {/* CreateContact and UploadExcelCSV Popups */}
      {isOpen && <CreateContact setIsOpen={setIsOpen} onSubmit={onSubmit} />}
      {isUploadOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <UploadExcelCSV
            contacts={contacts}
            setIsUploadOpen={setIsUploadOpen}
            isUploadOpen={isUploadOpen}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleDiscard={handleDiscard}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
