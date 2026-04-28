import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from '../components/header/Header'

const RootComponent = () => {
  return ( 
    <>
        <Header/>
        <Outlet/>
        <TanStackRouterDevtools position="bottom-right" />
    </> );
}
 
export default RootComponent;