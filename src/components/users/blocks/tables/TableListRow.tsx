"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

interface TableListRowProps {
  row: {
    id: string;
    email: string;
    name: string;
    created_at: string;
  };
}

function TableListRow({ row }: TableListRowProps) {
  return (
    <TableRow className=" border-gray-500 hover:bg-gray-100/50 transition-colors">
      {/* Column 1: Name */}
      <TableCell className="py-4 border-b font-medium text-center text-gray-900">
        {row.name}
      </TableCell>

      {/* Column 2: Email */}
      <TableCell className="py-4 border-b   text-center text-gray-600">{row.email}</TableCell>

      {/* Column 3: Date */}
      <TableCell className="py-4 border-b  text-center  text-gray-500">
        {row.created_at}
      </TableCell>

      <TableCell className="border-b  border-gray-200 ">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => console.log("Edit", row.id)}
            className="text-black hover:text-gray-500 transition-colors"
            title="Edit"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => console.log("Delete", row.id)}
            className="cursor-auto text-red-600 hover:text-red-800 transition-colors"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableListRow;
