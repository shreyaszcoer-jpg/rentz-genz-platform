import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { useState } from "react";
import { Home } from "./components/Home";
import { OutfitDetails } from "./components/OutfitDetails";
import { AIChat } from "./components/AIChat";
import { Profile } from "./components/Profile";
import { RentalFlow } from "./components/RentalFlow";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Authenticated>
        <MainApp />
      </Authenticated>
      <Unauthenticated>
        <LandingPage />
      </Unauthenticated>
      <Toaster />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Rentz 👗
        </h1>
        <p className="text-xl text-gray-600 mb-2">Gen-Z Fashion Rental Platform</p>
        <p className="text-gray-500">Rent. Share. Slay. ✨</p>
      </div>
      
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Join the sustainable fashion revolution 🌱
        </p>
      </div>
    </div>
  );
}

function MainApp() {
  const [currentView, setCurrentView] = useState<'home' | 'p2p' | 's2c' | 'chat' | 'profile' | 'outfit' | 'rental'>('home');
  const [selectedOutfitId, setSelectedOutfitId] = useState<string | null>(null);
  const [rentalData, setRentalData] = useState<any>(null);

  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  const handleOutfitSelect = (outfitId: string) => {
    setSelectedOutfitId(outfitId);
    setCurrentView('outfit');
  };

  const handleRentNow = (outfit: any) => {
    setRentalData(outfit);
    setCurrentView('rental');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home onOutfitSelect={handleOutfitSelect} />;
      case 'p2p':
        return <Home onOutfitSelect={handleOutfitSelect} filter="p2p" />;
      case 's2c':
        return <Home onOutfitSelect={handleOutfitSelect} filter="s2c" />;
      case 'chat':
        return <AIChat />;
      case 'profile':
        return <Profile />;
      case 'outfit':
        return (
          <OutfitDetails 
            outfitId={selectedOutfitId!} 
            onBack={() => setCurrentView('home')}
            onRentNow={handleRentNow}
          />
        );
      case 'rental':
        return (
          <RentalFlow 
            outfit={rentalData}
            onBack={() => setCurrentView('outfit')}
            onComplete={() => setCurrentView('home')}
          />
        );
      default:
        return <Home onOutfitSelect={handleOutfitSelect} />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Rentz
            </h1>
            <span className="text-lg">👗</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              Hey, {loggedInUser?.name?.split(' ')[0] || 'babe'}! ✨
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Bottom Navigation */}
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
}
