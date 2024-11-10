import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import CustomerNumberList from "../_customerNumberCollection";

const BroadcastDetail = () => {
  return (
    <div className="flex flex-col w-full">
      <CustomerNumberList />

      <div className="flex mt-auto px-4 h-16 border-t items-center justify-end">
        <Button variant={"default"}>
          <Send />
          <span>Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default BroadcastDetail;
