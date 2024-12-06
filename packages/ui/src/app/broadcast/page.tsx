import ContactCollection from "./_contactCollection";
import TemplateScheduler from "./_templateScheduler";

const Page = () => {
  return (
    <section className="flex flex-row w-full">
      <ContactCollection />
      <TemplateScheduler />
    </section>
  );
};

export default Page;
