// MenuItems.ts
import { Thermometer, Droplets, Users, Cpu, Waves } from "lucide-react";

export type MenuItemTypes = {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  href: string;
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
    href: "/sensor-iot",
    children: [
      {
        id: crypto.randomUUID(),
        icon: Cpu,
        title: "Soil",
        href: "/sensor-iot/soil",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Thermometer,
        title: "Temperature",
        href: "/sensor-iot/temperature",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Droplets,
        title: "Humidity",
        href: "/sensor-iot/humidity",
        variant: "outlined",
      },
      {
        id: crypto.randomUUID(),
        icon: Waves,
        title: "Water",
        href: "/sensor-iot/water",
        variant: "outlined",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Users",
    href: "/users",
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
];

export default MenuItems;
