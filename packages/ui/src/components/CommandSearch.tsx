import {
  Command,
  CommandInput,
} from "@/components/ui/command";

interface ICommandSearch {
  inputValue: string;
}

const CommandSearch = ({ inputValue }: ICommandSearch) => {
  return (
    <div className="mx-1">
      <Command className="h-auto bg-slate-100 rounded-xl border-b-0">
        <CommandInput placeholder="Search chat..." />
      </Command>
    </div>
  );
};

export default CommandSearch;
