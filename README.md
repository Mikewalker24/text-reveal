# text-reveal

Reveal text letter-by-letter as it enters the viewport.

Tiny (2KB), no dependencies.

## Demo ✨

[Live Demo](https://text-revealjs.netlify.app)

## Features

- **Letter-by-letter reveal:** Animates text one letter at a time as it enters the viewport.
- **Adaptive staggered delays:** Short and long strings finish animating at the same time for a natural look.
- **Tiny and dependency-free:** Only ~2KB, no external libraries required.
- **Per-element customization:** Override `duration`, `minDelay`, `maxDelay`, and `threshold` using `data-*` attributes.
- **Scroll-triggered:** Uses `IntersectionObserver` for efficient, performant animations.
- **Flexible styling:** Customize transforms, easing, and timing via CSS.
- **Accessibility friendly:** Can respect `prefers-reduced-motion` with CSS.

## Installation

```bash
npm install text-reveal
```

## Usage

```javascript
import textReveal from 'text-reveal';

textReveal();
```

## Options

```js
textReveal({
  selector: '.my-custom-selector',
  duration: 1.5,
  minDelay: 0.02,
  maxDelay: 0.2,
  threshold: 0.3,
});
```

| Option    | Type   | Default        | Description                     |
| --------- | ------ | -------------- | ------------------------------- |
| selector  | string | `.text-reveal` | Target elements to animate      |
| duration  | number | 1              | Total reveal duration (seconds) |
| minDelay  | number | 0.01           | Minimum per-letter delay        |
| maxDelay  | number | 0.1            | Maximum per-letter delay        |
| threshold | number | 0.1            | IntersectionObserver threshold  |

## CSS

Add some CSS to style the animation. The JavaScript sets `transition-delay` automatically:

```css
@media (prefers-reduced-motion: no-preference) {
  .text-reveal .letter {
    opacity: 0;
    transform: translateY(3px);
    will-change: opacity, transform;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .text-reveal .letter.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

You can fully customize the transform, timing, and easing to match your project.

## Browser Support

- Works in all modern browsers that support `IntersectionObserver`
- No dependencies

## License

MIT
