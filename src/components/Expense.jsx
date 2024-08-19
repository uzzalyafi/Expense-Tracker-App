/* eslint-disable react/prop-types */

const Expense = ({ expense, onDelete }) => {
  return (
    <>
      <div className="overflow-x-auto max-w-3xl  mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg sm:2xl text-white bg-slate-400">
              <th></th>
              <th>Catagory</th>
              <th>Discription</th>
              <th>Amount</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {/* Show Expense */}
            {expense.length === 0 ? (
              <h1 className="text-3xl font-bold text-center text-slate-900 my-5">
                No Expense
              </h1>
            ) : (
              expense.map((item) => {
                return (
                  <tr key={item.id} className="text-sm sm:lg">
                    <th>{item.id}</th>
                    <td>{item.catagory}</td>
                    <td>{item.discription}</td>
                    <td>${item.amount}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-secondary text-white rounded-md"
                        onClick={() => onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
            {}
          </tbody>
          <tfoot>
            <tr className="text-lg sm:2xl text-white bg-slate-400">
              <th></th>
              <th></th>
              <th>Total</th>
              <th>${expense.reduce((a, b) => a + parseInt(b.amount), 0)}</th>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Expense;
