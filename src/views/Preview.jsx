import MainLayout from "../components/layout/main";
import Header from "../components/ui/Header";
import { useSelector } from "react-redux";
import Card from "../components/ui/Card";
import Queston from "../components/question/Question";
import TextArea from "../components/ui/input/TextArea";
import CheckBoxes from "../components/question/Checkboxes";
import InputText from "../components/ui/input/Text";
import RadioButtons from "../components/question/RadioButtons";

function Preview() {
  //we need to show only present element form the reducer
  const form = useSelector((state) => state.formReducer.present);

  return (
    <MainLayout>
      <Header>Preview</Header>
      <div className="flex flex-col gap-y-4 py-3">
        {form?.fields?.map((field, index) => (
          <Card key={index}>
            <Queston
              preview
              questionText={field.questionText}
              fieldId={field.id}
              questionType={field.type}
            />
            {field.type === "text" ? (
              <InputText placeholder="Enter Text" disabled />
            ) : field.type === "paragraph" ? (
              <TextArea placeholder="Enter Text" disabled />
            ) : field.type === "checkbox" ? (
              <CheckBoxes preview fieldId={field.id} options={field.options} />
            ) : (
              <RadioButtons
                preview
                fieldId={field.id}
                options={field.options}
              />
            )}
          </Card>
        ))}
      </div>
    </MainLayout>
  );
}

export default Preview;
