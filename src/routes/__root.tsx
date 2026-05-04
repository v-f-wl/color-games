import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootComponent = () => {
  return ( 
    <>
        <Outlet/>
        <TanStackRouterDevtools position="bottom-right" />
    </> );
}
 
export default RootComponent;