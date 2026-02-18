import SideBarMenuItems from "./SideBarMenuItems";

export default function SideBar() {
  return (
    <aside className="w-64 h-screen border-r bg-background ">
      {/* Logo / Header */}

      <div className="flex items-center justify-start ml-3 mt-2">
        <img src="/leaf-logo.svg" alt="SmartPlant Logo" className="w-7 h-7 mb-2 mt-2" />

        <div className="ml-2 text-lg font-semibold">Plant Smart</div>
      </div>
      <hr className="my-2 border-gray-300" />


      {/* Menu Items */}
      <SideBarMenuItems />
    </aside>
  );
}
