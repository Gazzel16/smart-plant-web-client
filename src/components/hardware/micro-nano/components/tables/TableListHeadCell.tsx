"use client"

interface TableListHeadCellInterface {
  id: string;
  label: string;
}

export const HeadCells: readonly TableListHeadCellInterface[] = [
{
    id: "nano-sensor",
    label: "Nano Sensor"
},
{
    id: "nano-motor",
    label: "Nano Motor"
},
{
    id: "email",
    label: "Email"
},
{
    id: "created_at",
    label: "Assigned"
},
{
    id: "action",
    label: "Action"
},
]