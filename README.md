An AI agent that can you be used for Research purposes, allows to upload a research paper, and get relevant content to it. 

We use Mistral LLM here to locally run this project. Utilise langchain modules to give LLM its set of tools. The LLM now decides upon the query on which tool to use from the tools list that we provided. 

We store the parsed content of the inserted pdf using langchain pdfparser. It breaks down the content and the content is stored as embeddings in the vector database. This content is retrived whenever a relevant query is asked. 
Hence we make a RAG pipeline. 

Mainly consists of 3 tools - PDF query answering, Mathematical Equation solving and Web search. 

Frontend :- React js
Backend :- Flask API
Middleware :- Express js
LLM Model :- Ollama (Mistral)
Vector Database :- Chroma DB

