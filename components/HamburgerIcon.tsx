interface HamburgerIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      className="block xl:hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? 'Close' : 'Menu'}
    </button>
  );
};
