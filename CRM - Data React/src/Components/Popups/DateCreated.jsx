import React from "react";

function DateCreated() {
  return (
    <div className="w-[222px] flex flex-col border border-[#D2D2D5] rounded-md shadow-[0px_0px_6px_0px_#00000040]">
      <div className="hover:bg-[#F2F2F2] px-4 py-[10px]">
        <button className="text-[16px] leading-[19px] text-mainColor">
          Oldest to Newest
        </button>
      </div>

      <div className="hover:bg-[#F2F2F2] px-4 py-[10px]">
        <button className="text-[16px] leading-[19px] text-mainColor ">
          Newest to oldest
        </button>
      </div>
    </div>
  );
}

export default DateCreated;
