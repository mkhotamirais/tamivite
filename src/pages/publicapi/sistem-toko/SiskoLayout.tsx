import { Container } from "@/components/wrapper";
import { Link, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useSisko } from "./useSisko";
import { Toaster } from "react-hot-toast";

export default function SiskoLayout() {
  const { cartItems } = useSisko();
  return (
    <div className="bg-gray-50">
      <Toaster />
      <Container>
        <div className="flex flex-col min-h-screen">
          <div className="z-50 bg-white sticky top-0 border-b h-16 flex items-center justify-between px-3">
            <Link to="/sisko" className="text-xl font-bold">
              Sisko
            </Link>
            <Link to="/sisko/cart">
              <Button variant={"secondary"} size={"icon"} className="relative rounded-full">
                <div className="absolute z-10 -right-1 -top-1 text-xs bg-red-500 p-1 leading-none rounded-full text-white">
                  {cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
                </div>
                <FaCartShopping className="size-5" />
              </Button>
            </Link>
          </div>
          <div className="p-3 grow">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}
