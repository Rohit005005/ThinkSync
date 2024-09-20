"use client";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "@/app/_components/EmojiPickerComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmileIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {
  const [workspaceName, setworkspaceName] = useState();
  const [coverImage, setCoverImage] = useState("/event.png");

  return (
    <div className="p-10">
      {/* image cover */}
      <CoverPicker setNewCover={(v) => setCoverImage(v)}>
        <div className="relative group">
          <h1 className="hidden absolute p-4 w-full h-full items-center justify-center group-hover:flex">
            Change cover
          </h1>
          <div className="group-hover:opacity-40">
            <Image
              src={coverImage}
              width={400}
              height={400}
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>
      </CoverPicker>

      <div className="mt-10">
        <h1>Create a new workspace</h1>
        <h1>shared space h collaborate kro mazee kro !!!!!</h1>
        <div className="flex gap-2 items-center">
          <EmojiPickerComponent>
            <Button>
              <SmileIcon />
            </Button>
          </EmojiPickerComponent>
          <Input
            placeholder="Enter name"
            onChange={(e) => setworkspaceName(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <Button disabled={!workspaceName?.length}>Create</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
