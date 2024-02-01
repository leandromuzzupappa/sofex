import { Button } from "@components/Button/Button";
import { Heading } from "@components/Heading/Heading";
import { Logo } from "@components/Logo/Logo";
import { Text } from "@components/Text/Text";
import styles from "./Footer.module.css";
import { IconNames } from "@data/interfaces/Icons";

export const Footer = () => {
  const renderLogo = () => (
    <div className={styles.logoWrapper}>
      <Logo classList={styles.logo} />
      <Text
        color="white"
        classList={styles.logoText}
        text="Soluciones digitales a la medida de tu negocio."
      />
    </div>
  );

  const renderFooterNav = () => (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Heading
            color="white"
            level={4}
            text="Quiénes somos"
            classList={styles.heading}
            tabIndex="0"
            weight="bold"
          />
          <ul>
            <li>
              <Button
                color="white"
                text="Misión"
                href="#mision"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Visión"
                href="#vision"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Valores"
                href="#valores"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Testimonios"
                href="#testimonios"
                classList={styles.link}
                underline
              />
            </li>
          </ul>
        </li>
        <li>
          <Heading
            color="white"
            level={4}
            text="Servicios"
            classList={styles.heading}
            tabIndex="0"
            weight="bold"
          />
          <ul>
            <li>
              <Button
                color="white"
                text="Diseño gráfico"
                href="#diseno-grafico"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Marketing"
                href="#marketing"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Desarrollo de apps"
                href="#desarrollo-apps"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Diseño UX/UI"
                href="#diseno-ux-ui"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Desarrollo de software"
                href="#desarrollo-software"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Servicios de hosting"
                href="#servicios-hosting"
                classList={styles.link}
                underline
              />
            </li>
          </ul>
        </li>
        <li>
          <Heading
            color="white"
            level={4}
            text="Porfolio"
            classList={styles.heading}
            tabIndex="0"
            weight="bold"
          />
          <ul>
            <li>
              <Button
                color="white"
                text="E-commerce"
                href="#ecommerce"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Aplicaciones nativas"
                href="#aplicaciones-nativas"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Landing pages"
                href="#landing-pages"
                classList={styles.link}
                underline
              />
            </li>
            <li>
              <Button
                color="white"
                text="Proyectos UX/UI"
                href="#proyectos-ux-ui"
                classList={styles.link}
                underline
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );

  const renderSocialLinks = () => (
    <ul className={styles.socialLinks}>
      <li>
        <Button
          color="white"
          text=""
          href="#facebook"
          classList={styles.socialLink}
          icon={IconNames.FACEBOOK}
        />
      </li>
      <li>
        <Button
          color="white"
          text=""
          href="#twitter"
          classList={styles.socialLink}
          icon={IconNames.TWITTER}
        />
      </li>
      <li>
        <Button
          color="white"
          text=""
          href="#instagram"
          classList={styles.socialLink}
          icon={IconNames.INSTAGRAM}
        />
      </li>
      <li>
        <Button
          color="white"
          text=""
          href="#linkedin"
          classList={styles.socialLink}
          icon={IconNames.LINKEDIN}
        />
      </li>
      <li>
        <Button
          color="white"
          text=""
          href="#youtube"
          classList={styles.socialLink}
          icon={IconNames.YOUTUBE}
        />
      </li>
    </ul>
  );

  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper}`}>
        {renderLogo()}
        {renderFooterNav()}
      </div>
      <div className={`${styles.wrapper}`}>
        <Text
          color="white"
          classList={styles.copy}
          text="Copyright © 2023 Sofexs. Todos los derechos reservados."
        />
        <Button
          color="white"
          text="Terminos y condiciones"
          href="/terminos-y-condiciones"
          classList={styles.terms}
        />
        {renderSocialLinks()}
      </div>
    </footer>
  );
};
