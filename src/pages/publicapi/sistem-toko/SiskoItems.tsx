import { Card, CardContent } from "@/components/ui/card";
import { ProductValues, useSisko } from "./useSisko";
import { Button } from "@/components/ui/button";
import { FaCartPlus, FaExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function SiskoItems({ item }: { item: ProductValues }) {
  const { setCartItems } = useSisko();
  console.log(item);

  const onClick = () => {
    const qty = 1;
    const checked = true;
    const createdAt = new Date().toISOString();
    const { id, name, photo, price, weight } = item;
    setCartItems({ id, name, photo, price, qty, weight, checked, createdAt });
    toast.success(`Add ${item.name} success`);
  };

  return (
    <Card className="relative group overflow-hidden">
      <Button
        onClick={onClick}
        variant={"outline"}
        size={"icon"}
        className={`z-10 absolute rounded-full top-2 right-2 translate-x-16 group-hover:translate-x-0 transition`}
      >
        <FaCartPlus />
      </Button>
      <Button
        asChild
        variant={"outline"}
        size={"icon"}
        className={`z-10 absolute rounded-full top-2 left-2 -translate-x-16 group-hover:translate-x-0 transition`}
      >
        <Link to={`product/${item.id}`}>
          <FaExclamation />
        </Link>
      </Button>
      <img src={item.photo} alt="image sisko" />
      <CardContent className="p-2 text-xl font-semibold">
        <h2 className="capitalize text-muted-foreground text-lg">{item.name}</h2>
        <p>Rp{item.price}</p>
      </CardContent>
    </Card>
  );
}
