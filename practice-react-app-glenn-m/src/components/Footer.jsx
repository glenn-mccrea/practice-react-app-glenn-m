const Footer = () => {
  let dateYear = new Date().getFullYear();

  return (
    <span>
      <footer>&copy; {dateYear} Glenn McCrea</footer>
    </span>
  );
};

export default Footer;
