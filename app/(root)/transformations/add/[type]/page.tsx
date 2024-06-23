import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformationType = transformationTypes[type];

  return (
    <Header
      title={transformationType.title}
      subtitle={transformationType.subTitle}
    />
  );
};

export default AddTransformationTypePage;
