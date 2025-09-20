export default function textReveal({
  selector = '.text-reveal',
  duration = 1,
  minDelay = 0.01,
  maxDelay = 0.1,
  threshold = 0.1,
} = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  function prepareElement(el) {
    const elementDuration = parseFloat(el.dataset.duration) || duration;
    const elementMinDelay = parseFloat(el.dataset.minDelay) || minDelay;
    const elementMaxDelay = parseFloat(el.dataset.maxDelay) || maxDelay;

    let letterCount = 0;
    const words = el.textContent.trim().split(/\s+/);

    // Wrap each letter in a .letter span with its index, wrap each word in .word
    el.innerHTML = words
      .map((word) => {
        const letters = [...word]
          .map(
            (letter) =>
              `<span class="letter" data-index="${letterCount++}">${letter}</span>`
          )
          .join('');
        return `<span class="word">${letters}</span>`;
      })
      .join(' ');

    // Compute per-letter delay
    const letters = el.querySelectorAll('.letter');
    const baseDelay = elementDuration / letters.length;
    const perLetterDelay = Math.min(
      Math.max(baseDelay, elementMinDelay),
      elementMaxDelay
    );

    letters.forEach((span, i) => {
      span.style.transitionDelay = `${i * perLetterDelay}s`;
    });

    return el;
  }

  function revealLetters(el) {
    requestAnimationFrame(() => {
      el.querySelectorAll('.letter').forEach((l) =>
        l.classList.add('is-visible')
      );
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        revealLetters(target);
        observer.unobserve(target);
      });
    },
    { threshold }
  );

  // Prepare all elements immediately and observe for visibility
  elements.forEach((el) => observer.observe(prepareElement(el)));
}
