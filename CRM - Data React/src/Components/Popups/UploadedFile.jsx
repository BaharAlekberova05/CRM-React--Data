import React from "react";

function UploadedFile() {
  return (
    <div>
      <main className="bg-[#F9FAFB] w-full px-10 pt-10 pb-[80px] mt-[88px] overflow-auto">
        {/* CONTACTS | UPLOADED FILE AND BUTTONS */}
        <div className="flex flex-col items-center gap-x-5 w-full mb-8">
          <div className="flex items-center justify-between w-full">
            {/*  CONTACTS | UPLOADED FILE*/}
            <div className="flex items-center gap-x-3">
              <a href="#">
                <i className="fa-solid fa-arrow-left text-xl text-[#7C838B]" />
              </a>
              <a href="#" className="font-medium text-[#7C838B] text-2xl">
                Contacts
              </a>
              <span className="text-mainColor font-medium text-2xl">
                | Uploaded File
              </span>
            </div>
            {/* BUTTONS */}
            <div className="flex items-center gap-x-3">
              <button className="rounded-md py-3 px-11 border border-[#D2D2D5] bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300">
                Discard
              </button>
              <button className="flex items-center gap-x-3 rounded-md px-10 py-3 bg-[#1971F6] text-white text-lg hover:bg-[#1263DE] duration-300">
                <img
                  src="/src/assets/import.svg"
                  alt="import"
                  className="text-[24px]"
                />
                Import
              </button>
            </div>
          </div>
          {/* UPLOADED FILE INFORMATION */}
          <div className="flex items-center w-full mt-5">
            <div className="flex items-center gap-x-3 mr-11">
              <span className="text-lg font-medium text-mainColor">
                Uploaded file:
              </span>
              <img
                src="./src/assets/document.svg"
                alt="document"
                className="w-6 h-6"
              />
              <a href="#" className="text-lg text-[#4E4E4E]">
                customerlist1.xlsx
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="underline font-medium text-lg text-mainColor mr-3"
              >
                Need help?
              </a>
              <img
                src="/src/assets/import-black.svg"
                alt="import"
                className="size-6"
              />
              <a href="#" className="ml-1 text-[#4E4E4E] text-lg">
                Import tempxate for customers
              </a>
            </div>
          </div>
        </div>
        {/* CONTACTS TABLE */}
        <table className="w-full bg-white">
          {/* TABLE HEAD */}
          <thead className="border-b border-[#F5F5F5]">
            <tr>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="mr-2 text-[#7C83size-6 8B] text-[16px] fa-solid fa-user" />
                Contact
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-envelope" />
                Email
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-phone-volume" />
                Phone
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-building" />
                Company
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-user-group" />
                Department
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-address-card" />
                Position
              </td>
              <td className="text-[#7C838B] text-[16px] leading-[19px] py-3 px-[20px]">
                <i className="size-6 mr-2 text-[#7C838B] text-[16px] fa-solid fa-arrows-rotate" />
                Status
              </td>
            </tr>
          </thead>
          {/* TABLE BODY */}
          <tbody>
            {/* TABLE LINES */}
            <tr className="border-b">
              <td className="py-3 px-[20px] border-r text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex items-center">
                  <img
                    src="/src/assets/menu-circle.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex-shrink-0 w-[28px] h-[28px] bg-[#9938C3] rounded-full flex items-center justify-center mx-3">
                    <span className="text-sm text-white">J</span>
                  </div>
                  <span className="text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                    Jessica Smart
                  </span>
                </div>
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                jessica.smart@gmail.com
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                +994 70 122 42 32
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                Ocean Blue Designs
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                Marketing
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                Senior Marketing Manager
              </td>
              <td className="py-3 px-[20px] text-[16px] text-mainColor flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="size-[20px] bg-[#39A645] rounded-full"></div>
              </td>
            </tr>
            {/* TABLE LINES */}
            <tr className="border-b">
              <td className="py-3 px-[20px] border-r text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="flex items-center">
                  <img
                    src="/src/assets/menu-circle.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex-shrink-0 w-[28px] h-[28px] bg-[#9938C3] rounded-full flex items-center justify-center mx-3">
                    <span className="text-sm text-white">L</span>
                  </div>
                  <span className="text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                    Lily Adams
                  </span>
                </div>
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                lily.adams@gmail.com
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                +994 70 122 42 41
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor">
                <div className="flex items-center justify-center rounded-full border-[2px]">
                  <span className="text-warning text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                    Not provided
                  </span>
                </div>
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                Design
              </td>
              <td className="py-3 px-[20px] border-x text-[16px] text-mainColor whitespace-nowrap overflow-hidden text-ellipsis">
                UI/UX Designer
              </td>
              <td className="py-3 px-[20px] text-[16px] text-mainColor flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                <div className="bg-[#E93C0D] size-[20px] rounded-full"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default UploadedFile;
