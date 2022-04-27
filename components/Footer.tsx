const Footer = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <p>Footer</p>
      <p className="text-sm">© {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
