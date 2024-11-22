import CustomerNumberList from "../_customerNumberCollection";
import TemplatePreview from "../_templatePreview";
import RenderSaveTemplateButton from "./renderSaveTemplateButton";

const TemplateDetail = () => {

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex h-full">
        <TemplatePreview />
        <CustomerNumberList />
      </div>

      <RenderSaveTemplateButton />
    </div>
  );
};

export default TemplateDetail;
