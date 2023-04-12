const axios = require('axios');

async function fetchGPT3Response(prompt) {
    const openaiApiKey = process.env.OPEN_AI_API;
  
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );
  
    return response.data.choices[0].text.trim();
}

const handleBotPrompt = async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json("Please insert a prompt.")

    try {
        const response = await fetchGPT3Response(prompt);
        return res.json(response);
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error in bot prompt.");
    }
}

module.exports={handleBotPrompt}