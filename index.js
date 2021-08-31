<script
  src="https://cdnjs.cloudflare.com/ajax/libs/kute.js/2.0.0/kute.min.js"
  type="text/javascript"
></script>;
let jQueryScript = document.createElement("script");

const blob1 = document.getElementById("#blob1");
const blob2 = document.getElementById("#blob2");

const tween = KUTE.fromTo(
  blob1,
  { path: blob1 },
  { path: blob2 },
  { repeat: 999, duration: 3000, yoyo: true }
);
tween.start();
