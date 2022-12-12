const InputLabel = ({
  label,
  classess,
  isFloating,
}: {
  label: string;
  classess?: string;
  isFloating: boolean;
}) => {
  return (
    <label
      className={`input-label floating-label body2 ${
        isFloating ? " floating-label-top" : " "
      } ${classess ? classess : ""}`}
    >
      {label}
    </label>
  );
};

export default InputLabel;
