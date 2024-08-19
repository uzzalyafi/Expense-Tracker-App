// eslint-disable-next-line react/prop-types
const ExpenseFiltter = ({ onSelect }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-900 uppercase my-5">
        📃Expense List
      </h2>
      <select
        className="select select-bordered w-full max-w-xs mb-5 text-base rounded-md"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value={"All"}>All</option>
        <option value={"Food"}>Food</option>
        <option value={"Utility"}>Utility</option>
        <option value={"Tour"}>Tour</option>
      </select>
    </div>
  );
};

export default ExpenseFiltter;
