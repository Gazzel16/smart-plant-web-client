"use client";

import { Input } from "@/components/ui/input";
import { TableRow, TableCell } from "@/components/ui/table";

interface TableListFilterFormProps {
  filters: {
    micro_sensor?: string;
    micro_motor?: string;
    email?: string;
    created_at?: string;
  };
  updateFilter: (key: "micro_motor" | "micro_sensor"  | "email" | "created_at", value: string) => void;
}
function TableListFilterForm({
  filters,
  updateFilter,
}: TableListFilterFormProps) {
  return (
    <TableRow>
      <TableCell className="p-2 border-b  border-gray-200">
        <Input
          value={filters.micro_sensor}
          onChange={(e) => updateFilter("micro_sensor", e.target.value)}
          placeholder="Filter Micro Sensor..."
          className="text-center h-8 text-xs bg-white w-full"
        />
      </TableCell>

      <TableCell className="p-2 border-b  border-gray-200">
        <Input
          value={filters.micro_motor}
          onChange={(e) => updateFilter("micro_motor", e.target.value)}
          placeholder="Filter Micro Motor..."
          className="text-center h-8 text-xs bg-white w-full"
        />
      </TableCell>

      <TableCell className="p-2 border-b  border-gray-200">
        <Input
          value={filters.email}
          onChange={(e) => updateFilter("email", e.target.value)}
          placeholder="Filter Email..."
          className="text-center h-8 text-xs bg-white w-full"
        />
      </TableCell>

      <TableCell className="p-2 border-b  border-gray-200">
        <Input
          value={filters.created_at}
          onChange={(e) => updateFilter("created_at", e.target.value)}
          placeholder="Filter Joined..."
          className="text-center h-8 text-xs bg-white w-full"
        />
      </TableCell>

      <TableCell className="p-2 border-b border-gray-200 bg-gray-50/30" />
    </TableRow>
  );
}

export default TableListFilterForm;
