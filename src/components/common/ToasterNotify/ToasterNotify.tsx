import { cn } from "@/lib/clsx.lib";
import { FC } from "react";
import { Toaster } from "sonner";

interface ToasterNotifyProps {
  className?: string;
}

const ToasterNotify: FC<ToasterNotifyProps> = ({ className }) => {
  return <Toaster className={cn(className)} position="top-right" />;
};

export default ToasterNotify;
