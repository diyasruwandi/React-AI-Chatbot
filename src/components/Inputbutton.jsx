import { Send } from "lucide-react";
import PropTypes from "prop-types";
const Inputbutton = ({
  promptInputValue,
  // setPromptInputValue,
  chatResponses,
  setChatResponses,
  action,
}) => {
  return (
    <div className="bg-blue-600 p-3 rounded-xl hover:cursor-pointer active:scale-95 duration-300"
    onClick={() => { setChatResponses([... //agar tombol berfungsi saat diklik dan memunculkan di chatbot.
      chatResponses, //chatResponses: untuk menampilkan chat" yang sebelumnya. promptInputValue: untuk menampilkan pesan yang baru diinput oleh user
    { type: 'user', message:promptInputValue },
    ])
    action()
    }}
  > 
      <Send color="white" />
    </div>
  );
}

Inputbutton.propTypes = {
  promptInputValue: PropTypes.string,
  setPromptInputValue: PropTypes.func,
  chatResponses: PropTypes.array,
  setChatResponses: PropTypes.func, 
  action: PropTypes.func,
}

export default Inputbutton