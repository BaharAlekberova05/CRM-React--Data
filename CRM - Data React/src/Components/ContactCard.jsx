import React from "react";
import EditContact from "./Popups/EditContact";

function ContactCard({
  setIsEditOpen,
  isEditOpen,
  isOpen,
  setIsOpen,
  isSelected,
  onClick,
  contact,
  onSubmit,
  handleDeleteContact
}) {
  const colors = [
    "#77919D",
    "#92C338",
    "#C37938",
    "#3892C3",
    "#9938C3",
    "#EC417A",
  ];
  const avatarColor = colors[contact.name.charCodeAt(0) % colors.length];

  return (
    <div>
      <div className="flex items-center rounded-lg bg-white border border-[#D2D2D5] p-5">
        <input
          onClick={onClick}
          type="checkbox"
          className="select-contact flex-shrink-0 mr-3 size-6 rounded-md border border-[#D4D6DB] bg-[#F3F4F6]"
          checked={isSelected}
          readOnly
        />
        <div className="flex items-center gap-x-3 w-full">
          <div
            className="flex-shrink-0 w-[120px] h-[120px] rounded-lg flex items-center justify-center"
            style={{ backgroundColor: avatarColor }}
          >
            <span className="text-4xl text-white">{contact.name[0]}</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-between max-w-full">
              <span className="text-mainColor font-medium text-[16px]">
                {contact.name}
              </span>
              <span className="text-[16px] text-mainColor">
                {contact.company}
              </span>
              <span className="text-[16px] text-[#7C838B]">
                {contact.email}
              </span>
              <p className="text-[16px] text-[#7C838B]">
                Date added: <span>{new Date().toLocaleDateString()}</span>
              </p>
            </div>
            <div
              onClick={() => setIsEditOpen(true)}
              className="flex-shrink-0 self-end size-6 cursor-pointer"
            >
              <img
                src="/src/assets/edit-pen.svg"
                alt="edit"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactCard;



