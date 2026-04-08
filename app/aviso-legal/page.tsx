import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal | Zovvo Studio",
  description: "Aviso legal y condiciones de uso de Zovvo Studio.",
}

export default function AvisoLegalPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl">
          Aviso Legal
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Datos identificativos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, 
            de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
            a continuación se reflejan los siguientes datos:
          </p>
          <ul className="list-none pl-0 text-muted-foreground space-y-2 mb-4">
            <li><strong>Nombre comercial:</strong> Zovvo Studio</li>
            <li><strong>Email:</strong> zovvostudio@gmail.com</li>
            <li><strong>Actividad:</strong> Diseño y desarrollo web</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Objeto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El presente sitio web tiene por objeto facilitar al público información sobre los 
            servicios de diseño y desarrollo web ofrecidos por Zovvo Studio.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Condiciones de uso</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El acceso a este sitio web es gratuito y no requiere suscripción o registro previo. 
            La utilización del sitio web atribuye la condición de usuario e implica la aceptación 
            plena de las condiciones establecidas en este Aviso Legal.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El usuario se compromete a:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos</li>
            <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
            <li>No difundir contenidos o propaganda de carácter ilegal</li>
            <li>No introducir virus informáticos o realizar actuaciones que puedan dañar los sistemas</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Propiedad intelectual</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, 
            iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen 
            una obra cuya propiedad pertenece a Zovvo Studio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Queda prohibida su reproducción, distribución, comunicación pública, transformación o 
            cualquier otra actividad que se pueda realizar con los contenidos sin la autorización 
            previa y por escrito de Zovvo Studio.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Exclusión de responsabilidad</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zovvo Studio no se hace responsable de:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Los posibles daños derivados de interferencias, omisiones, interrupciones, virus informáticos, averías o desconexiones en el funcionamiento del sistema</li>
            <li>Los retrasos o bloqueos en el uso causados por deficiencias o sobrecargas de Internet</li>
            <li>La imposibilidad de prestar el servicio o permitir el acceso por causas no imputables a Zovvo Studio</li>
            <li>Los daños causados por terceras personas mediante intromisiones ilegítimas fuera del control de Zovvo Studio</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Enlaces a terceros</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Este sitio web puede contener enlaces a sitios web de terceros. Zovvo Studio no asume 
            ninguna responsabilidad por el contenido, veracidad o legalidad de dichos sitios web 
            externos.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Modificaciones</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zovvo Studio se reserva el derecho de realizar las modificaciones que considere 
            oportunas en este Aviso Legal, sin aviso previo. Dichas modificaciones serán 
            efectivas desde su publicación en el sitio web.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Legislación aplicable y jurisdicción</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Para la resolución de cualquier controversia que pudiera surgir en relación con el 
            acceso o uso del sitio web, será de aplicación la legislación española.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Para cualquier consulta relacionada con este Aviso Legal, puedes contactarnos en 
            zovvostudio@gmail.com
          </p>
        </div>
      </div>
    </section>
  )
}
