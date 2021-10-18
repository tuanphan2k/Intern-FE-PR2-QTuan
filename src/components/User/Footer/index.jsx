import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import logoPayment from '../../../assets/logo/pay.png';
import "./styles.scss";
const footerContents = [
  "About us",
  "store location",
  "contact",
  "support",
  "policy",
  "Faqs",
];

const socialIcons = [
  <TwitterOutlined />,
  <FacebookOutlined />,
  <InstagramOutlined />,
];

function Footer() {
  function renderFooterContent() {
    return footerContents.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  }

  function renderSocialList() {
    return socialIcons.map((item, index) => {
      return <li className = 'social_list--item' key={index}>{item}</li>;
    });
  }

  return (
    <footer className="footer">
      <section className="footer__content container-1">
        <ul className="content__list">{renderFooterContent()}</ul>
        <ul className="social_list">{renderSocialList()}</ul>
      </section>
      <section className = 'footer__contact container-1'>
        <p className = 'contact__text'>
          © 2021 lezada. All Rights Reserved | <span>(+00) 123 567990</span> | contact@lezada.com
        </p>
        <img src= {logoPayment} alt="logo-payment" />
      </section>
    </footer>
  );
}

export default Footer;
