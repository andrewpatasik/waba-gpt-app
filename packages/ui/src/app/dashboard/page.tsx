import BroadcastDetail from "./_broadcastDetail";
import CampaignForm from "./_form";
import ProductList from "./_productList";

const Page = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-2/5 h-full space-y-10 px-4 pt-6 border-r">
        <ProductList />
        <CampaignForm />
      </div>
      <BroadcastDetail />
    </div>
  );
};

export default Page;
