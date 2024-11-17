import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import CustomerNumberList from "../_customerNumberCollection";
import TemplatePreview from "../_templatePreview";

const BroadcastDetail = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex h-full">
        <TemplatePreview />
        <CustomerNumberList />
      </div>

      <div className="flex px-4 h-16 border-t items-center justify-end">
        <Button
          variant={"outline"}
          className="hover:bg-black hover:text-white border-slate-500"
        >
          <Send />
          <span>Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default BroadcastDetail;
