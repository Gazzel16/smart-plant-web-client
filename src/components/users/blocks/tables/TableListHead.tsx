"use client";

import { HeadCells } from "./TableListHeadCell";
import { TableRow, TableHead } from "@/components/ui/table";

function TableListHead() {
  return (
    <thead>
      <TableRow>
        {HeadCells.map((cell) => (
          <TableHead 
            key={cell.id} 
            className="py-4 bg-gray-950  border-y border-l border-r border-gray-50  text-white text-center"
          >
            {cell.label}
          </TableHead>
        ))}
      </TableRow>
    </thead>
  );
}

export default TableListHead;