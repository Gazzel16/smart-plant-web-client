"use client";

import { Button } from "../ui/button";
import { usePagination } from "@/hooks/usePagination";
import { Table, TableBody } from "@/components/ui/table";
import { dummyUsers } from "@/lib/dummy-data";
import { useTableFilter } from "@/hooks/useTableFilter";

import TableListHead from "./components/tables/TableListHead";
import TableListRow from "./components/tables/TableListRow";
import TableListFilterForm from "./components/tables/TableFIlterForm";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function UserList() {
  const { filters, filteredData, updateFilter } = useTableFilter(dummyUsers, {
    name: "",
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

        <div>Total Users: {filteredData.length}</div>

        <div className="flex items-center justify-end gap-4 mt-2">
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </Button>

          <Select
            value={currentPage.toString()}
            onValueChange={(value) => goToPage(Number(value))}
          >
            <SelectTrigger className="w-32">
              <SelectValue
                placeholder={`Page ${currentPage} of ${totalPages}`}
              />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <SelectItem key={page} value={page.toString()}>
                    Page {page} of {totalPages}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>

          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserList;
