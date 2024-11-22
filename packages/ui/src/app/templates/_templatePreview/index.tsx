"use client";

import { useTemplatePreview } from "@/hooks";
import { z } from "zod";
import { templateSchema } from "../_form/templateSchema";
import { Fragment } from "react";

const TemplatePreviewCard = ({
  props,
}: {
  props: z.infer<typeof templateSchema>;
}) => {
  const cardItem = props.components.reduce((collection: any, item, index) => {
    let element;

    switch (item.type) {
      case "BODY":
        element = <p>{item.text}</p>;
        break;
      case "FOOTER":
        element = <p className="mt-3 text-sm text-slate-400">{item.text}</p>;
        break;

      // HEADER
      default:
        element = <h1 className="text-lg mb-1 font-semibold">{item.text}</h1>;
        break;
    }

    return [...collection, element];
  }, []);

  return (
    <div className="relative bg-white w-3/4 border rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl shadow-sm px-4 py-4">
      {cardItem.map((item: any, index: number) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );
};

const TemplatePreview = () => {
  const { template } = useTemplatePreview();

  return (
    <section className="w-full bg-slate-100 flex flex-col flex-1">
      <div className="mb-3 pt-6 px-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Template Preview
        </h1>
      </div>

      <article className="flex flex-col items-center mt-24">
        {!template ? (
          <p className="text-slate-400">
            your template will be displayed here.
          </p>
        ) : (
          <TemplatePreviewCard props={template} />
        )}
      </article>
    </section>
  );
};

export default TemplatePreview;
