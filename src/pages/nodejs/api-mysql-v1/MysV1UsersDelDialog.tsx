import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { FormEvent } from "react";
import { useMysV1Users } from "./useMysV1";

export default function MysV1UsersDelDialog({ id }: { id: number }) {
  const { setUsers } = useMysV1Users();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/api-mysql-v1/users/${id}`);
      toast.success(response.data.message);
      setUsers();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Trash className="size-4 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>Thid action cannot be undone</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <DialogClose asChild>
            <Button type="submit" variant={"destructive"} size={"sm"}>
              Delete
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant={"outline"} size={"sm"}>
              Cancel
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
