An AI agent that can you be used for Research purposes, allows to upload a research paper, and get relevant content to it. 

Mainly consists of 3 tools - 
1)PDF query answering
Upload your pdf's be it research paper or any other queries as well, the agent will automatically search the document for you. 

2)Mathematical Equation solving 
If you find any mathematical equations, especially from the research papers to be too difficult to understand, out equation solver will solve and give it to you.

3)Web search
Incase your query is related to the pdf, but not available in the pdf, fret not, our agent will automatically search in the web for you. 

## 🧱 Tech Stack

| Layer         | Technology                  |
|---------------|------------------------------|
| **Frontend**  | React.js (ChatGPT-like UI)   |
| **Backend**   | Flask API (LangChain-based)  |
| **Middleware**| Express.js (routes requests) |
| **LLM Model** | [Ollama](https://ollama.com/) (Mistral / TinyLlama) |
| **Vector DB** | Chroma DB                    |


=============ALL THE CONTENT IS IN THE MASTER BRANCH================================
AI_Research_Agent-/
├── backend/        # Flask + LangChain backend
├── frontend/       # React frontend
├── middleware/     # Express router
├── chroma_db/      # Vectorstore persistence
└── uploads/        # Temporarily stored PDFs

MIT License. Do not copy. Build your own. 
