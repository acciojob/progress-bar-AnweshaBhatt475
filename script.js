const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");

let currentStep = 1;

nextButton.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  updateProgress();
});

prevButton.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  // Update active circles
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update progress bar width
  const activeCircles = document.querySelectorAll(".circle.active");
  const progressPercent =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressPercent}%`;

  // Manage button states
  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === circles.length;
}
