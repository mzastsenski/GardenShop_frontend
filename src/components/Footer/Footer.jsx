import React from "react";
import s from "./Footer.module.scss";
import { SlSocialInstagram as InstagramIcon } from "react-icons/sl";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contacts" className={s.footer}>
      <div className={s.footer_left}>
        <h2>Contact</h2>
        <h1>+49 999 999 99</h1>
        <div className={s.icons}>
          <a href="https://instagram.com">
            <InstagramIcon size={35} />
            <p>Instagramm</p>
          </a>
          <a href="https://whatsapp.com">
            <WhatsAppIcon size={35} />
            <p>WhatsApp</p>
          </a>
        </div>
      </div>
      <div className={s.footer_right}>
        <h2>Address</h2>
        <div>
          <p>Linkstraße 2, 8 OG</p>
          <p>10785 Berlin</p>
        </div>
        <div>
          <p>Opening hours:</p>
          <p>24 houts a day</p>
        </div>
      </div>
    </div>
  );
}
