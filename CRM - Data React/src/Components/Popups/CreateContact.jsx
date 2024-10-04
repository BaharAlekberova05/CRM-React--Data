import { useForm } from "react-hook-form";

function CreateContact({ setIsOpen, onSubmit, handleSaveContact }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleDiscard() {
    reset();
    setIsOpen(false);
  }

  const handleFormSubmit = (data) => {
    onSubmit(data);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[700px] rounded-lg p-5 bg-white flex flex-col">
        {/* CREATE NEW CONTACT */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-xl text-mainColor">
              Create new contact
            </span>
            <button onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-circle-xmark text-[#7C838B] text-[24px]" />
            </button>
          </div>
          <p className="font-medium text-lg text-[#7C838B] mb-4">
            Enter basic contact details to add a new customer.
          </p>
          <hr className="text-[#D9D9D9] mb-7" />
        </div>

        {/* CHANGE CONTACT FORM */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col"
        >
          {/* INPUTS */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Full name</span>
                <input
                  type="text"
                  {...register("name", {
                    required: "This field mustn't be empty",
                  })}
                  placeholder="e.g. Sarah White"
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.name ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {" "}
                  {errors.name?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Company</span>
                <input
                  type="text"
                  {...register("company", {
                    required: "This field mustn't be empty",
                  })}
                  placeholder="e.g. Sunflower Studios"
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.company ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {errors.company?.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Email</span>
                <input
                  type="email"
                  {...register("email", {
                    required: "Please enter a valid email address.",
                  })}
                  placeholder="e.g. example@gmail.com"
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.email ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {errors.email?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Department</span>
                <input
                  type="text"
                  placeholder="Marketing"
                  {...register("marketing", {
                    required: "This field mustn't be empty",
                  })}
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.marketing ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {errors.marketing?.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Phone</span>
                <input
                  type="phone"
                  {...register("number", {
                    required: "Please enter a valid phone number.",
                  })}
                  placeholder="e.g. (+994)70 211 45 32"
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.marketing ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {errors.number?.message}
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-mainColor text-lg">Position</span>
                <input
                  type="text"
                  {...register("position", {
                    required: "This field mustn't be empty",
                  })}
                  placeholder="Marketing Specialist"
                  className={`border w-[316px] rounded-md p-[10px] placeholder:text-lg placeholder:text-[#D9D9D9] outline-none ${
                    errors.position ? "border-[#D30707]" : "border-[#D9D9D9]"
                  }`}
                />
                <p className="text-[#D30707] text-xs">
                  {errors.position?.message}
                </p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-between mt-11">
            <button
              type="button"
              onClick={handleDiscard}
              className="border border-[#D2D2D5] rounded-md px-3 py-[10px] bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
            >
              Discard
            </button>
            <button
              onClick={handleSaveContact}
              type="submit"
              className="bg-[#1971F6] px-3 py-[10px] rounded-md text-white text-lg hover:bg-[#1263DE] duration-300"
            >
              Save contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContact;
