import React, { useRef, useState } from "react";

function UploadExcelCSV({ setIsUploadOpen }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Fayl seçmə elementinə referans yaradılır

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Fayl növünün doğruluğunu yoxlayırıq (Excel və CSV fayllar)
      const fileType = selectedFile.type;
      if (
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        fileType === "text/csv"
      ) {
        setFile(selectedFile);
        console.log("Selected file:", selectedFile);
      } else {
        alert("Yalnız Excel və CSV fayllarını yükləyə bilərsiniz.");
      }
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      alert("Fayl seçməlisiniz.");
      return;
    }
    // Faylla işləmə prosesinə başlamaq üçün bu hissəni əlavə edirik
    console.log("Uploading file:", file);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Fayl seçmə `input`-unu tetikleyir
  };

  function handleDiscardUpload() {
    setIsUploadOpen(false);
  }
  return (
    <div>
      <div className="flex flex-col w-[500px] rounded-lg p-8 bg-white">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsUploadOpen(false)}
          className="flex items-center justify-end"
        >
          <i className="fa-solid fa-circle-xmark text-[#7C838B] text-[24px]" />
        </button>
        {/* UPLOADED IMAGE */}
        <div className="flex items-center justify-center mb-6">
          <img src="/src/assets/happy-white.svg" alt="upload-excel" />
        </div>
        <p className="font-semibold text-mainColor text-2xl mb-4">
          Upload an Excel or CSV file to import
        </p>
        <p className="text-[#4E4E4E] text-[16px] mb-[20px]">
          Excel files are recommended as formatting is automatic.
        </p>
        <a
          href="#"
          className="text-center text-[#4E4E4E] text-[16px] mb-[20px]"
        >
          Need help?
        </a>
        <div className="flex items-center justify-center gap-x-3">
          <img src="/src/assets/import-blue.svg" />
          <a href="#" className="text-[#1971F6] text-[16px]">
            Import template for customers
          </a>
        </div>

        {/* HIDDEN FILE INPUT */}
        <input
          type="file"
          accept=".xlsx,.csv"
          ref={fileInputRef} // Referans input-a verilir
          style={{ display: "none" }} // Gizli input
          onChange={handleFileChange} // Fayl seçildikdə işləyən funksiya
        />

        <div className="flex items-center gap-x-2 mt-8">
          {/* DISCARD BUTTON */}
          <button
            onClick={handleDiscardUpload}
            className="border border-[#D2D2D5] rounded-md py-3 px-[75px] bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
          >
            Discard
          </button>
          {/* UPLOAD FILE BUTTON  */}
          <button
            onClick={triggerFileInput}
            className="bg-[#1971F6] py-3 px-[60px] rounded-md text-white text-lg hover:bg-[#1263DE] duration-300"
          >
            Upload file
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadExcelCSV;

