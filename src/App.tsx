import { Outlet, ScrollRestoration } from "react-router-dom";
import { useMm } from "./hooks/useMm";
import { MainMenu } from "./components/MainMenu";
import { Toaster } from "react-hot-toast";
import { MeButtons } from "./components/MeButtons";

export default function App() {
  const { mm, closeMm } = useMm();
  const onMouseEnter = () => {
    if (mm) closeMm();
  };
  return (
    <>
      <main onMouseEnter={onMouseEnter}>
        <Outlet />
      </main>
      <MeButtons />
      <MainMenu />
      <ScrollRestoration />
      <Toaster />
    </>
  );
}
