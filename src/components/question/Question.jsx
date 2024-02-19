import { editField } from "../../redux/actions";
import Dropdown from "../ui/input/Dropdown";
import CustomInput from "../ui/input/Text";
import { useDispatch } from "react-redux";

function Queston({ questionText, fieldId, questionType, preview }) {
  const dispatch = useDispatch();
  const QuestionTypes = [
    { value: "text", label: "Text" },
    { value: "paragraph", label: "Paragraph" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio button" },
  ];

  //to change questions type
  const changeQuestionType = (fieldId, type) => {
    let payload = { type, options: [] };

    if (type === "checkbox" || type === "radio") {
      payload.options = [{ label: "New Option", id: 1 }];
    }
    dispatch(editField(fieldId, payload));
  };

  //to change question
  const changeQuestionText = (fieldId, text) => {
    dispatch(editField(fieldId, { questionText: text }));
  };

  return (
    <div className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 md:gap-x-3 items-start md:items-center">
      {preview ? (
        questionText
      ) : (
        <CustomInput
          value={questionText}
          onChange={(e) => changeQuestionText(fieldId, e.target.value)}
        />
      )}

      {!preview && (
        <div className="bg-slate-100 flex gap-2 min-w-[130px]">
          <Dropdown
            value={questionType}
            onChange={(e) => changeQuestionType(fieldId, e.target.value)}
            options={QuestionTypes}
          />
        </div>
      )}
    </div>
  );
}

export default Queston;
