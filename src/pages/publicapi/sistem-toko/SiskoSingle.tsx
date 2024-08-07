import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSisko } from "./useSisko";
import { LoaderPulse } from "@/components/loader-pulse";
import { Button } from "@/components/ui/button";
import { FaCartPlus } from "react-icons/fa6";

export default function SiskoSingle() {
  const { id } = useParams();
  const { query, single, loadSingle, getSingle, setCartItems } = useSisko();

  const onClick = () => {
    const qty = 1;
    const checked = true;
    const createdAt = new Date().toISOString();
    const id = single?.product_id as string;
    const name = single?.product_name as string;
    const photo = single?.product_img as string;
    const price = single?.product_price as string;
    const weight = single?.product_weight as string;
    setCartItems({ id, name, photo, price, qty, weight, checked, createdAt });
  };

  useEffect(() => {
    if (id) {
      getSingle(id, query);
    }
  }, [getSingle, id, query]);

  if (loadSingle) return <LoaderPulse />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <img
        src={`https://sistemtoko.com/img/user/${query.type}/product/${single?.product_img}`}
        alt="image sisko"
        className="border rounded-lg object-contain object-center bg-gray-100"
      />
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="text-lg font-medium">Name: {single?.product_name}</div>
          <div className="text-2xl font-bold">Price: Rp{single?.product_price.split(".")[0]}</div>
          <div>Status: {single?.product_status}</div>
          <div>Weight: {single?.product_weight}</div>
          <div className="text-muted-foreground">Description {single?.product_description}</div>
        </div>
        <Button className="mt-8" onClick={onClick}>
          <FaCartPlus className="mr-2" /> Add to cart
        </Button>
      </div>
    </div>
  );
}
