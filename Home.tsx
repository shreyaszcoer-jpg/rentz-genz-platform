import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { OutfitCard } from "./OutfitCard";

interface HomeProps {
  onOutfitSelect: (outfitId: string) => void;
  filter?: 'p2p' | 's2c';
}

export function Home({ onOutfitSelect, filter }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const outfits = useQuery(api.outfits.getFeedOutfits, {
    category: selectedCategory || undefined,
    size: selectedSize || undefined,
    maxPrice: maxPrice,
  });

  const searchResults = useQuery(
    api.outfits.searchOutfits,
    searchTerm ? { searchTerm } : "skip"
  );

  const displayOutfits = searchTerm ? searchResults : outfits;
  
  // Filter by owner type if specified
  const filteredOutfits = displayOutfits?.filter(outfit => {
    if (filter === 'p2p') return outfit.ownerType === 'user';
    if (filter === 's2c') return outfit.ownerType === 'store';
    return true;
  });

  const categories = ["dress", "top", "bottom", "accessories"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const getTitle = () => {
    if (filter === 'p2p') return "P2P Marketplace 👥";
    if (filter === 's2c') return "Rentz Store 🏪";
    return "Trending Now ✨";
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{getTitle()}</h2>
        <p className="text-gray-600">
          {filter === 'p2p' && "Rent from other users"}
          {filter === 's2c' && "Curated collection from Rentz"}
          {!filter && "Discover your next perfect outfit"}
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search outfits... 🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all shadow-sm"
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === ""
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Size & Price Filters */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-pink-200 focus:border-pink-400 outline-none"
            >
              <option value="">All Sizes</option>
              {sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Price: ₹{maxPrice}/day
            </label>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>
        </div>
      </div>

      {/* Outfits Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredOutfits?.map((outfit) => (
          <OutfitCard
            key={outfit._id}
            outfit={outfit}
            onClick={() => onOutfitSelect(outfit._id)}
          />
        ))}
      </div>

      {filteredOutfits?.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">😔</div>
          <p className="text-gray-500">No outfits found matching your criteria</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
