# @stianlarsen/react-fade-effects

[![npm version](https://badge.fury.io/js/%40stianlarsen%2Fmeteors.svg)](https://badge.fury.io/js/%40stianlarsen%2Fmeteors)

A versatile React library for applying various fade-in effects to your UI components. Starting with the `FadeWords` component, this library will grow to include multiple fade-related components, such as fading text, images, children elements, and more.

## Preview

<video width="600" controls>
  <source src="https://github.com/Stianlars1/meteors/raw/cfb5a83c7efa64f948d8ee75773a4e8c6864a7f8/meteors.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
_A preview of @stianlarsen/meteors_

## Features

- **Smooth Fade Animations**: Easily create engaging fade-in effects for different types of UI elements.
- **Highly Configurable**: Adjust the animation's duration, delay, stagger time, and more to match your design needs.
- **Ease of Integration**: Drop the components into your project and customize them with minimal setup.
- **Built with TypeScript**: Ensures type safety and a better development experience.

## Installation

Install the package using npm:

```bash
npm install @stianlarsen/react-fade-effects
```

Or using yarn:

```bash
yarn add @stianlarsen/react-fade-effects
```

## Usage

### FadeWords Component

The `FadeWords` component allows you to create smooth fade-in effects for text.

#### Example

```jsx
import { FadeWords } from "@stianlarsen/react-fade-effects";

function App() {
  return (
    <FadeWords
      words="Effortless Task Management with TaskBuddy"
      duration={1}
      delay={0.2}
      variant="up"
      scaleSize={1.05}
    />
  );
}
```

#### `FadeWords` Component Props

The `FadeWords` component accepts several props to customize its behavior and appearance:

| Prop              | Type       | Description                                                                                             |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------- | ------ | ------ | -------- | ------------------------------------------------------ |
| `words`           | `string`   | The text to be displayed with the fade effect.                                                          |
| `className`       | `string`   | Additional CSS classes to apply to the component.                                                       |
| `filter`          | `boolean`  | Apply a blur filter during the animation. Defaults to `true`.                                           |
| `duration`        | `number`   | Duration of the animation in seconds. Defaults to `1`.                                                  |
| `staggerTime`     | `number`   | Time in seconds to stagger the animation between words. Defaults to `0.1`.                              |
| `delay`           | `number`   | Delay before the animation starts in seconds. Defaults to `0.2`.                                        |
| `variant`         | `"default" | "up"                                                                                                    | "down" | "left" | "right"` | The direction of the animation. Defaults to `default`. |
| `scaleSize`       | `number`   | Scale size for the words during the animation. Defaults to `1`.                                         |
| `once`            | `boolean`  | Whether the animation should occur only once. Defaults to `true`.                                       |
| `translateAmount` | `number`   | Custom translate value for the animation. Defaults to `15` for `up`/`down` and `15` for `left`/`right`. |

## Future Components

This package is designed to expand with additional fade components, such as:

- **FadeChildren**: Apply fade-in effects to child elements within a container.
- **FadeImages**: Animate image elements with fade effects.
- **FadeContainers**: Apply fades to entire sections or containers.

Each future component will come with its own set of customizable props, following the same flexible design as `FadeWords`.

## Contributing

Contributions are always welcome! Please feel free to open issues or submit pull requests.

## License

`@stianlarsen/react-fade-effects` is [MIT licensed](./LICENSE).

## Contact

For any questions or suggestions, feel free to reach out.

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
