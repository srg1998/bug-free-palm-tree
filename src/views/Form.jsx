import MainLayout from "../components/layout/main";
import Card from "../components/ui/Card";
import Header from "../components/ui/Header";
import { useSelector, useDispatch } from "react-redux";
import Queston from "../components/question/Question";
import { addField, deleteField, redo, undo } from "../redux/actions";
import TextArea from "../components/ui/input/TextArea";
import CheckBoxes from "../components/question/Checkboxes";
import InputText from "../components/ui/input/Text";
import Toast from "../components/ui/Toast";
import { useState } from "react";
import RadioButtons from "../components/question/RadioButtons";

function Form() {
  const dispatch = useDispatch();

  //we need to show only present element form the reducer
  const form = useSelector((state) => state.formReducer.present);
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000); // Hide the toast after 3 seconds
  };
  //add new field and scroll to the new field
  const addNewField = () => {
    dispatch(
      addField({ questionText: "New Question", type: "text", options: [] })
    );

    // Scroll to bottom after a small delay
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  // to remove a field
  const removeField = (fieldId) => {
    if (form?.fields?.length === 1) {
      handleToast();
    } else {
      dispatch(deleteField(fieldId));
    }
  };

  // to undo a change
  const undoChange = () => {
    dispatch(undo());
  };

  // to redo a change
  const redoChange = () => {
    dispatch(redo());
  };

  return (
    <MainLayout>
      {showToast && (
        <Toast message="Should have atleast one question" type="error" />
      )}
      <div className="flex items-center justify-between">
        <Header>{form.name}</Header>
        <div className="flex gap-x-3 text-red-500 items-center">
          <div className="hover:text-red-600 cursor-pointer" onClick={undoChange}>
            Undo
          </div>
          <div className="hover:text-red-600 cursor-pointer" onClick={redoChange}>
            Redo
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {form?.fields?.map((field, index) => (
          <Card key={index}>
            <Queston
              questionText={field.questionText}
              fieldId={field.id}
              questionType={field.type}
            />
            {field.type === "text" ? (
              <InputText placeholder="Enter Text" disabled />
            ) : field.type === "paragraph" ? (
              <TextArea placeholder="Enter Text" disabled />
            ) : field.type === "checkbox" ? (
              <CheckBoxes fieldId={field.id} options={field.options} />
            ) : (
              <RadioButtons fieldId={field.id} options={field.options} />
            )}
            <div className="w-full flex justify-end">
              <img
                onClick={() => removeField(field.id)}
                className="w-7 h-7 hover:opacity-55 cursor-pointer"
                alt="add icon"
                src="assets/icons/delete.png"
              />
            </div>
          </Card>
        ))}
        <div className="flex justify-center items-center w-full py-3">
          <img
            onClick={addNewField}
            className="w-9 h-9 hover:opacity-55 cursor-pointer"
            alt="add icon"
            src="assets/icons/add.png"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Form;
