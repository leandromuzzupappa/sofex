import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import styles from "./Legalspage.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Legalspage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top 10%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    tl.to(hero, {
      borderRadius: "30px",
      scale: 0.9,
      duration: 1,
    });
  }, []);

  const renderRectangle = (variant: string) => {
    return <div className={styles.rectangle} data-rectangle={variant}></div>;
  };

  return (
    <main>
      <div ref={heroRef} className={styles.hero}>
        <div className={styles.wrapper}>
          <Heading
            text="Términos y Condiciones"
            level={1}
            classList={styles.title}
            color="white"
            font="changa"
            weight="bold"
          />
        </div>
        <div className={styles.bg}>
          {renderRectangle("variant-1")}
          {renderRectangle("variant-2")}
          {renderRectangle("variant-3")}
          {renderRectangle("variant-4")}
          {renderRectangle("variant-5")}
          {renderRectangle("variant-6")}
        </div>
      </div>
      <section className={styles.wrapper}>
        <Text
          text="Fecha de última actualización: 08/09/2023"
          classList={styles.subtitle}
          weight="bold"
        />

        <Text text="Por favor, lea atentamente estos Términos y Condiciones antes de utilizar nuestro sitio web. El acceso y uso de este sitio web están sujetos a los siguientes términos y condiciones. Al utilizar nuestro sitio web, usted acepta estar legalmente obligado por estos términos y condiciones. Si no está de acuerdo con alguno de los términos establecidos a continuación, le recomendamos que no utilice nuestro sitio web." />

        <ol>
          <li>
            <Heading
              text="1. Uso Aceptable"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                1.1. Usted acepta utilizar nuestro sitio web de manera ética y
                de acuerdo con todas las leyes y regulaciones aplicables.
              </li>
              <li>
                1.2. No está permitido utilizar nuestro sitio web de manera que
                pueda causar daño a la disponibilidad o accesibilidad del sitio,
                o de cualquier manera que sea ilegal, fraudulenta o perjudicial.
              </li>
              <li>
                1.3. Nos reservamos el derecho de suspender o cancelar su acceso
                al sitio web en caso de incumplimiento de estos términos y
                condiciones.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="2. Propiedad Intelectual"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />

            <ol>
              <li>
                2.1. Todo el contenido de este sitio web, incluidos textos,
                gráficos, logotipos, imágenes, clips de audio, descargas
                digitales y otros materiales, está protegido por derechos de
                autor y otras leyes de propiedad intelectual.
              </li>
              <li>
                2.2. Usted puede ver y descargar contenido de este sitio web
                solo para uso personal y no comercial. Queda prohibida cualquier
                reproducción, distribución o modificación de los materiales sin
                nuestro permiso por escrito.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="3. Política de Privacidad"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                3.1. La información personal que proporcione a través de nuestro
                sitio web se manejará de acuerdo con nuestra Política de
                Privacidad.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="4. Enlaces a Terceros"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                4.1. Nuestro sitio web puede contener enlaces a sitios web de
                terceros. Estos enlaces se proporcionan sólo como referencia y
                no respaldamos ni somos responsables del contenido de estos
                sitios web.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="5. Cambios en los Términos y Condiciones"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />

            <ol>
              <li>
                5.1. Nos reservamos el derecho de modificar estos Términos y
                Condiciones en cualquier momento y sin previo aviso. La versión
                más reciente de los Términos y Condiciones estará disponible en
                nuestro sitio web, y su uso continuado del sitio constituirá su
                aceptación de los términos revisados.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="6. Exclusión de Garantías"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                6.1. Este sitio web se proporciona "tal cual" y "según
                disponibilidad", sin garantía de ningún tipo, ya sea expresa o
                implícita, incluidas, entre otras, las garantías de
                comerciabilidad, idoneidad para un propósito particular y no
                infracción.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="7. Limitación de Responsabilidad"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                7.1. En ningún caso seremos responsables de daños directos,
                indirectos, incidentales, especiales, consecuentes o punitivos
                relacionados con el uso o la imposibilidad de uso de este sitio
                web.
              </li>
            </ol>
          </li>

          <li>
            <Heading
              text="8. Jurisdicción y Ley Aplicable"
              level={2}
              classList={styles.listTitle}
              weight="bold"
            />
            <ol>
              <li>
                8.1. Estos Términos y Condiciones se rigen por las leyes de
                Argentina y cualquier disputa que surja en relación con estos
                términos se resolverá exclusivamente en los tribunales de dicho
                país.
              </li>
            </ol>
          </li>
        </ol>

        <Text
          text="Si tiene alguna pregunta o inquietud sobre estos Términos y Condiciones, por favor contáctenos en [<a href='mailto:soffexs.contact@gmail.com'>soffexs.contact@gmail.com</a>]. </br>
          Al utilizar nuestro sitio web, usted reconoce que ha leído, comprendido y aceptado estos Términos y Condiciones. Le recomendamos que los revise periódicamente para estar al tanto de cualquier cambio.
          "
        />
      </section>
    </main>
  );
};
