import { useForm } from "react-hook-form";

function EditContact({ setIsEditOpen, handleDeleteContact,contacts }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //  onSubmit funksiyası yalnız form məlumatlarını qəbul edir
  function onSubmit(data) {
    console.log(data);
  }

  function handleDiscard() {
    reset();
    setIsEditOpen(false)
  }
  return (
    <div>
      {contacts.map((item,index)=>(
             <div className="w-[700px] rounded-lg p-5 bg-white flex flex-col" key={index}>
             {/* ABOUT CONTACT */}
             <div className="flex flex-col justify-center mb-6">
               {/* AVATAR */}
               <div className="flex-shrink-0 w-[80px] h-[80px] bg-[#92C338] rounded-full flex items-center justify-center mb-4">
                 <span className="text-4xl text-white">{item.name[0]}</span>
               </div>
               {/* CONTACT INFO */}
               <div className="flex justify-between">
                 <div className="flex flex-col justify-center">
                   <span className="font-medium text-2xl text-mainColor">
                    {item.name}
                   </span>
                   <span className="text-lg text-[#7C838B]">
                   {item.email}
                   </span>
                 </div>
                 <div className="flex flex-col">
                   <span className="font-medium text-lg text-mainColor">
                     Created by:{" "}
                   </span>
                   <div className="flex items-center">
                     {/* AVATARCIK */}
                     <div className="flex-shrink-0 w-[24px] h-[24px] bg-[#77919D] rounded-full flex items-center justify-center mr-2">
                       <span className="text-sm text-white">A</span>
                     </div>
                     <span className="text-lg text-[#7C838B]">Amanda Johnson</span>
                   </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="font-medium text-lg text-mainColor">
                     Date added:
                   </span>
                   <div className="flex items-center">
                     <i className="fa-regular fa-calendar-days text-[20px] mr-2 text-[#7C838B]" />
                     <span className="text-lg text-[#7C838B]">{new Date().toLocaleDateString()}</span>
                   </div>
                 </div>
               </div>
             </div>
             <hr className="text-[#D9D9D9] mb-6" />
             {/* CHANGE CONTACT */}
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
                 {/* DELETE CONTACT BUTTON */}
                   <button  onClick={handleDeleteContact} className="bg-[#FBF5F5] rounded-md px-3 py-[10px] text-[#E93C0D] text-lg">
                   Delete contact
                 </button>
                 <div className="flex items-center gap-x-3">
                   {/* DISCARD BUTTON */}
                   <button
                     type="button"
                     onClick={handleDiscard}
                     className="border border-[#D2D2D5] rounded-md px-3 py-[10px] bg-[#F3F4F6] text-lg text-mainColor hover:text-[#1971F6] hover:border-[#1971F6] duration-300"
                   >
                     Discard
                   </button>
                   {/* SAVE CONTACT BUTTON  */}
                   <button
                     type="submit"
                     className="bg-[#1971F6] px-3 py-[10px] rounded-md text-white text-lg hover:bg-[#1263DE] duration-300"
                   >
                     Save changes
                   </button>
                 </div>
               </div>
             </form>
           </div>
      ))}
 
    </div>
  );
}

export default EditContact;
