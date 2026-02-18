"use client";

import { usePagination } from "@/hooks/usePagination";
import { Table, TableBody } from "@/components/ui/table";
import Pagination from "@/components/hardware/micro-nano/components/pagination/Pagination";
import { dummyMicroNano } from "@/lib/dummy-data";
import { useTableFilter } from "@/hooks/useTableFilter";
import TableListHead from "./components/tables/TableListHead";
import TableListRow from "./components/tables/TableListRow";
import TableListFilterForm from "./components/tables/TableFIlterForm";

function MicroNanoList() {
  const { filters, filteredData, updateFilter } = useTableFilter(dummyMicroNano, {
    micro_sensor: "",
    micro_motor: "",
    email: "",
    created_at: "",
  });

  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination({
    data: filteredData,
    pageSize: 10,
  });

  return (
    <div className="w-full max-w mx-auto p-4">
      <div className="rounded border border-gray-200">
        <Table className="w-full">
          <TableListHead />
          <TableBody>
            <TableListFilterForm
              filters={filters}
              updateFilter={updateFilter}
            />
            {paginatedData.map((dummyUsers) => (
              <TableListRow key={dummyUsers.id} row={dummyUsers} />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between mt-2">

        <div>
          <span className="italic">Micro Nano Linkeds: </span>
          <span className="font-bold">{filteredData.length} </span>
          <span className="italic">users</span>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          onNextPage={nextPage}
          onPrevPage={prevPage}
        />
      </div>
    </div>
  );
}

export default MicroNanoList;
