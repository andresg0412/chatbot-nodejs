const { addKeyword } = require('@bot-whatsapp/bot')


//FLUJO DE EMPRESAS OPCION 1

const flowEmpresasDos = addKeyword(['Quiero más información', '1', 'Quiero mas informacion', 'mas informacion', 'quiero informacion', 'información', 'informacion'])
    .addAnswer('¡Genial! Gracias por tu interés en promocionar con Solteros y Parceros.\nPara continuar con el proceso, por favor envíanos la siguiente información:')
    
    .addAction(async (_, { flowDynamic }) => {
        return await flowDynamic('📌 Nombre de la empresa o negocio\n📍 Ubicación completa (País, ciudad y dirección)\n🏢 Tipo de negocio\n💡 Idea o enfoque que te gustaría que usemos para tu promoción')
    })
    .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
        await state.update({ infoEmpresa: ctx.body })
        return await flowDynamic('Perfecto!\n🙏 Gracias por confiar en nosotros.\nUna vez recibamos esta información, la analizaremos y en un plazo máximo de 48 horas me comunicaré contigo para revisar las opciones más adecuadas según tus gustos, objetivos y con base en nuestra experiencia en la promoción de negocios y marcas 🧠✨')
    })



const flowEmpresas = addKeyword(['1','Pauta Empresas', 'pautas', 'empresas'])
    .addAnswer('📢 ¡Gracias por tu interés en publicitar con Solteros y Parceros!\nEn el siguiente enlace puedes ver toda la información sobre nuestros servicios de publicidad para marcas y negocios 👇')
    .addAnswer('https://www.canva.com/design/DAGi8ysn93k/WxddYPVskRBb8BQ6HP8sQg/view')
    .addAnswer(
        [
            '💰 Estas son nuestras tarifas actuales:\n\n🎬 Video en TikTok — $500\n🎥 Video en Instagram — $450\n📲 2 historias — $200\n📲 3 historias — $300\n🎁 Concurso flash (2 historias) — $250\n📦 Combo TikTok + Instagram — $700\n',
            'Si estás interesado y quieres más información personalizada, por favor responde con el número 1️⃣ nuevamente ó escribe *Quiero más información* y te atenderé directamente 🤝'
        ],
        null,
        null,
        [flowEmpresasDos]
);

module.exports = { flowEmpresas };