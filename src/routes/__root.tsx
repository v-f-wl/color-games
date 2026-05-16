import { Outlet } from "@tanstack/react-router";


const RootComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <Outlet />
    </div>
  );
}

export default RootComponent;