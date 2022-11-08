import Clock from "./Clock";
import SocialLinks from './SocialLinks'
const Footer = () => {
  return (
    <footer>
      <p>
        It's <Clock /> <br />
        Still not too late to send me a message:)
      </p>
      <a href="mailto:ryan.a.sereno@gmail.com">ryan.a.sereno@gmail.com</a>
      <div className="button-container-footer">
        <SocialLinks />
        
      </div>
    </footer>
  );
};
export default Footer;
