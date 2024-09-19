// References to the elements
const startChapterBtn = document.getElementById("startChapter");
const scenario = document.getElementById("scenario");
const options = document.getElementById("options");
const yesOption = document.getElementById("yesOption");
const noOption = document.getElementById("noOption");
const result = document.getElementById("result");
const backButton = document.getElementById("backButton");
const chapterSection = document.getElementById("chapterSection");
const nextChapterBtn = document.getElementById("nextChapter");
const goHomeBtn = document.getElementById("goHome");

// Show the scenario when the user clicks "Start Chapter"
startChapterBtn.addEventListener("click", function() {
    chapterSection.classList.add("hidden");
    scenario.classList.remove("hidden");
    result.classList.add("hidden");
    backButton.classList.remove("hidden");
});

// Handle the "Yes" option click
yesOption.addEventListener("click", function() {
    options.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerHTML = `
        <h2>Yes, he can shoot the robber legally!</h2>
        <p>According to Indian Penal Code (IPC) Section 100, the right to private defense of the body extends to causing death if the assault is such that it reasonably causes the apprehension of death or grievous hurt. In this case, the boy can shoot the robber in self-defense.</p>
        <button class="chapter-btn" id="nextChapter">Next Chapter</button>
        <button class="chapter-btn" id="goHome">Go to Home</button>
    `;
});

// Handle the "No" option click
noOption.addEventListener("click", function() {
    options.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerHTML = `
        <h2>No, that's incorrect!</h2>
        <p>Under the recent amendments and interpretations of self-defense laws in India, a person is allowed to use force, even deadly, to protect themselves or others in life-threatening situations like this one. The boy can shoot the robber to save his mother without being charged for murder.</p>
        <button class="chapter-btn" id="nextChapter">Next Chapter</button>
        <button class="chapter-btn" id="goHome">Go to Home</button>
    `;
});

// Handle the "Back" button click
backButton.addEventListener("click", function() {
    scenario.classList.add("hidden");
    chapterSection.classList.remove("hidden");
    result.classList.add("hidden");
    backButton.classList.add("hidden");
});

// Handle the "Next Chapter" button click
nextChapterBtn.addEventListener("click", function() {
    // Code to load the next chapter goes here
    alert("Next Chapter functionality not implemented yet.");
});

// Handle the "Go to Home" button click

// goHomeBtn.addEventListener("click", function() {
//     window.location.<a href = > </a>; // Replace with the actual URL of your homepage
// });