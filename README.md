# 🌗 Theme Toggle App (React + Vite + Tailwind CSS)

This is a simple React application created using **Vite** that implements a **dark/light mode toggle** using Tailwind CSS. The theme toggling is handled via class changes on the HTML element, following Tailwind’s `darkMode: 'class'` configuration.

---

## 🚀 Features

- 💡 Toggle between light and dark themes
- ⚡ Built with Vite for fast development
- 🎨 Styled using Tailwind CSS
- 🧠 Clean and minimal structure with HTML class manipulation

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/theme-toggle-app.git
cd theme-toggle-app
```

# Install dependencies

```bash
npm install
```

##🔧 Configuration
Tailwind CSS

Ensure your tailwind.config.js has the following:

```bash
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

PostCSS Config

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

▶️ Running the App

# Start the development server

npm run dev
Visit http://localhost:5173 to see your app in action.

🧠 How It Works
When the toggle button is clicked, the dark class is added or removed from the <html> element.

Tailwind applies the appropriate styles based on the presence of the dark class.

You can style elements using dark: variants like dark:bg-gray-900.

📁 Project Structure
less
Copy
Edit
theme-toggle-app/
├── public/
├── src/
│ ├── App.jsx
│ ├── index.css # Tailwind directives (@tailwind base, components, utilities)
│ └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
📜 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Made with ❤️ by Your Name
