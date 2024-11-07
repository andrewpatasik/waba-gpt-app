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

const CampaignForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { promoDescription: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Promo Detail
        </h1>
        <p className="text-sm text-slate-400 tracking-wide leading-snug">
          Describe your promo below and submit to our AI Agent to generate
          an optimized promotional message.
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
          <Button type="submit">
            <Sparkles />
            <span>Generate Promo</span>
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CampaignForm;
