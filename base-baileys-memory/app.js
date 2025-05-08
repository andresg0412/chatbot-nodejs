const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const { flowEmpresas } = require('./flows/flowEmpresasOp1');
const { flowPresentandoSolterosOp2 } = require('./flows/flowSolterosOp2');
const { flowHistoriasOp3 } = require('./flows/flowHistoriasOp3');
const { flowEntrevistaOp4 } = require('./flows/flowEntrevistasOp4');

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])


const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

//SALUDO INICIAL
const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAnswer('¡Hola! Soy Conny, creadora de Solteros y Parceros 💘\nGracias por escribirnos 🙌\n\n📲 A través de nuestros canales en Instagram y TikTok conectamos a solteros y solteras de todo el mundo 🌍 y también ofrecemos espacios para que marcas se den a conocer 💼')
    .addAnswer(
        [
            'Por favor, elige la opción que más te interese 👇\n',
            ' *1*. Pauta Empresas\n *2*. Presentando solteros (con o sin foto)\n *3*. Historias\n *4*. Entrevista Presencial'
        ],
        null,
        null,
        [flowEmpresas, flowPresentandoSolterosOp2, flowHistoriasOp3, flowEntrevistaOp4]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow(
        [
            flowPrincipal,
            flowEmpresas,
            flowPresentandoSolterosOp2,
            flowHistoriasOp3,
            flowEntrevistaOp4,
        ])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
