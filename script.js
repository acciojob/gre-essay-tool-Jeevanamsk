//your code here

    var textbox = document.getElementById("evaluatedText");
    var wordCount = document.getElementById("wordCount");
    textbox.addEventListener("input", function() {
        wordCount.innerHTML = textbox.value.trim().split(/\s+/).length + " words";
    });

