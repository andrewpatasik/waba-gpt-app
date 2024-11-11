import { columns, CustomerNumberCollection } from "./columns";
import CustomerDataTable from "./customerDataTable";

const customerNumberCollection: CustomerNumberCollection[] = [
  {
    number: '6285695771804',
    name: "Andrew",
  },
  {
    number: '6282195467174',
    name: "Grace",
  },

];

const CustomerNumberList = () => {
  return (
    <div className="flex flex-col border-l ml-auto w-1/3 h-full pl-4 pt-6">
      <div className="mb-3">
        <h1 className="text-xl font-semibold tracking-tight">Customer List</h1>
      </div>

      <CustomerDataTable columns={columns} data={customerNumberCollection} />
    </div>
  );
};

export default CustomerNumberList;
