/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const ExpenseFrom = ({ onSubmit }) => {
  const catagory = ["Food", "Utility", "Tour"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-slate-900 uppercase my-5">
        📝Expense Input From
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Discription */}
        <div>
          <label htmlFor="discription" className="text-xl">
            Discription :{" "}
          </label>
          <input
            type="text"
            placeholder="discription"
            className="input input-bordered w-full rounded-md mt-2 "
            {...register("discription", { required: true, maxLength: 15 })}
          />
          {errors.Discription && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        {/* Amount */}
        <div>
          <label htmlFor="amount" className="text-xl">
            Amount :{" "}
          </label>
          <input
            type="number"
            placeholder="amount"
            className="input input-bordered w-full rounded-md mt-2 "
            {...register("amount", { required: true, maxLength: 5 })}
          />
          {errors.Amount && (
            <span className="text-red-500">Shoud not more than 5 Digit</span>
          )}
        </div>
        {/* Catagory */}
        <div>
          <label htmlFor="catagory" className="text-xl">
            Catagory :{" "}
          </label>
          <select
            className="select select-bordered w-full rounded-md mb-5 text-base mt-2"
            {...register("catagory")}
          >
            {catagory.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary rounded-md text-white font-bold text-lg ">
          Add Expense
        </button>
      </form>
      <hr className="mt-10" />
    </div>
  );
};

export default ExpenseFrom;
