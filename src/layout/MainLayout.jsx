//rrd imports
import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className=" bg-white h-[1000px] w-full">
      <div className="flex flex-row mx-auto container p-4 w-[1800px] pt-[100px] h-full gap-24">
        <header className="h-[700px]">
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
