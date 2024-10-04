import React from "react";

function DeleteAndEdit() {
  return (
    <div>
      <div className="flex flex-col w-[166px] rounded-md px-4 py-3 bg-white shadow-[0px_0px_24px_0px_#00000033]">
        <div className="flex items-center gap-x-1 mb-6">
          <div className="flex items-center justify-center size-[20px]">
            <img
              src="/src/assets/trash-gray-mini.svg"
              alt="trash"
              className="inline-block size-full object-cover"
            />
          </div>
          <button className="text-[20px] text-mainColor">Delete</button>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center justify-center size-[20px]">
            <img
              src="/src/assets/edit-pen.svg"
              alt="trash"
              className="inline-block size-full object-cover"
            />
          </div>
          <button className="text-[20px] text-mainColor">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAndEdit;
