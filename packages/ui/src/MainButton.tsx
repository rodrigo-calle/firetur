type Props = {
  text: string;
  action: () => void;
};
const MainButton = ({ text, action }: Props) => {
  return (
    <button
      className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex justify-center items-center p-3"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default MainButton;
