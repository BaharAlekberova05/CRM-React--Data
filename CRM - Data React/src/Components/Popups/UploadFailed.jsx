import React from "react";

function UploadFailed() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[288px] bg-white rounded-lg pt-10 px-11 pb-6 shadow-[0px_0px_24px_0px_#00000033]">
        <img src="/src/assets/sad-red.svg" alt="contact-created" />
        <p className="mt-4 mb-3 text-[#DD5A4D] font-medium text-2xl">
          Upload Failed
        </p>
        <p className="text-[#A1A7AD] font-medium text-[16px] text-center mb-8">
          Something went wrong while uploading your file
        </p>
        <button className="rounded-md px-[60px] py-3 bg-[#F3F4F6] border border-[#D2D2D5] text-mainColor text-[16px]">
          Try Again
        </button>
      </div>
    </div>
  );
}

export default UploadFailed;
