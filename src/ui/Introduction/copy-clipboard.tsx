"use client";

import { Check, Clipboard } from "lucide-react";
import { useState } from "react";

const CopyClipboard = () => {
  const [clipboard, setClipboard] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText("miguel_santos96@hotmail.com");
    setClipboard(true);

    setTimeout(() => {
      setClipboard(false);
    }, 5000);
  };

  return (
    <div
      onClick={copyToClipboardHandler}
      className="bg-foreground text-background lowercase py-1 px-3 rounded-full flex gap-1 items-center cursor-pointer transition-colors hover:bg-foreground/90"
    >
      <span>miguel_santos96@hotmail.com</span>
      {!clipboard ? <Clipboard size={18} /> : <Check size={18} />}
    </div>
  );
};

export default CopyClipboard;
