# -SmartInsight-Test
This API generates a response and follow-up questions based on user input using the OpenAI API.

## Setup

1. Clone the repository
2. Install dependencies:

    ```bash
    yarn install
    ```

3. Create a `.env` file with your OpenAI API key:

    ```plaintext
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4. Start the server:

    ```bash
    yarn run dev
    ```


## Usage

Send a POST request to `/prompt` with a JSON body containing the `question` field.

```json
// Example Question
{
    "question":"who is the richest human on earth?"
}


// Example Response
{
    "response": "As of 2021, the richest human on earth is Elon Musk, the CEO of Tesla and SpaceX. ",
    "follow_up_questions": [
        {
            "question": "1. How did Elon Musk accumulate his wealth?"
        },
        {
            "question": "2. What other companies does Elon Musk own or have investments in?"
        },
        {
            "question": "3. Are there any other contenders for the title of the richest human on earth?"
        },
        {
            "question": "4. How does Elon Musk's net worth compare to that of other billionaires?"
        }
    ]
}

```

- Author - [R. O. Olatunji](https://www.linkedin.com/in/rokeebolatunji/)