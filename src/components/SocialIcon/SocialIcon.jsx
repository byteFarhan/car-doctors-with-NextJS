const SocialIcon = ({ children }) => {
  return (
    <>
      <a
        href="#"
        target="_blank"
        className="transition-transform duration-300 hover:scale-125"
      >
        {children}
      </a>
    </>
  );
};

export default SocialIcon;
