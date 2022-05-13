interface Props extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  inverted?: boolean;
}

export const CustomButton: React.FC<Props> = ({ text, inverted, ...rest }) => {
  return (
    <button
      className={`${
        inverted
          ? "bg-gray-light text-red-bright shadow-blue-very-dark/50 hover:text-opacity-50"
          : "bg-red-bright text-gray-light shadow-red-bright/50 hover:opacity-50"
      } rounded-full py-2 px-6 text-sm shadow-md`}
      {...rest}
    >
      {text}
    </button>
  );
};
