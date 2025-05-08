const { addKeyword } = require('@bot-whatsapp/bot')

//OPCION 3: HISTORIAS

const flowHisotirasStep2 = addKeyword(['1', 'Estoy muy animado', 'quiero', 'me interesa'])
    .addAction(async (_, { flowDynamic }) => {
        return await flowDynamic('¿Cual es tu nombre?')
    })
    .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
        await state.update({ name: ctx.body })
        return await flowDynamic(`Perfecto *${ctx.body}*, te voy a enviar un formulario para conocerte un poco mejor, enviamelo y en 48 horas estaré dandote una respuesta.`)
    });

const flowHistoriasOp3 = addKeyword(['3', 'historias'])
    .addAnswer('💘 ¡Bienvenido a Solteros con Historia! 💘\n\n¿Te gustaría hacerte notar de una forma diferente? 🌟 ¡Tenemos el servicio perfecto para ti!\n\nPor solo $100.000 COP, te ayudamos a destacarte en nuestra cuenta de Instagram con una historia personalizada y creativa que hará que todos tus posibles matches te escriban. 📲')
    .addAnswer('🔥 ¿Qué incluye el servicio? 🔥\n\n✅ Tu historia en Instagram: Te presentamos a todos de manera original, con un mensaje llamativo que hará que todos se fijen en ti.\n✅ Aumenta tu visibilidad: La historia te pondrá en el radar de otros solteros que buscan conectar.\n✅ Te mostramos de una forma creativa: Usamos las herramientas de Instagram para que tu historia sea única y memorable.\n✅ ¡Conoce nuevas personas! Deja que los demás te encuentren, ya sea para pareja o nuevos amigos.😎')
    .addAnswer('👉 ¿Te atreves a mostrar tu historia y hacer conexiones inesperadas?\n¡Solo un paso te separa de muchas oportunidades! 🚀\n\n📝 ¿Cómo participar?\nEscríbenos y te explicamos cómo crear tu historia perfecta para Instagram.')
    .addAnswer('Por favor, elige una opción para continuar:\n\n1️⃣ ¡Estoy listo para crear mi historia y conectar con otros!\n2️⃣ No me interesa por ahora, gracias.',
        null,
        null,
        [flowHisotirasStep2]
    );

module.exports = { flowHistoriasOp3 };