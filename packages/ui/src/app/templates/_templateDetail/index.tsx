import TemplateEditor from "./_templateEditor";
import TemplatePreview from "./_templatePreview";
import RenderSaveTemplateButton from "./renderSaveTemplateButton";

const TemplateDetail = () => {

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex h-full">
        <TemplatePreview />
        <TemplateEditor />
      </div>

      <RenderSaveTemplateButton />
    </div>
  );
};

export default TemplateDetail;
