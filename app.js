Section toggle
function showSection(sectionId) {
  const sections = document.querySelectorAll('.plan-section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// Random tip generator
const tipButton = document.get