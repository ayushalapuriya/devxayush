# Ayush Alapuriya - Professional Portfolio

A modern, responsive portfolio website built with React and Framer Motion, showcasing my skills, projects, and experience as a Full-Stack Developer & AI Engineer.

## 🌟 Features

- **Modern Dark Theme** - Sleek dark design with blue/purple gradient accents
- **Smooth Animations** - Powered by Framer Motion for seamless user experience
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Interactive Certificate Viewer** - Modal-based certificate display with error handling
- **Project Showcase** - Detailed project cards with filtering and GitHub integration
- **Performance Optimized** - Fast loading and smooth scrolling
- **Professional Contact Section** - Direct email and phone contact without form complexity

## 🚀 Live Demo

[View Portfolio](https://ayushalapuriya.github.io) *(Deployed on GitHub Pages)*

## 🛠️ Built With

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushalapuriya/portfolio.git
   cd portfolio
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Add Certificate Images**
   ```bash
   mkdir -p public/assets/images
   # Add your certificate images to public/assets/images/
   # - w3elites-internship.jpg
   # - java-certificate.jpeg
   # - data-science-workshop.jpeg
   # - genai-course.jpeg
   # - adobe-hackathon.jpeg
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📂 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       └── images/          # Certificate images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Navigation with smooth scroll
│   │   │   ├── Hero.jsx          # Animated introduction
│   │   │   ├── About.jsx         # Professional about section
│   │   │   ├── Skills.jsx        # Technical skills with icons
│   │   │   ├── Projects.jsx      # Project showcase with filtering
│   │   │   ├── Experience.jsx    # Work experience timeline
│   │   │   ├── Certifications.jsx # Certificate viewer modal
│   │   │   ├── Achievements.jsx  # Hackathon wins and recognition
│   │   │   ├── Contact.jsx      # Direct contact information
│   │   │   └── Footer.jsx        # Social links and navigation
│   │   ├── css/                  # Component-specific styles
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # App entry point
│   ├── package.json
│   └── vite.config.js
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

### Content Updates

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Projects**: Update project data in `src/components/Projects.jsx`
- **Skills**: Modify skills array in `src/components/Skills.jsx`
- **Experience**: Edit timeline data in `src/components/Experience.jsx`
- **Certifications**: Update certificates in `src/components/Certifications.jsx`

## 📱 Sections

1. **Hero** - Introduction with animated code window and current role
2. **About** - Professional introduction with education and training
3. **Skills** - Technical skills categorized with real icons
4. **Projects** - Featured projects with filtering and GitHub links
5. **Experience** - Work experience and education timeline
6. **Certifications** - Interactive certificate viewer with modal display
7. **Achievements** - Hackathon wins and competitive programming stats
8. **Contact** - Professional contact information and services offered
9. **Footer** - Social links and quick navigation

## 🚢 Deployment

### Build for Production

```bash
cd frontend
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://ayushalapuriya.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Run: `vercel`
4. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

## 🎯 Key Features

### Certificate Viewer
- Modal-based certificate display
- Error handling for missing images
- Smooth animations with Framer Motion
- Responsive image scaling

### Project Showcase
- Filter by technology stack
- Direct GitHub repository links
- "More Projects" button to GitHub profile
- Hover effects and animations

### Skills Section
- Categorized skills (Frontend, Backend, CS Fundamentals)
- Real technology icons (React, Node.js, Vercel, etc.)
- Color-coded for better visibility

### Contact Section
- Direct email and phone contact
- Professional services listing
- No complex form handling
- Mobile-friendly click-to-call/email

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Ayush Alapuriya**

- Email: alapuriya0@gmail.com
- Phone: +91 8058452975
- LinkedIn: [Your LinkedIn Profile]
- GitHub: https://github.com/ayushalapuriya

---

⭐ If you like this portfolio, feel free to fork and star the repository!
