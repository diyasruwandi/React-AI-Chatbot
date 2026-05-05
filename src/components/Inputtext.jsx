import PropTypes from "prop-types";

export default function Inputtext({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
}) {
  return (
    <input
      value={promptInputValue}
      onChange={(event) => setPromptInputValue(event.target.value)}
      onKeyUp={(event) => {
        if (event?.keyCode === 13) {
          setChatResponses([...chatResponses, promptInputValue]);
          action();
        }
      }}
      className="border p-3 w-full focus:outline-none rounded-lg"
    />
  );
}

Inputtext.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
};
