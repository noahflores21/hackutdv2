from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import OpenAI
import json

api_key = "30d870fb-b536-416b-b8e4-5b03508844f8"  # Hardcode for now

app = Flask(__name__)
CORS(app)

# Load the product catalog
with open('C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/products.json', 'r') as file:
    products_data = json.load(file)

# Load the network metrics data
with open('C:/Users/Noah Flores/Documents/hackutd v2/hackutdv2/my-project/metrics.json', 'r') as file:
    metrics_data = json.load(file)

# Set up SambaNova API
client = OpenAI(
    base_url="https://api.sambanova.ai/v1/",
    api_key=api_key,
)
model = "Meta-Llama-3.1-405B-Instruct"

@app.route('/ask', methods=['POST'])
def ask_question():
    try:
        # Get the question from the frontend
        user_data = request.get_json()
        question = user_data.get('question', '')

        if not question:
            return jsonify({"error": "No question provided"}), 400

        # Format the context using the products dataset
        context = (
            "You are an AI assistant for Frontier, a company that sells internet and security products. "
            "Help the user determine what Frontier products work best for them based on their prompt. "
            "Make sure to provide links if you recommend any products to the user in parentheses. Make sure to keep clean html formatting, such as using proper line breaks or <u1> / <o1> for lists. \n\n"
            "Here is the product catalog:\n\n" +
            "\n".join(
                f"{product['Product Name']}: {product['Features']} (Price: {product['Price']} - {product.get('Link', 'No link available')})"
                for product in products_data
            ) +
            "\n\nHere are some helpful network metrics:\n\n" +
            "\n".join(
                f"{metric['name']}: {metric['description']} (Advice: {metric['advice']})"
                for metric in metrics_data['metrics']
            )
        )
        prompt = f"{context}\n\nCustomer question: {question}\n\nAnswer:"

        # Call the SambaNova API
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            stream=True,
        )

        # Collect the AI's response
        response = ""
        for chunk in completion:
            response += chunk.choices[0].delta.content or ""


 # Optionally format response to ensure lists are in HTML (or Markdown)
        response = response.replace("\n", "<br>")  # Replace newlines with <br> for spacing
        response = response.replace("*", "<li>")  # Optional: Convert markdown to HTML tags
        return jsonify({"answer": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
