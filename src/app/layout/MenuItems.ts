// MenuItems.ts
import {
  Thermometer,
  Droplets,
  Users,
  Cpu,
  Waves,
  Microchip,
  Zap 
} from "lucide-react";

export type MenuItemTypes = {
  id: string;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: MenuItemTypes[];
  variant?: string;
  chipColor?: string;
  subtitle?: string;
};

const MenuItems: MenuItemTypes[] = [
  {
    id: crypto.randomUUID(),
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    id: crypto.randomUUID(),
    title: "Sensors",
    href: "/sensors",
    children: [
      {
        id: crypto.randomUUID(),
        icon: Cpu,
        title: "Soil",
        href: "/sensors/soil",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Thermometer,
        title: "Temperature",
        href: "/sensors/temperature",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Droplets,
        title: "Humidity",
        href: "/sensors/humidity",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Waves,
        title: "Water",
        href: "/sensors/water",
        variant: "outlined",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Users",
    href: "/user",
    children: [
      {
        id: crypto.randomUUID(),
        icon: Users,
        title: "Users",
        href: "/user",
        variant: "outlined",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Hardware",
    href: "/hardware/micro-nano",
    children: [
      {
        id: crypto.randomUUID(),
        icon: Microchip,
        title: "Micro Nano",
        href: "/hardware/micro-nano",
        variant: "outlined",
      },
      // {
      //   id: crypto.randomUUID(),
      //   icon: Zap ,
      //   title: "Micro Nano Motor",
      //   href: "/hardware/micro-nano-motor",
      //   variant: "outlined",
      // },
    ],
  },
];

export default MenuItems;
