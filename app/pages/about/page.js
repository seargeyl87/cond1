import styles from "../../style/About.module.css";
import pict_about from "../../img/pict_about.jpeg";


function About() { 
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_into}>
          <div className={styles.about_pict}>
            <img src={pict_about.src} />
          </div>
          <div className={styles.info}>
            <h4>О нас</h4>

            <div className={styles.about_short}>
              <div className={styles.about_box}>
                <p>
                  Мы являемся официальными дилерами ведущих производителей
                  оборудования
                </p>
              </div>
              <div className={styles.about_box}>
                <p>Более 4000 довольных клиентов за 15 лет работы</p>
              </div>
              <div className={styles.about_box}>
                <p>
                  Весь спектр климатической техники от ведущих мировых
                  производителей
                </p>
              </div>
            </div>

            <p>
              Наша компания открыта всем для
              создания хорошего климата в доме. Каждый человек старается обрести
              комфортное состояние и обращается к знатокам за советом -
              установка кондиционеров сплит-систем. Совет нашей компании поможет
              купить и правильно осуществить монтаж кондиционера в квартире или
              в вашем любимом доме. Опыт нашей работы в сфере продаж и установки
              кондиционеров больше 10 лет. На нашей практике более 4000
              монтажей. Видя наш подход и качество работы нас рекомендуют
              знакомым и друзьям.
            </p>
            <p>
              За весь период работ мы получали только положительные отзывы.
              Нашими постоянными клиентами являются школы, гимназии, лечебные
              заведения, знаменитости и простые надежные покупатели. Но как
              практика показывает все любят доброжелательность и хорошее
              качество в работе. Каждый покупатель желает купить недорого
              кондиционер с хорошим качеством. Но кроме правильного выбора
              кондиционера требуется качественная установка кондиционера дома.
              Если нужна установка кондиционеров сплит-систем, мы постараемся по
              вашему вкусу сделать подбор красивого кондиционера и сделать
              качественную установку кондиционера сплит системы.
            </p>
            <p>
              Основная сфера деятельности нашей компании является: <br />
              • продажа и установка кондиционеров;
              <br />
              • сервисное обслуживание кондиционера;
              <br />
              • ремонт кондиционера;
              <br />
              • заправка кондиционера фреоном;
              <br />
              • демонтаж и монтаж кондиционера
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
