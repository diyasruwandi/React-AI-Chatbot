 import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import Chatbotinterface from "./components/chatbotinterface";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [promptInputValue, setPromptInputValue] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GOOGLE_GEMINI_API_KEY,
  );

  const getGeminiAIResponse = async () => {
    try {
      setIsLoading(true)

      const model = genAI.getGenerativeModel({model: 
        'gemini-pro'}) //menginisialisasi memakai gemini pro

        const result = await model.generateContent(promptInputValue) // await diisini artinya nunggu hasilnya dan ga menjalankan kode yang ada dibawahnya dulu
        const response = result.response
        const responseText = response.text()

        setChatResponses([
          ...chatResponses,
          { type: 'user', message: promptInputValue }, //
          { type: 'bot', message: responseText }, //response dari bot ketika user memberi chat
        ])

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-500  flex justify-center">
      <Chatbotinterface 
              promptInputValue={promptInputValue}
              setPromptInputValue={setPromptInputValue}
              chatResponses={chatResponses}
              setChatResponses={setChatResponses}
              isLoading={isLoading}
              action={getGeminiAIResponse}/>
    </div>
  );
}

export default App;
