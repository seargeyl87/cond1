"use client";
import { useState } from "react";
import styles from "../style/Navbar.module.css";
import Link from "next/link";
import Modal from "./Modal";
import ModalThanks from "./ModalThanks";
import icon_menu from "../img/icons-menu.svg";
import cross_icon_menu from "../img/cross_icon-menu.svg";
import logo from "../img/logo.png";
import logo_mobile from "../img/logo-mobile.png";

function Navbar() {
  const [modalActive, setModalActive] = useState(false);
  const [modalThanksActive, setModalThanksActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(true);

  const changeModalThanks = () => {
    // сделать условия if(введен номер и запрос отправлен, затем выполняются 2 данные функции) else надпись - введите корректно номер телефона
    setModalActive(false);
    setModalThanksActive(true);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
        <Link href="/"><img src={logo.src} /></Link>
        </div>
        <div className={styles.header_logo_mobile}>
        <Link href="/"><img src={logo_mobile.src} /></Link>
        </div>
        <div className={styles.header_info}>
          <p>Продажа и установка кондиционеров под ключ</p>
        </div>
        <div className={styles.header_mode}>
          <p>Режим работы</p>
          <p>Пн-Пт: с 9:00 до 18:00</p>
          <p>Сб-Вс: с 10:00 до 18:00</p>
        </div>
        <div className={styles.header_order_btn}>
          <button onClick={() => setModalActive(true)}>заказать звонок</button>
        </div>
        <div className={styles.header_phone}>
          <p>+39458030945</p>
          <p>+39458030945</p>
        </div>
        {mobileMenuActive ? (
          <div
            className={styles.icon_menu}
            onClick={() => setMobileMenuActive(false)}
          >
            <img src={icon_menu.src} />
          </div>
        ) : (
          <div
            className={styles.icon_menu}
            onClick={() => setMobileMenuActive(true)}
          >
            <img src={cross_icon_menu.src} />
          </div>
        )}
      </div>
      <div
        className={styles.menu}
        style={
          mobileMenuActive ? { alignItems: "center" } : { display: "flex" }
        }
      >
        <ul
          className={styles.menu_list}
          style={
            mobileMenuActive
              ? { flexDirection: "" }
              : { flexDirection: "column", alignItems: "center" }
          }
        >
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/">Главная</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/catalog">Каталог</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/about">О нас</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/stati">Статьи</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/montaj">Монтаж</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/akcii">Акции</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/objects">Наши объекты</Link>
          </li>
          <li onClick={() => setMobileMenuActive(true)}>
            <Link href="/pages/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        changeModalThanks={changeModalThanks}
      />
      <ModalThanks
        modalThanksActive={modalThanksActive}
        setModalThanksActive={setModalThanksActive}
      />
    </div>
  );
}

export default Navbar;
