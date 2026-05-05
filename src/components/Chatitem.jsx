import PropTypes from "prop-types";

export default function Chatitem({ message }) {
  return (
    <div className="p-5 bg-gray-200 rounded-xl w-fit">
      <p>{message}</p>
    </div>
  );
}

Chatitem.propTypes = {
  message: PropTypes.string,
}


