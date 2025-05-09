document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navTextMobile = document.querySelector('.nav-text-mobile');
  const navOverlay = document.querySelector('.nav-overlay');

  burger.addEventListener('click', () => {
    navTextMobile.classList.toggle('active');
    navOverlay.classList.toggle('active');
    burger.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-text-mobile li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navTextMobile.classList.remove('active');
      navOverlay.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navTextMobile.contains(e.target)) {
      navTextMobile.classList.remove('active');
      navOverlay.classList.remove('active');
      burger.classList.remove('active');
    }
  });
  
});

const videos = {
  "skill1": "IMAGE/omen.mp4",
  "skill2": "IMAGE/darkCover.mp4",
  "skill3": "IMAGE/shroudedStep.mp4",
  "skill4": "IMAGE/fromTheShadows.mp4",
}

function showVideo(skill){
  const video = document.querySelector(".gameplay-video video")
  video.src = videos[skill];

}

function setActiveIcon(selectedIcon) {
  const allIcons = document.querySelectorAll('.ability-icon');
  allIcons.forEach(icon => icon.classList.remove('active'));
  selectedIcon.classList.add('active');
}

document.querySelectorAll('.ability-icon').forEach((icon, index) => {
  icon.addEventListener('click', function() {
    const skillKey = `skill${index + 1}`;
    showVideo(skillKey);
    setActiveIcon(this);
  });
});
