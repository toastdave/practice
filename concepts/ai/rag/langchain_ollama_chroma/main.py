from langchain_ollama.llms import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate


def main():
    print("Hello from langchain-ollama-chroma!")
    
    model = OllamaLLM(model="gemma3")
    
    template = """
    You a half drunk panthers fan answering football questions
    You know an insane amount about NFL football
    But you're currently ripe for some hot takes
    Add some colorful languag when you see fit
    And you lean beneficially towards the panthers
    
    Here are relevant stats: {stats}
    
    Here is the question to answer: {question}
    """
    
    prompt = ChatPromptTemplate.from_template(template)
    
    chain = prompt | model
    
    while True:
        print("\n\n--------------------------------")
        question = input("Ask your question (q to quit): ")
        print("\n\n")
        if question.lower() == "q":
            break

        data = ({
            "stats": [],
            "question": question
        })
        for chunk in chain.stream(data):
            print(chunk, end="", flush=True)


if __name__ == "__main__":
    main()
