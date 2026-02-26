# Ayush Alapuriya - Professional Portfolio

A modern, responsive portfolio website built with React and Framer Motion, showcasing my skills, projects, and experience as a Full-Stack Developer.

## 🌟 Features

- **Modern Dark Theme** - Sleek dark design with blue/purple gradient accents
- **Smooth Animations** - Powered by Framer Motion for seamless user experience
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Interactive Contact Form** - EmailJS integration for direct communication
- **Project Showcase** - Detailed project cards with filtering functionality
- **Performance Optimized** - Fast loading and smooth scrolling

## 🚀 Live Demo

[View Portfolio](#) *(Add your deployed URL here)*

## 🛠️ Built With

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Framer Motion** - Animation library for React
- **EmailJS** - Email service for contact form
- **React Icons** - Popular icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS.com](https://www.emailjs.com/)
   - Create a service, template, and get your Public Key
   - Update `src/components/Contact.jsx` with your credentials:
     ```javascript
     const serviceID = 'YOUR_SERVICE_ID';
     const templateID = 'YOUR_TEMPLATE_ID';
     const userID = 'YOUR_PUBLIC_KEY';
     ```

4. **Update Personal Information**
   - Update social media links in `src/components/Hero.jsx` and `src/components/Footer.jsx`
   - Replace `YOUR_GITHUB_USERNAME`, `YOUR_LINKEDIN`, `YOUR_LEETCODE` with your actual usernames
   - Update project GitHub links in `src/components/Projects.jsx`

5. **Run development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## 📂 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors & Theme

Edit color variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #13131a;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... */
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Projects**: Update project data in `src/components/Projects.jsx`
- **Skills**: Modify skills array in `src/components/Skills.jsx`
- **Experience**: Edit timeline data in `src/components/Experience.jsx`

## 📱 Sections

1. **Hero** - Introduction with animated code window
2. **About** - Personal background and statistics
3. **Skills** - Technical and soft skills with icons
4. **Projects** - Featured projects with filtering
5. **Experience** - Work experience and education timeline
6. **Achievements** - Hackathons, certifications, and awards
7. **Contact** - Contact form and information
8. **Footer** - Social links and quick navigation

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Ayush Alapuriya**

- Email: alapuriya04@gmail.com
- Phone: +91 8058452975
- LinkedIn: [Update with your LinkedIn URL]
- GitHub: [Update with your GitHub URL]

---

⭐ If you like this portfolio, feel free to fork and star the repository!
