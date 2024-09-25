let handler = async (m, { conn, command }) => {

let txt_1 = `*_🌸MARCA DE AGUA🌸_*
Rellenan esto:

Me dejas 
↬nombre del medio 
↬Ig
↬nombre o frase de alrededor si esq tiene el ejemplo 
↬tematica en png traerlo en png o mandar un ejemplo para buscarlo 
↬color en imagen`
let txt_2 = `*_🌸NEW POST🌸_*

*📌MANDAR AL PRIV DE SHIZUKU FF*

_↬ILU, STICKER,CALI, CHIBI,FUNKO O OTRAS COSAS QUE QUIERAN PONERLE_

_↬COLOR EN IMAGEN VALIDO DOS COLORES_

_↬TEXTO DE ~PROHIBIDO, AGRADECIMIENTO Y ALGUNAS PALABRAS, QR DE WHATSAPP_

_⚠️ EL NEW POST ES A DECISIÓN MIA NO MANDAR EJEMPLO SI NO ACEPTA MIS REGLAS ME LO DICE PARA EVITAR PERDER TIEMPO LEER REGLAS._`
let txt_3 = `*_🌸CALI🌸_*

- (NOMBRE) 
- (COLOR EN IMAGEN)`
let txt_4 = `*_🌸CALI CON TEMATICA🌸_*

- (NOMBRE) 
- (COLOR EN IMAGEN)
- (TEMÁTICA EN PNG O UNO Q ESTE EN HD PARA HACERLE EL RECORTE)`
let txt_5 = `*_🌸TEXLOGO🌸_*

- (NOMBRE) 
- (COLOR EN IMAGEN)
- 
- es mixto o femenino o masc
- Masculino`
let txt_6 = `*_🌸MASCOT LOGO🌸_*

- (NOMBRE) 
- (COLOR EN IMAGEN)
- (TEMATICA EN PNG O UNO CON HD PARA HACERLE EL RECORTE)
- es mixto, femenino o masculino`

    switch (command) {
    case 'marcaagua': {
        m.reply(txt_1);
    }
    break
    case 'newpost': {
        m.reply(txt_2);
    }
    break
    case 'calisimple': {
        m.reply(txt_3);
    }
    break
    case 'calitematico': {
        m.reply(txt_4);
    }
    break
    case 'textlogo': {
        m.reply(txt_5);
    }
    break
    case 'masclogo': {
        m.reply(txt_6);
    }
    break
    
    }
}
handler.help = ['marcaagua','newpost','calisimple','calitematico','textlogo','masclogo'];
handler.tags = ['herramientas-cali']
handler.command = ['marcaagua','newpost','calisimple','calitematico','textlogo','masclogo'];

export default handler