import CampaignForm from "./_form";
import ProductList from "./_productList";
import TemplateDetail from "./_templateDetail";

const Page = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-2/3 h-full space-y-8 px-4 pt-6 border-r">
        <ProductList />
        <CampaignForm />
      </div>
      <TemplateDetail />
    </div>
  );
};

export default Page;
