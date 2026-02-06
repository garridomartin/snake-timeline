# Snake Timeline Component 🐍

<p align="left">
  <a href="https://snake-timeline.vercel.app">
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/npm/l/snake-timeline" alt="License">
  <img src="https://img.shields.io/npm/v/snake-timeline" alt="NPM Version">
</p>

A React-based horizontal timeline component designed to visually represent the status of documents or processes over time. This component dynamically adjusts to the container's width and organizes statuses in alternating rows for better readability.

**[🚀 Explore the Live Demo](https://snake-timeline.vercel.app)**

---

A React-based horizontal timeline component designed to visually represent the status of documents or processes over time. This component dynamically adjusts to the container's width and organizes statuses in alternating rows for better readability.

Note: This component relies on Tailwind CSS for styling. Make sure Tailwind CSS is properly installed and configured in your project before using this component.

![Snake Timeline Component](https://github.com/garridomartin/snake-timeline/blob/main/public/snake-img.png?raw=true)

---

## Features

- **Dynamic Layout**: Automatically adjusts the number of items per row based on the container's width.
- **Alternating Rows**: Even and odd rows are aligned differently (left-to-right and right-to-left) for a visually appealing zigzag effect.
- **Custom Icons**: Each document status is represented by a unique icon from the `lucide-react` library.
- **Detailed Information**: Displays the status name, date, and the user/system that registered the status.
- **Responsive Design**: Works well on different screen sizes.

---

## Installation

# Using npm:

```bash
npx snake-timeline

```

# Cloning repo from GitHub:

You can also, clone the repository.

1. Clone the repository:

   ```bash
   git clone https://github.com/garridomartin/snake-timeline.git

   ```

2. Navigate to the project directory:

   ```bash
   cd snake-timeline

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Run your new snake-timeline proyect:
   ```bash
   npm run dev
   ```

---

# Usage

## Props

The HorizontalTimeline component accepts the following prop:

---

Prop Type Description

---

data DocumentStatusDTO[] An array of document status objects.

---

## Example Data Structure

Each item in the data array should follow this structure:

```typescript
interface DocumentStatusDTO {
  id: string;
  status: DocumentStatesEnum;
  date: string; // ISO date format
  createdBy: string; // Name of the user or system
}
```

## Example Usage

```typescript
import SnakeTimeline from './components/SnakeTimeline';

const data = [
  {
    id: '1',
    status: DocumentStatesEnum.NEW_DOCUMENT,
    date: '2023-10-01',
    createdBy: 'Admin',
  },
  {
    id: '2',
    status: DocumentStatesEnum.IN_REVIEW,
    date: '2023-10-02',
    createdBy: 'Reviewer',
  },
  {
    id: '3',
    status: DocumentStatesEnum.APPROVED,
    date: '2023-10-03',
    createdBy: 'Approver',
  },
];

function App() {
  return <SnakeTimeline data={data} />;
}
```

# Usability Tips

## 1. Responsive Design:

Ensure the parent container of the HorizontalTimeline component has a defined width. This allows the component to calculate the number of items per row dynamically.

Test the component on different screen sizes to ensure it looks good on both desktop and mobile devices.

## 2. Customization:

You can customize the icons and text for each status by modifying the iconMapping and statusTextMapping objects in the mappings.tsx file.

To change the vertical size, override the CSS classes used in the component.

## 3. Accessibility:

Add aria-label or aria-describedby attributes to improve accessibility for screen readers.

Ensure the color contrast between the icons and the background meets accessibility standards.

# Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes.

4. Push your branch and open a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments

Icons provided by Lucide React.

Built with Next.js and React.
