import React from "react";

function DeleteConfirm() {
  return (
    <div>
      <div className="flex flex-col items-center w-[330px] bg-white shadow-[0px_0px_24px_0px_#00000033] rounded-lg pt-10 px-11 pb-6">
        <img
          src="/src/assets/trash.svg"
          alt="delete"
          className="size-[130px] object-cover"
        />
        <p className="mt-4 font-medium text-xl text-mainColor text-center">
          Are you sure you want to delete this contact?
        </p>
        <span className="mt-3 text-[#A1A7AD] text-[16px] font-medium text-center">
          Sarah White
        </span>
        <span className=" text-[#A1A7AD] text-[16px] font-medium text-center">
          sarahwhite@gmail.com
        </span>
        <div className="flex items-center gap-x-3 mt-[20px]">
          {/* DISCARD BUTTON */}
          <button className="border border-[#D2D2D5] rounded-md py-3 px-[27px] bg-[#F3F4F6] text-lg text-mainColor">
            Discard
          </button>
          {/* DELETE  BUTTON */}
          <button className="bg-[#FBF5F5] rounded-md px-8 py-3 text-[#E93C0D] text-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
