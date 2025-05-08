const { addKeyword } = require("@bot-whatsapp/bot");


const flowEntrevistaStep2 = addKeyword('')
    .addAction(async (_, { flowDynamic }) => {
        return await flowDynamic('¿Cual es tu nombre?')
    })
    .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
        await state.update({ name: ctx.body })
        return await flowDynamic(`Perfecto *${ctx.body}*, te voy a enviar un formulario para conocerte un poco mejor, enviamelo y en 48 horas estaré dandote una respuesta.`)
    });


const flowEntrevistaOp4 = addKeyword(['Entrevista Presencial', '4', 'entrevista', 'presencial'])
    .addAnswer('💘 ¡Bienvenido a la Entrevista Personalizada de Solteros! 💘\n\n¿Quieres darle un giro completo a tu búsqueda de pareja o amigos? 😎 ¡Este es el momento de brillar con una entrevista exclusiva!\n\nPor solo $500.000 COP, tendrás una entrevista personalizada que será publicada en nuestras redes sociales, dándote mayor visibilidad y alcanzando a una comunidad aún más amplia. ¡Es tu oportunidad de destacar y conectar con personas afines! 🚀')
    .addAnswer('🔥 ¿Qué incluye el servicio? 🔥\n\n✅ Entrevista exclusiva: Una conversación auténtica y detallada, donde podrás compartir tus intereses, pasiones y lo que estás buscando en una relación.\n✅ Publicación en redes sociales: Tu entrevista será destacada en nuestras plataformas, asegurando que muchas personas te vean y te contacten.\n✅ Mayor alcance y visibilidad: Llega a una audiencia más grande, aumentando tus oportunidades de conocer a alguien especial.\n✅ Presentación auténtica: Te ayudamos a mostrarte tal como eres, con una descripción que resalta tu personalidad y lo que buscas.\n✅ Conexiones reales: Gracias a tu visibilidad, ¡las personas realmente interesadas en ti te escribirán directamente! 💌')
    .addAnswer('👉 ¿Listo para una visibilidad que marcará la diferencia en tu vida social y amorosa?\nEsta es tu oportunidad de dar el siguiente paso con una presentación única.\n\n📝 ¿Cómo participar?\nEscríbenos y te contamos todo el proceso para hacer tu entrevista y llevar tu presencia en redes a otro nivel.')
    .addAnswer('Por favor, elige una opción para continuar:\n\n1️⃣ ¡Estoy listo para mi entrevista y a destacar en las redes!\n2️⃣ No me interesa por ahora, gracias.',
        null,
        null,
        [flowEntrevistaStep2]
    );

module.exports = { flowEntrevistaOp4 };