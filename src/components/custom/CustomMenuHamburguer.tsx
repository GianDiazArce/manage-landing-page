interface Props {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const CustomMenuHamburguer: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <div onClick={onClick} className={isOpen ? "change" : ""}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  );
};
