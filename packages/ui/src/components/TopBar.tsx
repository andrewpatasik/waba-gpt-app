import { Zap, Dot, User, Phone } from "lucide-react";

type topBarProps = {
  data: any;
};

const TopBar = ({ data }: topBarProps) => {

  return (
    <nav className="fixed w-full h-11 border-b flex items-center p-2">
      <p className="text-sm flex space-x-1 items-center text-slate-400">
        <Zap className="w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-semibold">100 credits</span>
      </p>
      <Dot className="text-slate-400" />
      <p className="flex space-x-1 items-center text-sm text-slate-400">
        <User className="w-4" />
        <span>{data.verified_name}</span>
      </p>
      <Dot className="text-slate-400" />
      <p className="flex space-x-1 items-center text-sm text-slate-400">
        <Phone className="w-4" />
        <span>{data.display_phone_number}</span>
      </p>
      {/* quality rating here */}
    </nav>
  );
};

export default TopBar;
