# @stianlarsen/meteors

[![npm version](https://badge.fury.io/js/@stianlarsen%2Fmeteors.svg)](https://badge.fury.io/js/@stianlarsen%2Fmeteors)

A dynamic and customizable React component for rendering realistic meteor animations on any container. Perfect for adding a unique and mesmerizing effect to your web applications.

## Preview

<video width="600" autoplay loop muted>
  <source src="https://github.com/Stianlars1/meteors/raw/cfb5a83c7efa64f948d8ee75773a4e8c6864a7f8/meteors.mp4" type="video/mp4">
    <img src="https://raw.githubusercontent.com/Stianlars1/meteors/cc112d09184dd19809f9c4c40ef80daeddb6c165/meteors.png" alt="Fallback Image">
  Your browser does not support the video tag.
</video>

_A preview of @stianlarsen/meteors_

## Features

- **Realistic Meteor Animations**: Simulate meteors shooting across the screen with customizable speed, size, and quantity.
- **Dynamic and Configurable**: Easily adjust the component’s behavior to suit your project, including options for light and dark modes, and custom colors.
- **Ease of Integration**: Drop the component into any container, and it will automatically adapt to the container's dimensions.
- **SCSS Modules**: Styled with SCSS modules, making it straightforward to integrate and customize within your existing project.

## Installation

Install the package using npm:

```bash
npm install @stianlarsen/meteors
```

Or using yarn:

```bash
yarn add @stianlarsen/meteors
```

## Usage

### Meteors Component

Import and use the Meteors component in your React project:

```jsx
import Meteors from "@stianlarsen/meteors";

function App() {
  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <Meteors
        speed={2}
        size={50}
        amount={20}
        colorLightmode="black"
        colorDarkmode="white"
        fallingSide="right"
      />
    </div>
  );
}
```

## `Meteors` Component Props

The `Meteors` component accepts several props to customize its behavior and appearance:

| Prop             | Type     | Description                                                                          |
| ---------------- | -------- | ------------------------------------------------------------------------------------ |
| `speed`          | `number` | The speed of the meteors' fall. Defaults to `1`.                                     |
| `size`           | `number` | The size of the meteors. Defaults to `50`.                                           |
| `amount`         | `number` | The number of meteors. Defaults to `20`.                                             |
| `fallingSide`    | `string` | Determines the direction of the meteor fall (`left` or `right`). Defaults to `left`. |
| `colorLightmode` | `string` | The color of the meteors in light mode. Defaults to `"rgba(0, 0, 0, 1)"`.            |
| `colorDarkmode`  | `string` | The color of the meteors in dark mode. Defaults to `"rgba(255, 255, 255, 1)"`.       |

### Example of Customizing Meteor Behavior

Here is how you can customize the meteors' behavior using the available props:

```jsx
<Meteors
  speed={3}
  size={30}
  amount={10}
  colorLightmode="blue"
  colorDarkmode="yellow"
  fallingSide="left"
/>
```

## Contributing

Contributions are always welcome! Please feel free to open issues or submit pull requests.

## License

`@stianlarsen/meteors` is [MIT licensed](./LICENSE).

## Contact

For any questions or suggestions, feel free to reach out.

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email: [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
