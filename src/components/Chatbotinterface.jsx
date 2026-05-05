import PropTypes from "prop-types";
import Chatcontent from "./Chatcontent";
import Chatheader from "./Chatheader";
import Chatinput from "./Chatinput";

export default function Chatbotinterface({
  promptInputValue,
  setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
}) {
  return (
    <div className="bg-white w-full max-w-[560px]">
      <Chatheader />
      <Chatcontent chatResponses={chatResponses} />
      <Chatinput
        promptInputValue={promptInputValue}
        setPromptInputValue={setPromptInputValue}
        chatResponses={chatResponses}
        setChatResponses={setChatResponses}
        action={action}
      />
    </div>
  );
}

Chatbotinterface.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func,
  action: PropTypes.func,
};
