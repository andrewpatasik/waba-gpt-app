"use client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { templateEditorSchema } from "./templateEditorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTemplatePreview } from "@/hooks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { componentsSchema } from "../../_form/templateSchema";

const TemplateEditor = () => {
  const { template, updateTemplate } = useTemplatePreview();
  const form = useForm<z.infer<typeof templateEditorSchema>>({
    resolver: zodResolver(templateEditorSchema),
  });

  const onChangeForm = (values: z.infer<typeof templateEditorSchema>) => {
    if (template) {
      let templateComponentUpdated = template.components.reduce(
        (collection: any, item) => {
          let itemUpdated = {
            ...item,
            text: values[
              item.type.toLowerCase() as "header" | "body" | "footer"
            ],
          };

          collection = [...collection, itemUpdated];
          console.log(collection);
          return collection;
        },
        []
      );

      updateTemplate({ ...template, components: templateComponentUpdated });
    }
  };

  return (
    <section className="flex flex-col border-l w-1/3 h-full ml-auto pt-6">
      {!template ? (
        <></>
      ) : (
        <>
          <div className="px-2 mb-3">
            <h1 className="text-2xl font-semibold tracking-tight">
              Template Editor
            </h1>
            <p className="text-sm text-slate-400 tracking-wide leading-snug">
              Edit your template to suit your best
            </p>
          </div>
          <Form {...form}>
            <form
              onChange={form.handleSubmit(onChangeForm)}
              className="px-2 flex flex-col space-y-4"
            >
              {template.components.map((item, index) => (
                <FormField
                  defaultValue={item.text}
                  key={index}
                  control={form.control}
                  name={item.type.toLowerCase() as "header" | "body" | "footer"} // should be dynamic based on type
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <p className="first-letter:uppercase">
                          {item.type.toLowerCase()}
                        </p>
                      </FormLabel>
                      <FormControl>
                        {item.type === "HEADER" ? (
                          <Input {...field} />
                        ) : (
                          <Textarea {...field} rows={5} />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default TemplateEditor;
