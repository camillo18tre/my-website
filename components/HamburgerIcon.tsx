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
      className="relative z-10 block cursor-pointer lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? 'Close' : 'Menu'}
    </button>
  );
};
