require("dotenv").config()
const { GoogleGenerativeAI } = require("@google/generative-ai")

const chatIA = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

const model = chatIA.getGenerativeModel({ model: "gemini-pro"})

async function generatePlaylist(genres){
  try {
    const result = await model.generateContent(`
                                                Você está aqui para me recomendar músicas. 
                                                Os gêneros são: 
                                                ${genres}. 
                                                Me faça uma lista com 10 músicas, apenas os nomes e os autores das músicas, não me responda mais nada. 
                                                Não divida por gêneros, me dê somente e apenas somente os nomes e os autores. não traga nada no título, 
                                                comece a resposta já com a primeira música, não traga números para ordenar as músicas,
                                                no final de cada música, coloque um ponto de exclamação (!)
                                              `)

    return result.response.text()
  } catch (err) {
      console.error(err)
      throw err
  }
}

module.exports = { generatePlaylist }