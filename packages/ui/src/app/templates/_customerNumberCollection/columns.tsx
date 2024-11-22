"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type CustomerNumberCollection = {
  number: string;
  name: string;
};

export const columns: ColumnDef<CustomerNumberCollection>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ cell }) => (
      <p>{cell.getValue() as String}</p>
    ),
  },
  {
    accessorKey: "number",
    header: "Number",
    cell: ({ cell }) => (
      <p>{cell.getValue() as String}</p>
    ),
  },
];
