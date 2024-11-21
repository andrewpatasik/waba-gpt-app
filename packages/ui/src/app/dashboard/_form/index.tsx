"use client";
import { Sparkles } from "lucide-react";
import {
  Form,
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./formSchema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { templateSchema } from "./templateSchema";
import { useTemplatePreview } from "@/hooks";

const CampaignForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      promoDescription:
        "Indulge in the perfect bite of heaven! Our freshly baked cookies, from classic chocolate chip to oatmeal raisin, are sure to satisfy your cravings.",
    },
  });

  const { updateTemplate } = useTemplatePreview();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const template: z.infer<typeof templateSchema> = {
      name: "Template Preview",
      language: "en_US",
      category: "MARKETING",
      components: [
        {
          type: "HEADER",
          format: "TEXT",
          text: "November Promo",
        },
        {
          type: "BODY",
          text: values.promoDescription,
        },
        {
          type: "FOOTER",
          text: "template created using WhatsApp API.",
        },
      ],
    };

    updateTemplate(template);
  };

  return (
    <section>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">Promo Detail</h1>
        <p className="text-sm text-slate-400 tracking-wide leading-snug">
          Describe your promo below and submit to generate an optimized
          promotional message.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="promoDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Promo Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your promo..."
                    className="w-full resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your Promo Description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full text-right">
            <Button type="submit">
              <Sparkles />
              <span>Generate Promo</span>
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CampaignForm;
