import { APP_NAME } from "@/lib/constanst/";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t ">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. ALL Right Reserverd
      </div>
    </footer>
  );
};

export default Footer;
