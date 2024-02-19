import Checkbox from "../ui/input/Checkbox";
import InputText from "../ui/input/Text";
import { useDispatch } from "react-redux";
import { editField } from "../../redux/actions";

function CheckBoxes({ ...props }) {
  const dispatch = useDispatch();

  //to change question
  const addNewOption = () => {
    dispatch(
      editField(props.fieldId, {
        options: [
          ...props.options,
          {
            id:
              props.options.reduce(
                (maxId, option) => Math.max(option.id, maxId),
                -1
              ) + 1,
            label: `New Option`,
          },
        ],
      })
    );
  };

  //to change question
  const editOption = (optionId, optionLabel) => {
    dispatch(
      editField(props.fieldId, {
        options: props.options?.map((option) =>
          option.id === optionId ? { ...option, label: optionLabel } : option
        ),
      })
    );
  };

  //to change question
  const removeOption = (optionId) => {
    dispatch(
      editField(props.fieldId, {
        options: props.options?.filter((option) => option.id !== optionId),
      })
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      {props.options?.map((option, index) => (
        <div className="flex gap-x-4 items-center">
          <Checkbox disabled key={`option-${index}`} value={option.id} />
          <InputText
            onChange={(e) => editOption(option.id, e.target.value)}
            value={option.label}
          />
          {props.options.length > 1 && (
            <div
              onClick={() => removeOption(option.id)}
              className="text-red-500 hover:text-red-600 cursor-pointer h-fit w-fit"
            >
              Remove
            </div>
          )}
        </div>
      ))}
      {props.options?.length < 4 && (
        <div className="flex items-center gap-x-4">
          <Checkbox disabled />
          <div
            onClick={addNewOption}
            className="cursor-pointer hover:bg-slate-200 bg-slate-100 border py-2 px-3 rounded-md flex items-center gap-x-3 text-slate-600"
          >
            Add option
            <img
              className="w-5 h-5 opacity-70 hover:opacity-55 cursor-pointer"
              alt="add icon"
              src="assets/icons/add.png"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckBoxes;
