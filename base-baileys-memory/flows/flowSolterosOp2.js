const { addKeyword } = require('@bot-whatsapp/bot')

//FLUJO DE PRESENTANDO SOLTEROS (CON O SIN FOTO) OPCION 2

const flowSolterosStep2 = addKeyword(['1', 'Estoy muy animado', 'quiero', 'me interesa'])
    .addAction(async (_, { flowDynamic }) => {
        return await flowDynamic('¿Cual es tu nombre?')
    })
    .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
        await state.update({ name: ctx.body })
        return await flowDynamic(`Perfecto *${ctx.body}*, te voy a enviar un formulario para conocerte un poco mejor, enviamelo y en 48 horas estaré dandote una respuesta.`)
    });

const flowPresentandoSolterosOp2 = addKeyword(['2', 'soltero anonimo', 'soltero sin foto', 'soltero con foto'])
    .addAnswer('💘 ¡Bienvenido a Soltero Anónimo!\n\n¿Listo para encontrar tu media naranja? 🍊\n\nPor solo $200.000 COP, te presentamos en nuestra cuenta de Instagram de forma creativa y anónima, generando curiosidad y atrayendo posibles matches 💌\n\n🎯 ¿Qué incluye el servicio?\n✅ Te mostramos al mundo sin revelar tu identidad\n✅ Aumentás tu visibilidad en una comunidad 100% dedicada a solteros\n✅ Podés conocer a alguien especial de forma original y divertida 😍')
    .addAnswer('¿Te animás a presentarte? 🔥\n\nEscribinos y te contamos cómo hacerlo paso a paso 💬\n')
    .addAnswer('Por favor, elige una opción para continuar:\n\n1️⃣ Estoy muy animado\n2️⃣ No me interesaría el servicio',
        null,
        null,
        [flowSolterosStep2]
    );

module.exports = { flowPresentandoSolterosOp2 };