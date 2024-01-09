"use client";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

const UploadButton = () => {
  const [isOpen, SetIsopen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          SetIsopen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => SetIsopen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>example content</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
