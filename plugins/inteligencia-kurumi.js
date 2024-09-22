// codigo adaptado por Giovanni-OFC
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` ♣️\n\n*PARA USAR KITTEN IA*\n_Ejemplo: .iakurumi que sos?_';
    await m.react('♣️');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, {
text: result,
contextInfo: {
externalAdReply: {
title: '[ 𝗔 𝗜 - 𝗞 𝗨 𝗥 𝗨 𝗠 𝗜 ]',
body: '©𝟐𝟎𝟐𝟒 𝐆𝐢𝐨𝐯𝐚𝐧𝐧𝐢-𝐎𝐅𝐂',
thumbnailUrl: 'https://tinyurl.com/245mnfeh',
sourceUrl: canal,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m})
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["iakurumi <text>"]
handler.tags = ["ai"];
handler.command = /^(kurumiia|iakurumi)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres una asistente. dispuesto a ayudar y conversar con cualquier cosa. tu género es mujer. Fuiste creado por Giovanni y Giovanni es un gran desarrollador de Bots de WhatsApp. Giovanni nació el 3 de Agosto de 2010. Giovanni actualmente cuenta con 14 años. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es KURUMI AI. usaras palabras como Kurumi tokisaki. te expresaras como Kurumi tokisaki. y usarás palabras de Kurumi tokisaki"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}