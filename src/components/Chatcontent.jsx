import PropTypes from "prop-types";
import Chatitem from "./Chatitem";

export default function Chatcontent ({ chatResponses }) {
  return (
    <div className="flex flex-col overflow-y-scroll gap-5 w-full h-[500px] bg-yellow-100 border p-5">
      {chatResponses?.map((chatResponse, index) => 
        chatResponse.type === 'user' ? (
          <div className="w-full flex justify-end">
            <Chatitem message={chatResponse.message} key={index} />
          </div>
        ) : (
          <div className="w-full flex justify-start">
            <Chatitem message={chatResponse.message} key={index} />
          </div>
        )
      )}
    </div>
  );
}

Chatcontent.propTypes = {
  chatResponses: PropTypes.array, //kenpa array soalnya isi nya history chat kita
}

