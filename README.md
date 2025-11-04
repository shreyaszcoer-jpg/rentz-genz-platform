# Rentz 👗 - Gen-Z Fashion Rental Platform

A modern, interactive fashion rental platform where users can rent outfits from both the Rentz store (S2C) and other users (P2P), featuring an AI stylist chatbot for personalized outfit recommendations.

## ✨ Features

### 🏠 Core Functionality
- **Dual Rental Model**: Store-to-Consumer (S2C) and Peer-to-Peer (P2P) rentals
- **Smart Search & Filters**: Category, size, price, and full-text search
- **Real-time Updates**: Live availability and rental status updates
- **Wishlist System**: Save favorite outfits for later

### 🤖 AI Stylist (RenzAI)
- Conversational fashion assistant
- Context-aware recommendations based on events, mood, and budget
- Real-time outfit suggestions from available inventory
- Gen-Z friendly language with emojis

### 👤 User Experience
- **Profile Management**: Customizable profiles with style preferences
- **Rental History**: Track past and current rentals
- **Listing Management**: Easy outfit listing with image upload
- **Review System**: Rate and review rental experiences

### 💳 Rental Flow
- **Date Selection**: Flexible rental periods
- **Secure Payments**: Multiple payment methods (UPI, Cards, COD)
- **Address Management**: Delivery address handling
- **Status Tracking**: Real-time rental status updates

## 🛠 Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast development
- **TailwindCSS** for styling
- **Sonner** for notifications

### Backend
- **Convex** for database, real-time updates, and serverless functions
- **Convex Auth** for authentication
- **OpenAI GPT-4.1-nano** for AI stylist
- **File Storage** for image handling

### Key Libraries
- `@convex-dev/auth` - Authentication
- `convex` - Backend platform
- `react` & `react-dom` - UI framework
- `tailwindcss` - Styling
- `sonner` - Toast notifications

## 🏗 Project Structure

```
src/
├── components/
│   ├── Home.tsx           # Main feed with outfit grid
│   ├── OutfitCard.tsx     # Individual outfit display
│   ├── OutfitDetails.tsx  # Detailed outfit view
│   ├── RentalFlow.tsx     # Multi-step rental process
│   ├── AIChat.tsx         # RenzAI chatbot interface
│   ├── Profile.tsx        # User profile management
│   ├── AddOutfit.tsx      # Outfit listing form
│   └── Navigation.tsx     # Bottom navigation
├── App.tsx                # Main app component
└── main.tsx              # App entry point

convex/
├── schema.ts             # Database schema
├── outfits.ts           # Outfit-related functions
├── rentals.ts           # Rental management
├── profiles.ts          # User profile functions
├── ai.ts                # AI chatbot functions
├── auth.ts              # Authentication setup
└── router.ts            # HTTP endpoints
```

## 📊 Database Schema

### Core Tables
- **profiles**: User profiles with fashion preferences
- **outfits**: Rental listings with images and metadata
- **rentals**: Rental transactions and status tracking
- **wishlist**: User's saved outfits
- **reviews**: Rating and review system
- **aiChats**: AI conversation history

### Key Features
- Real-time subscriptions for live updates
- Full-text search on outfit titles
- Optimized indexes for fast queries
- File storage integration for images

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rentz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Environment Setup

The app uses Convex's built-in OpenAI integration for the AI stylist. No additional API keys are required for development.

## 🎨 Design System

### Color Palette
- **Primary Pink**: `#E574BC` - Main brand color
- **Secondary Purple**: `#F7B2FF` - Accent color
- **Dark**: `#190000` - Text and contrast
- **Backgrounds**: White with pastel gradients

### Typography
- **Font**: Inter Variable (system fallback)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### UI Principles
- **Rounded Design**: 16px border radius for modern feel
- **Soft Shadows**: Subtle elevation with smooth transitions
- **Gen-Z Aesthetic**: Emoji usage, casual language, vibrant colors
- **Mobile-First**: Responsive design optimized for mobile

## 🔧 Key Components

### OutfitCard
Displays outfit preview with:
- High-quality images
- Price and size information
- Owner details and ratings
- Wishlist toggle
- Sustainability badges

### RentalFlow
Multi-step rental process:
1. **Date Selection**: Start/end dates with validation
2. **Personal Details**: Contact and delivery information
3. **Payment**: Secure payment processing

### AIChat (RenzAI)
Intelligent fashion assistant:
- Context-aware conversations
- Real-time outfit recommendations
- Event-based styling suggestions
- Mood and budget considerations

### Profile Management
Comprehensive user profiles:
- Avatar and bio customization
- Style preference tags
- Rental history tracking
- Outfit listing management

## 📱 Features in Detail

### Search & Discovery
- **Smart Filters**: Category, size, price range
- **Full-text Search**: Search outfit titles and descriptions
- **Personalized Feed**: Algorithm-based recommendations
- **Trending Section**: Popular and new arrivals

### Rental Management
- **Flexible Periods**: Daily rental pricing
- **Status Tracking**: Pending → Confirmed → Active → Returned
- **Automatic Availability**: Smart inventory management
- **Review System**: Post-rental feedback

### AI Stylist Integration
- **Natural Conversations**: Chat-based interface
- **Context Understanding**: Event, mood, budget awareness
- **Real Recommendations**: Suggests actual available outfits
- **Learning Capability**: Improves with user interactions

## 🔒 Security & Privacy

- **Secure Authentication**: Email/password with Convex Auth
- **Data Protection**: Encrypted user data and payments
- **Image Security**: Secure file upload and storage
- **Privacy Controls**: User data management options

## 🚀 Deployment

The app is designed for easy deployment on Convex's platform:

1. **Production Build**
   ```bash
   npm run build
   ```

2. **Deploy to Convex**
   ```bash
   npx convex deploy
   ```

3. **Environment Variables**
   Configure any additional API keys in Convex dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Convex** for the amazing backend platform
- **OpenAI** for AI capabilities
- **TailwindCSS** for the design system
- **React Team** for the frontend framework

---

Built with 💕 for the Gen-Z fashion community by the Rentz team ✨
