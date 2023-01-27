


    const textbox = document.getElementById("evaluatedText");
    const wordCount = document.getElementById("wordCount");
    textbox.addEventListener("input", () => {
        const words = textbox.value.trim().split(/\s+/).length;
        wordCount.innerText = words || 0 ;
    });


