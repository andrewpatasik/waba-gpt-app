import { Zap } from "lucide-react";

const TopBar = () => {
  return (
    <nav className="fixed w-full h-11 border-b flex items-center p-2">
      <p className="text-sm flex space-x-1 items-center text-slate-400">
        <Zap className="w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-semibold">100 credits</span>
      </p>
    </nav>
  );
};

export default TopBar;
