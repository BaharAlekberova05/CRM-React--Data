import React from "react";

function UploadComplete() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[300px] bg-white rounded-lg pt-10 px-11 pb-6 shadow-[0px_0px_24px_0px_#00000033]">
        <img src="/src/assets/happy-green.svg" alt="upload complete" />
        <p className="mt-4 mb-3 text-[#39A645] font-medium text-2xl">
          Upload Complete
        </p>
        <p className="text-[#A1A7AD] font-medium text-[16px] text-center mb-8">
          Your file was uploaded successfully
        </p>
        <button className="rounded-md px-[78px] py-3 bg-[#F3F4F6] border border-[#D2D2D5] text-mainColor text-lg">
          Close
        </button>
      </div>
    </div>
  );
}

export default UploadComplete;
