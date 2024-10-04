import Header from "./Header";

function NoContactPage({ isOpen, setIsOpen }) {
  return (
    <div className="flex flex-col">
      <main className="flex items-center justify-center bg-[#F9FAFB] w-full h-screen px-10 py-10 min-h-screen overflow-x-hidden">
        {/* SEARCH */}
        <div className="flex flex-col gap-[22px] mb-[26px]">
          {/* NO CONTACT INFO */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src="/src/assets/happy-white.svg"
                  alt="no-contact"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-3xl text-center text-mainColor mb-4">
                You currently have no contacts.
              </p>
              <p className="text-2xl text-mainColor text-center">
                Once you add some, they'll appear here for easy access and
                management.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NoContactPage;
