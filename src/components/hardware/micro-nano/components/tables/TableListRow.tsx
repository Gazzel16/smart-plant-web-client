"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Zap } from "lucide-react";

interface TableListRowProps {
  row: {
    id?: string;
    micro_motor?: string;
    micro_sensor?: string;
    email?: string;
    created_at?: string;
  };
}

function TableListRow({ row }: TableListRowProps) {
  return (
    <TableRow className=" border-gray-500 hover:bg-gray-100/50 transition-colors">
      <TableCell className="py-4 border-b font-medium text-center text-gray-900">
        {row.micro_sensor}
      </TableCell>

      <TableCell className="py-4 border-b font-medium text-center text-gray-900">
        {row.micro_motor}
      </TableCell>

      <TableCell className="py-4 border-b   text-center text-gray-600">
        {row.email}
      </TableCell>

      <TableCell className="py-4 border-b  text-center  text-gray-500">
        {row.created_at}
      </TableCell>

      <TableCell className="border-b  border-gray-200 ">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => console.log("Edit", row.id)}
            className="p-2 rounded-full border border-gray-300 bg-gray-950 flex items-center space-x-1 text-white hover:text-gray-200 transition-colors"
            title="Assign"
          >

            <Zap size={17} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableListRow;
