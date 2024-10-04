import React from "react";

function ExcelFileEdit() {
  return (
    <div>
      <div className="w-[700px] rounded-lg p-5 bg-white flex flex-col">
        {/* Edit Contact Information */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-xl text-mainColor">
              Edit Contact Information
            </span>
            <button>
              <i className="fa-solid fa-circle-xmark text-[#7C838B] text-[24px]" />
            </button>
          </div>
          <p className="font-medium text-lg text-[#7C838B] mb-4">
            Revise the contact details to ensure accuracy.
          </p>
        </div>
        <hr className="text-[#D9D9D9] mb-6" />
        {/* CHANGE CONTACT */}
        <div className="flex flex-col">
          {/* INPUTS */}
          <div className="flex flex-col space-y-4">
            {/* burada space-y-7 -> space-y-4 edildi */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                {/* burada space-y-5 -> space-y-3 edildi */}
                <span className="text-mainColor text-lg">Full name</span>
                <input
                  type="text"
                  placeholder="e.g. Sarah White"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="flex flex-col space-y-3">
                {/* burada space-y-5 -> space-y-3 edildi */}
                <span className="text-mainColor text-lg">Company</span>
                <input
                  type="text"
                  placeholder="e.g. Sunflower Studios"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Email</span>
                <input
                  type="text"
                  placeholder="e.g. example@gmail.com"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Department</span>
                <input
                  type="text"
                  placeholder="Marketing"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Phone</span>
                <input
                  type="text"
                  placeholder="e.g. (+994)70 211 45 32"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Position</span>
                <input
                  type="text"
                  placeholder="Marketing Specialist"
                  className="border border-[#D9D9D9] w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9]"
                />
              </div>
            </div>
          </div>
          {/* BUTTONS */}
          <div className="flex items-center justify-between mt-11">
            {/* DISCARD BUTTON */}
            <button className="border border-[#D2D2D5] rounded-md px-3 py-[10px] bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300">
              Discard
            </button>
            {/* SAVE CONTACT BUTTON  */}
            <button className="bg-[#1971F6] px-3 py-[10px] rounded-md text-white text-lg hover:bg-[#1263DE] duration-300">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExcelFileEdit;
