"use client"

interface TableListHeadCellInterface {
  id: string;
  label: string;
}

export const HeadCells: readonly TableListHeadCellInterface[] = [
{
    id: "name",
    label: "Name"
},
{
    id: "email",
    label: "Email"
},
{
    id: "created_at",
    label: "Joined"
},
{
    id: "action",
    label: "Action"
},
]