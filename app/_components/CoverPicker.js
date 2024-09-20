import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CoverOption from "../_shared/CoverOption";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function CoverPicker({ children, setNewCover }) {
  const [slectedCover, setSelectedCover] = useState();
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update cover</DialogTitle>
          <DialogDescription>
            <div className="grid grid-cols-3 gap-10">
              {CoverOption?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCover(item?.imageUrl)}
                  className={`${
                    slectedCover == item?.imageUrl && "border-white border-2"
                  }`}
                >
                  <Image src={item?.imageUrl} width={200} height={140} />
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={()=> setNewCover(slectedCover)}>
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CoverPicker;
