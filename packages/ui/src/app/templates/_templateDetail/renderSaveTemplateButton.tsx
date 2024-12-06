"use client";

import { z } from "zod";
import { templateSchema } from "../_form/templateSchema";
import { useTemplatePreview } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { postData } from "@/lib/utils";

const RenderSaveTemplateButton = () => {
  const { template } = useTemplatePreview();

  const handleSaveTemplateEvent = async (
    templatePayload: z.infer<typeof templateSchema>
  ) => {
    try {
      if (!templatePayload) return;

      const { data, error } = await postData(
        "message_templates",
        templatePayload
      );

      if (error) throw new Error(error);

      if (data.status === "PENDING")
        console.info("Template successfully created. Waiting for review.");
      else console.warn("Failed to create Template.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex px-4 h-16 border-t items-center justify-end">
      <Button
        onClick={() =>
          handleSaveTemplateEvent(template as z.infer<typeof templateSchema>)
        }
        variant={"outline"}
        className="hover:bg-black hover:text-white border-slate-500"
        disabled={!template}
      >
        <Send />
        <span>Save Template</span>
      </Button>
    </div>
  );
};

export default RenderSaveTemplateButton;
