import "./../sass/component/_faq.scss";
import FaqItem from "./faq_item";

export default function Faqs() {
  return (
    <>
      <section className="FaqComponent">
        <aside>
          <h1>Preguntas Frecuentes</h1>
        </aside>
        <aside className="FaqComponent__faq-list">
          <FaqItem
            title="¿A quién va dirigido el curso?"
            description="Este curso está pensado para todos aquellos que quieran aprender a programar en Python de forma práctica y rápida."
          />

          <FaqItem
            title="¿Cuándo inicia el curso?"
            description="El inicio del curso está programado para el día 18 de febrero
              de 2023."
          />

          <FaqItem
            title="¿Qué hace a este curso diferente a los demás?"
            description="Este curso te permitirá no sólo aprender mientras vas aplicando tus conocimientos permitiendo obtener resultados desde la primera clase. Al finalizar este curso podrás tener un portafolio personal de proyectos listo para mostrar a tus posibles empleadores."
          />

          <FaqItem
            title="¿Qué material se incluye en el curso?"
            description="Este curso incluye material de apoyo para que puedas aprender a
              programar en Python de una forma sencilla, eficiente y divertida.
              Durante el desarrollo del curso contarás con los siguientes
              materiales de apoyo:"
          >
            <ul>
              <li>Presentaciones expuestas en las sesiones.</li>
              <li>
                Acceso al repositorio de código con todos los ejemplos del curso.
              </li>
              <li>
                Libro <b>Python para todos</b> en formato PDF.
              </li>
              <li>
                Banco de preguntas de entrevistas técnicas sobre Python y
                ejercicios para que puedas practicar.
              </li>
            </ul>
          </FaqItem>
{/* 
          <FaqItem
            title="¿Cuánto tiempo seguirá disponible la tarifa Early Bird?"
            description="El precio especial de compra anticipada estará disponible hasta el
              día 31 de Agosto de 2022."
          /> */}
        </aside>
      </section>
    </>
  );
}
