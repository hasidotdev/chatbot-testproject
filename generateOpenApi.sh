docker run --rm -v "${PWD}/src/api:/local" openapitools/openapi-generator-cli generate \
    -i /local/chatbot.yaml \
    -g typescript-fetch \
    -o /local/generatedApi