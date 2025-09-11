// Section toggle function
function showSection(sectionId) {
  const sections = document.querySelectorAll('.plan-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = 'block';
  }
}

// Tips categorized by theme
const tips = {
  nutrition: [
    "Start your day with protein to stabilize blood sugar.",
    "Avoid dairy and red meat if you're sensitive—they may worsen fibroid symptoms.",
    "Eat cruciferous vegetables like broccoli and kale to support estrogen metabolism.",
    "Go for regular checkups"
  ],
  exercise: [
    "Strength training boosts metabolism—don’t skip it!",
    "HIIT workouts can improve insulin sensitivity in women with PCOS.",
    "Stretching and mobility work help reduce inflammation and pain.",
    "Go for regular checkups"
  ],
  lifestyle: [
    "Practice stress-reducing activities like yoga or meditation daily.",
    "Use castor oil packs over the abdomen to support detox and reduce fibroid pain.",
    "Track your cycle to better understand hormonal patterns and plan workouts.",
    "Go for regular checkups",
    "Do not ignore excessive bleeding"
  ]
};

// DOM elements
const tipButton = document.getElementById('showTip');
const tipDisplay = document.getElementById('tip');
const tipHistory = document.getElementById('tipHistory');
const tipCategory = document.getElementById('tipCategory');

// Track shown tips
let shownTips = [];

if (tipButton && tipDisplay && tipCategory) {
  tipButton.addEventListener('click', () => {
    const category = tipCategory.value;
    let selectedTips = [];

    if (category === 'all') {
      selectedTips = [...tips.nutrition, ...tips.exercise, ...tips.lifestyle];
    } else {
      selectedTips = tips[category] || [];
    }

    // Filter out already shown tips
    const remainingTips = selectedTips.filter(tip => !shownTips.includes(tip));

    // Reset if all tips have been shown
    if (remainingTips.length === 0) {
      shownTips = [];
      tipDisplay.textContent = "You've seen all the tips! Starting over...";
      return;
    }

    // Pick a new tip
    const randomIndex = Math.floor(Math.random() * remainingTips.length);
    const tip = remainingTips[randomIndex];

    // Display and store the tip
    tipDisplay.textContent = tip;
    shownTips.push(tip);

    const li = document.createElement('li');
    li.textContent = tip;
    tipHistory.appendChild(li);
  });
}
