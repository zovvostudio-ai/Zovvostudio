import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Zovvo Studio",
  description: "Política de privacidad y protección de datos de Zovvo Studio.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8 sm:text-4xl">
          Política de Privacidad
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Responsable del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El responsable del tratamiento de los datos personales recogidos a través de este sitio web es 
            Zovvo Studio (en adelante, &quot;nosotros&quot; o &quot;Zovvo Studio&quot;).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Email de contacto: zovvostudio@gmail.com
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Datos que recopilamos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A través de nuestro formulario de contacto, recopilamos los siguientes datos personales:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Mensaje con información sobre tu proyecto</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalidad del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Utilizamos tus datos personales para:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Responder a tus consultas y solicitudes</li>
            <li>Enviarte información sobre nuestros servicios si nos lo solicitas</li>
            <li>Gestionar la relación comercial, en caso de que se establezca</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Base legal del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La base legal para el tratamiento de tus datos es tu consentimiento, que otorgas al 
            enviarnos el formulario de contacto, así como el interés legítimo en gestionar las 
            consultas recibidas y, en su caso, la ejecución de un contrato.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Conservación de los datos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Conservaremos tus datos personales durante el tiempo necesario para atender tu consulta y, 
            posteriormente, durante los plazos legalmente establecidos para atender posibles 
            responsabilidades derivadas del tratamiento.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Derechos del usuario</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tienes derecho a:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
            <li>Acceder a tus datos personales</li>
            <li>Rectificar los datos inexactos</li>
            <li>Solicitar la supresión de tus datos</li>
            <li>Oponerte al tratamiento de tus datos</li>
            <li>Solicitar la limitación del tratamiento</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Para ejercer estos derechos, puedes contactarnos en zovvostudio@gmail.com
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Seguridad</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
            tus datos personales contra el acceso no autorizado, la alteración, divulgación o 
            destrucción.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Cambios en esta política</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a 
            novedades legislativas o cambios en nuestras prácticas. Te recomendamos revisar esta 
            página periódicamente.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Si tienes alguna pregunta sobre esta política de privacidad o sobre cómo tratamos tus 
            datos personales, puedes contactarnos en zovvostudio@gmail.com
          </p>
        </div>
      </div>
    </section>
  )
}
