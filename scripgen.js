document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const promptInput = document.getElementById('prompt');
    const outputTextarea = document.getElementById('output');

    generateBtn.addEventListener('click', function() {
        const prompt = promptInput.value.trim();
        if (prompt === '') {
            alert('Please enter a prompt.');
            return;
        }

        // Generate Python code based on the prompt
        const pythonCode = generatePythonCode(prompt);
        
        // Display generated Python code
        outputTextarea.value = pythonCode;
    });

    function generatePythonCode(prompt) {
        // You can write your Python code generation logic here
        // For simplicity, let's just return the prompt as Python code
        return prompt;
    }
});
