"use client";

import { Input } from "@/components/ui/input";
import { TableRow, TableCell } from "@/components/ui/table";

function TableListFilterForm() {
  return (
    <TableRow >
      {/* 1. Name Filter Cell */}
      <TableCell className="p-2 border-b  border-gray-200">
        <Input placeholder="Filter Name..." className="h-8 text-xs bg-white w-full" />
      </TableCell>
      
      {/* 2. Email Filter Cell */}
      <TableCell className="p-2 border-b  border-gray-200">
        <Input placeholder="Filter Email..." className="h-8 text-xs bg-white w-full" />
      </TableCell>
      
      {/* 3. Joined Filter Cell */}
      <TableCell className="p-2 border-b  border-gray-200">
        <Input placeholder="Filter Joined..." className="h-8 text-xs bg-white w-full" />
      </TableCell>

      {/* 4. Action Placeholder Cell (Important for horizontal alignment) */}
      <TableCell className="p-2 border-b border-gray-200 bg-gray-50/30" />

    </TableRow>
  );
}

export default TableListFilterForm;