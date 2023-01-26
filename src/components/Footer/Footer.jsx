import React from "react";
import s from "./Footer.module.scss";
import { SlSocialInstagram as InstagramIcon } from "react-icons/sl";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contacts" className={s.footer}>
      <div className={s.footer_left}>
        <h1>Contacts</h1>
        <h1>+49 69 2485798</h1>
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
        <h1>Adresse</h1>
        <div>
          <p>Schillerstrasse 23</p>
          <p>60342 Frankfurt am Main</p>
        </div>
        <div>
          <p>Opening hours:</p>
          <p>24h</p>
        </div>
      </div>
    </div>
  );
}
