# 🌟 Attar Malaki - Premium Arabic Perfume E-Commerce Platform

> *Unveil Your Elegance with Premium Arabic Perfumes*

A sophisticated full-stack e-commerce platform built with modern technologies, specializing in premium Arabic perfumes and fragrances. This application provides a seamless shopping experience with advanced features including real-time updates, secure payments, and comprehensive order management.

![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.14.2-green)
![Prisma](https://img.shields.io/badge/Prisma-6.5.0-2D3748)
![Stripe](https://img.shields.io/badge/Stripe-18.2.1-635BFF)

## ✨ Features

### 🛍️ **Customer Experience**
- **Intuitive Product Catalog** - Browse premium Arabic perfumes with detailed descriptions
- **Advanced Filtering** - Filter by category, price, size (20ml, 50ml, 100ml)
- **Smart Search** - Find products quickly with optimized search functionality
- **Wishlist Management** - Save favorite products for later
- **Shopping Bag** - Seamless cart experience with real-time updates
- **Multiple Address Management** - Store and manage multiple delivery addresses
- **Order Tracking** - Track order status from placement to delivery
- **Product Reviews** - Read and write authentic customer reviews
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 👨‍💼 **Admin Dashboard**
- **Product Management** - Add, edit, and manage product inventory
- **Order Management** - Process and track customer orders
- **User Management** - Comprehensive user administration
- **Analytics Dashboard** - Insights into sales and user behavior
- **Inventory Tracking** - Real-time stock management
- **Revenue Analytics** - Detailed sales reports and metrics

### 🔒 **Security & Authentication**
- **Secure Authentication** - Powered by Clerk with social login options
- **Payment Processing** - Secure payments via Stripe integration
- **Data Protection** - MongoDB with Prisma ORM for secure data handling
- **Webhook Integration** - Real-time synchronization with external services

### 🚀 **Performance & UX**
- **Real-time Updates** - Pusher integration for live notifications
- **Smooth Animations** - Motion and Locomotive Scroll for enhanced UX
- **Loading States** - NextJS TopLoader for seamless navigation
- **Toast Notifications** - Real-time feedback for user actions
- **Confetti Effects** - Delightful micro-interactions

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15.2.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with Custom Animations
- **UI Components**: 
  - Radix UI (Accordion, Avatar, Dialog, Label, Separator, Tooltip)
  - React Hook Form with Zod validation
  - React Aria Components for accessibility
- **Icons**: Lucide React & React Icons
- **Animations**: Motion library & Locomotive Scroll
- **State Management**: Zustand

### **Backend & Database**
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Clerk
- **Payment Processing**: Stripe
- **Real-time Communication**: Pusher
- **Webhooks**: Svix for secure webhook handling

### **Development & Deployment**
- **Package Manager**: npm with Turbopack for development
- **Type Safety**: Prisma Zod Generator for runtime validation
- **Code Quality**: ESLint & TypeScript strict mode
- **Deployment**: Vercel (optimized for Next.js)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB database
- Stripe account
- Clerk account
- Pusher account

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AttarMalaki
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your_mongodb_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Stripe Payment
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   
   # Pusher Real-time
   PUSHER_APP_ID=your_pusher_app_id
   PUSHER_KEY=your_pusher_key
   PUSHER_SECRET=your_pusher_secret
   PUSHER_CLUSTER=your_pusher_cluster
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Generate Types**
   ```bash
   npm run types
   ```

## 🚀 Usage

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Production Build
```bash
npm run build
npm start
```

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Generate Prisma client and build for production
- `npm run start` - Start production server
- `npm run types` - Generate TypeScript types from schema
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
AttarMalaki/
├── app/
│   ├── (auth)/              # Authentication pages
│   ├── (dashboard)/         # Admin dashboard
│   ├── (root)/              # Customer-facing pages
│   ├── api/                 # API routes & webhooks
│   └── layout.tsx           # Root layout
├── components/              # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── prisma/                  # Database schema
├── public/                  # Static assets
├── scripts/                 # Build and utility scripts
└── test/                    # Test files
```

## 🔄 Database Schema

The application uses a comprehensive MongoDB schema with the following main entities:
- **Users** - Customer accounts with Clerk integration
- **Products** - Perfume catalog with variants and pricing
- **Orders** - Complete order lifecycle management
- **Reviews** - Customer feedback system
- **Wishlist** - Saved products functionality
- **Addresses** - Multiple address management
- **Shopping Bag** - Cart functionality

## 🌐 API Integration

### Webhooks
- **Clerk Webhooks** - User management synchronization
- **Stripe Webhooks** - Payment processing events

### Third-party Services
- **Stripe** - Payment processing and subscription management
- **Pusher** - Real-time notifications and updates
- **Clerk** - User authentication and management

## 🚦 Deployment

The application is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy with automatic CI/CD

For other platforms, ensure Node.js 18+ support and proper environment configuration.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📧 Contact

For any inquiries or support, please contact the development team.

---

**Built with ❤️ using modern web technologies**
