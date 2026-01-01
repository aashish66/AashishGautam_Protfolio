# GIS Portfolio Website Template

A modern, responsive portfolio website built with React, Vite, and React Router. Perfect for GIS professionals, researchers, and students to showcase their work, skills, and experience.

## ✨ Features

- **Modern React Architecture**: Built with React 19 and Vite for fast development and optimal performance
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Multiple Sections**:
  - Home/About page
  - Education timeline
  - Experience showcase
  - Skills display
  - Research projects
  - Contact information
- **Dynamic Gallery**: Image gallery with modal lightbox for project displays
- **Navigation**: Smooth navigation with React Router
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone or Use This Template**
   ```bash
   # Clone this repository
   git clone https://github.com/aashish66/AashishGautam_Protfolio.git
   cd AashishGautam_Protfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to see your site.

## 🎨 Customization Guide

### 1. Update Personal Information

#### Update Homepage (`src/pages/Home.jsx`)
- Replace profile image in `public/images/`
- Update name, title, and bio text
- Modify social media links

#### Update Education (`src/pages/Education.jsx`)
- Edit education entries with your degrees
- Update institutions and dates

#### Update Experience (`src/pages/Experience.jsx`)
- Replace with your work experience
- Modify job titles, companies, and descriptions

#### Update Skills (`src/pages/Skills.jsx`)
- List your technical skills
- Update skill categories and proficiency levels

#### Update Research (`src/pages/Research.jsx`)
- Add your research projects
- Include publications and presentations

#### Update Contact (`src/pages/Contact.jsx`)
- Update email and contact information
- Modify social media links

### 2. Add Your Images

Replace images in these folders:
- `public/images/animation/` - Animation projects
- `public/images/field/` - Field work photos
- `public/images/gee/` - Google Earth Engine projects
- `public/images/gis/` - GIS projects
- `public/images/workshop/` - Workshop materials
- `public/posters/` - Research posters

### 3. Update Colors and Styling

- **Global styles**: Edit `src/index.css`
- **Component styles**: Edit individual `.css` files in `src/components/` and `src/pages/`
- **Primary color scheme**: Search and replace color codes throughout CSS files

### 4. Configure for Your GitHub

Update `package.json`:
```json
{
  "name": "your-portfolio-name",
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it (e.g., `your-portfolio`)

3. **Link and Push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Source should be set to `gh-pages` branch
   - Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Alternative: Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting provider

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Styling**: Pure CSS
- **Deployment**: GitHub Pages (gh-pages)

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
│   ├── images/         # Project images
│   └── posters/        # Research posters
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   └── GalleryItem.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Research.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Customization Tips

1. **Navigation**: Update routes in `src/App.jsx` and menu items in `src/components/Navbar.jsx`
2. **Footer**: Customize footer content in `src/components/Footer.jsx`
3. **Favicon**: Replace `index.html` favicon link
4. **SEO**: Update meta tags in `index.html`
5. **Analytics**: Add Google Analytics or other tracking scripts in `index.html`

## 🐛 Troubleshooting

### Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`

### Deployment Issues
- Ensure `homepage` in package.json matches your GitHub Pages URL
- Verify `base` in vite.config.js matches your repository name
- Check GitHub Pages settings in repository settings

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

Feel free to fork this template and customize it for your needs. If you make improvements, consider submitting a pull request!

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

If you have questions or need help customizing this template, feel free to open an issue on GitHub.

---

**Made with ❤️ by [Aashish Gautam](https://github.com/aashish66)**

Happy coding! 🚀
