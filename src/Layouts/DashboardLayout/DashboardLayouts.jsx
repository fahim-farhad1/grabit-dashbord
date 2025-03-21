import { Outlet } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import SideBar from "../../Shared/SideBar/SideBar";

const DashboardLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-[240px] mt-[70px]">
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

export default DashboardLayouts;
