"use client";

import { templateSchema } from "@/app/dashboard/_form/templateSchema";
import React, { createContext, useContext, useState } from "react";
import { z } from "zod";

interface ITemplatePreviewContext {
  templateState: z.infer<typeof templateSchema> | null;
  updateTemplateState: (value: z.infer<typeof templateSchema>) => void;
}

const TemplatePreviewContext = createContext<any>(
  null
);

export const TemplatePreviewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [templateState, setTemplateState] = useState<z.infer<
    typeof templateSchema
  > | null>(null);

  const updateTemplateState = (value: z.infer<typeof templateSchema>) =>
    setTemplateState((prevState) => value);

  return (
    <TemplatePreviewContext.Provider
      value={{ templateState, updateTemplateState }}
    >
      {children}
    </TemplatePreviewContext.Provider>
  );
};

export const useTemplatePreview = () => {
  const context = useContext(TemplatePreviewContext);

  if (!context)
    console.error("context should be within UpdateTemplateProvider");

  return context;
};
