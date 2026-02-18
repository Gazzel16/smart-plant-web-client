"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItems, { MenuItemTypes } from "./MenuItems";
import { cn } from "@/lib/utils";

 function SideBarMenuItems() {
  const pathname = usePathname();

  const renderMenuItem = (item: MenuItemTypes) => {
    const isActive = pathname === item.href;

    return (
      <div key={item.id}>
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg m-3 px-3 py-2 text-sm text-black font-sans transition-colors hover:bg-muted ",
            isActive && "bg-muted"
          )}
        >
          {item.icon && <item.icon className="w-4 h-4" />}
          {item.title}
        </Link>

        {item.children && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map(renderMenuItem)}
          </div>
        )}
      </div>
    );
  };

  return <div className="space-y-2">{MenuItems.map(renderMenuItem)}</div>;
}

export default SideBarMenuItems