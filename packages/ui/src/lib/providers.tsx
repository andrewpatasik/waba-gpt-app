"use client";

import { TemplatePreviewProvider } from "@/hooks/context/templatePreviewContext";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TemplatePreviewProvider>{children}</TemplatePreviewProvider>;
};
