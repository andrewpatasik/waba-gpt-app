import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DataTable from "./dataTable";
import { columns, ItemCollection } from "./columns";

const itemCollection:ItemCollection[]  = [
  {
    name: "Choco Cookies",
    description:
      "From classic chocolate chip to sugar cookies and oatmeal raisin.",
  },
  {
    name: "Sweet Brownies",
    description:
      "Rich, fudgy brownies or lighter, cakey brownies. Absolute yummy!",
  },
  {
    name: "Choco Cookies",
    description:
      "From classic chocolate chip to sugar cookies and oatmeal raisin.",
  },
];



const ProductList = () => {
  return (
    <section>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Product Collection
        </h1>
        <p className="text-sm text-slate-400 tracking-wide leading-snug">
          A list of your available product. Select one of your product to
          generate promo or add a new one.
        </p>
      </div>

      <DataTable columns={columns} data={itemCollection} />

      <Button
        className="mt-4 w-full border-2 border-dashed text-slate-400"
        variant={"outline"}
      >
        <Plus />
        <span>New Product</span>
      </Button>
    </section>
  );
};

export default ProductList;
