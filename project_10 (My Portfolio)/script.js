let tl = gsap.timeline();

tl.from(".logo h2", {
  delay: 0.5,
  opacity: 0,
  y: -20,
  color: "#ff9900",
});

tl.from(".nav_content li", {
  opacity: 0,
  y: -20,
  color: "#ff9900",
  duration: 1,
  stagger: 0.3,
});

let tl2 = gsap.timeline();

tl2.from(".hero_img img", {
  duration: 1,
  x: -100,
  opacity: 0,
});

//  name animation
function breakTheText() {
  let h1 = document.querySelector(".hero_content h2 .name");
  let h1Text = h1.textContent;

  let splitedText = h1Text.split("");
  halfTextNumb = Math.floor(splitedText.length / 2);

  let clutter = "";

  splitedText.forEach((elemnt, idx) => {
    if (idx < halfTextNumb) {
      clutter += `<span class='a'>${elemnt}</span>`;
    } else {
      clutter += `<span class='b'>${elemnt}</span>`;
    }
  });

  h1.innerHTML = clutter;

  gsap.from(".a", {
    y: -50,
    duration: 0.6,
    opacity: 0,
    color: "red",
    delay: 1,
    stagger: 0.2,
  });
  gsap.from(".b", {
    y: -50,
    color: "red",
    duration: 0.6,
    opacity: 0,
    delay: 1,
    stagger: -0.2,
  });
}

function mobResp() {
  // making mobile responsive nav bar and tougle
  let barIcon = document.querySelector(".three_lines");
  let crossIcon = document.querySelector(".cross");

  let tl = gsap.timeline();
  tl.from(".full", {
    duration: 0.6,
    opacity: 0,
    x: 400,
    delay: 0.5,
    display: "none",
  });
  tl.from(".mobile_content li", {
    duration: 0.6,
    opacity: 1,
    x: 400,
    stagger: 0.2,
  });
  tl.pause();
  barIcon.addEventListener("click", () => {
    tl.play();
  });
  crossIcon.addEventListener("click", () => {
    tl.reverse();
  });
}

mobResp();
breakTheText();
