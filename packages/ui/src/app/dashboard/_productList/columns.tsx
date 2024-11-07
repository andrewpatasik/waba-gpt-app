"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type ItemCollection = {
  name: string;
  description: string;
};

export const columns: ColumnDef<ItemCollection>[] = [
  {
    id: "select",
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
      <p className="min-w-28">{cell.getValue() as String}</p>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ cell }) => (
      <p>{cell.getValue() as String}</p>
    ),
  },
];
