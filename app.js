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

const tips = [
  "Drink plenty of water throughout the day.",
  "Aim for 7–8 hours of sleep to support fat loss.",
  "Strength training boosts metabolism—don’t skip it!",
  "Avoid processed sugars and refined carbs.",
  "Stay consistent—results come with time and effort."
];

const tipButton = document.getElementById('showTip');
const tipDisplay = document.getElementById('tip');

if (tipButton && tipDisplay) {
  tipButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipDisplay.textContent = tips[randomIndex];
  });
}
