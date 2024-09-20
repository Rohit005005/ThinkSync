"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function WorkspaceList() {
  const { user } = useUser();
  const [workspaceList, setworkspaceList] = useState([]);
  return (
    <div className="p-10">
      <div className=" flex justify-between">
        <h1>Hello {user?.fullName}</h1>
        <Link href={"/createworkspace"}>
        <Button>+</Button>
        </Link>
      </div>

      <div className="flex justify-between mt-10">
        <div>
          <h2>Workspaces</h2>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>

      {WorkspaceList?.length==0?
      <div className="mt-10">
        <h1>Create new workspace</h1>
        <Link href={"/createworkspace"}>
        <Button>+ New Workspace</Button>
        </Link>
      </div>
      :
      <div>
        Workspace list
      </div>
      }
    </div>
  );
}

export default WorkspaceList;
