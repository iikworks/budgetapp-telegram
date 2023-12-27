import { Outlet } from "react-router-dom";

export default function RootRage() {
  return <main className="m-4 text-sm">
    <Outlet />
  </main>;
}