# School Website

A complete, responsive school website with navigation, content pages, an online book store, activities section, contact page, and shopping cart.

## Features

- ✅ **Responsive Navigation Bar** - Sticky navigation with active page indicators and cart badge
- ✅ **About the School Page** - 7 categories including history, philosophy, staff, facilities, achievements, extracurricular, and technology vision
- ✅ **Book Store** - Grade selection, textbook catalog with purchase/rental options
- ✅ **Activities (After-School Programs)** - Activity cards with filtering by day, grade, and category
- ✅ **Weekly Schedule** - Timetable showing all activities organized by day and time
- ✅ **Contact Us** - Contact information and message simulation form
- ✅ **Shopping Cart** - Full cart management with quantity controls and checkout simulation

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx       # Navigation bar component
├── pages/
│   ├── AboutSchool.tsx      # About school page
│   ├── BookStore.tsx        # Book store page
│   ├── Activities.tsx       # Activities page with schedule
│   ├── Contact.tsx          # Contact page
│   └── Cart.tsx             # Shopping cart page
├── App.tsx                  # Main application component
├── App.css                  # All styles
├── index.css                # Base styles
└── main.tsx                 # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features Details

### 1. Navigation Bar
- Sticky navigation with active state indicators
- Cart icon with item count badge
- Logo that returns to home page
- Responsive menu

### 2. About the School
- 7 sections with comprehensive information
- Responsive grid layout
- Beautiful card design with hover effects

### 3. Book Store
- Grade selection (1st-6th Grade)
- Table view with book details
- Purchase/Rental option selection
- Add to cart functionality

### 4. Activities
- Activity cards with complete details
- Filtering by:
  - Day of the week
  - Grade level
  - Activity category (Sports, Music, Art, Computers)
- Weekly schedule timetable
- Activities sorted by day and time

### 5. Contact Page
- School contact information
- Contact form with validation
- Success message on submission
- Responsive layout

### 6. Shopping Cart
- Add items from Book Store and Activities
- Quantity management (increase/decrease)
- Remove items
- Order summary with subtotal, tax, and total
- Proceed to payment simulation

## Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface
- Optimized for all screen sizes

## Technologies Used
- React 18
- TypeScript
- Vite
- CSS3 with modern features

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
MIT

## Author
School Website Development Team
"# School-Website" 
