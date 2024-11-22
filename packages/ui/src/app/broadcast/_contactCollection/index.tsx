import CommandSearch from "@/components/CommandSearch";
import { columns, CustomerContact } from "./columns";
import CustomerDataTable from "./customerDataTable";

const contactNumberCollection: CustomerContact[] = [
  {
    number: "6285695771804",
    name: "Andrew",
  },
  {
    number: "6282195467174",
    name: "Grace",
  },
];

const ContactCollection = () => {
  return (
    <div className="flex flex-col border-r w-1/4 h-full pt-6">
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight pl-2">Contacts</h1>
      </div>

      <div className="flex flex-col space-y-2 h-full">
        <CommandSearch inputValue="" />
        <CustomerDataTable columns={columns} data={contactNumberCollection} />
      </div>
    </div>
  );
};

export default ContactCollection;
