"use client"

import { Table, TableBody } from "@/components/ui/table";
import TableListHead from "./blocks/tables/TableListHead";
import TableListRow from "./blocks/tables/TableListRow";
import TableListFilterForm from "./blocks/tables/TableFIlterForm";

const users = [
    { id: "1", name: "John Doe", email: "john@example.com", created_at: "2024-01-01" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", created_at: "2024-01-05" },
     { id: "2", name: "Jane Smith", email: "jane@example.com", created_at: "2024-01-05" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", created_at: "2024-01-05" },
];

function UserList() {
    return (
        /* 1. Centering Container: mx-auto centers it, w-full makes it responsive */
        <div className="w-full max-w mx-auto p-4">
            
            {/* 2. Table Wrapper: This ensures the 100% width and grid alignment */}
            <div className="rounded border border-gray-200">
                <Table className="w-full">
                    <TableListHead />
           
                    <TableBody>
                       <TableListFilterForm />
                        {users.map((user) => (
                            <TableListRow key={user.id} row={user} />
                        ))}
                    </TableBody>
                </Table>
            </div>
            
        </div>
    )
}

export default UserList