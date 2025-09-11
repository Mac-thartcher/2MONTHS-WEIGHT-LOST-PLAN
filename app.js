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

const tips = {
  nutrition: [
    "Start your day with protein to stabilize blood sugar.",
    "Avoid dairy and red meat if you're sensitive—they may worsen fibroid symptoms.",
    "Eat cruciferous vegetables like broccoli and kale to support estrogen metabolism."
  ],
  exercise: [
    "Strength training boosts metabolism—don’t skip it!",
    "HIIT workouts can improve insulin sensitivity in women with PCOS.",
    "Stretching and mobility work help reduce inflammation and pain."
  ],
  lifestyle: [
    "Practice stress-reducing activities like yoga or meditation daily.",
    "Use castor oil packs over the abdomen to support detox and reduce fibroid pain.",
    "Track your cycle to better understand hormonal patterns and plan workouts."
  ]
};

const tipButton = document.getElementById('showTip');
const tipDisplay = document.getElementById('tip');
const tipHistory = document.getElementBy

if (tipButton && tipDisplay) {
  tipButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipDisplay.textContent = tips[randomIndex];
  });
}
