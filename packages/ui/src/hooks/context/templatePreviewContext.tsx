"use client";

import { templateSchema } from "@/app/templates/_form/templateSchema";
import React, { createContext, useContext, useState } from "react";
import { z } from "zod";

interface ITemplatePreviewContext {
  template: z.infer<typeof templateSchema> | null;
  updateTemplate: (value: z.infer<typeof templateSchema>) => void;
}

const TemplatePreviewContext = createContext<ITemplatePreviewContext>({
  template: null,
  updateTemplate: () => {},
});

export const TemplatePreviewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [template, setTemplate] = useState<z.infer<
    typeof templateSchema
  > | null>(null);

  const updateTemplate = (value: z.infer<typeof templateSchema>) =>
    setTemplate(value);

  return (
    <TemplatePreviewContext.Provider value={{ template, updateTemplate }}>
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
