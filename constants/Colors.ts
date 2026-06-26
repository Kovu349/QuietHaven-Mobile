export const Palette = {
  // 1. The Core Brand Colors (from your CSS)
  deepCalm: '#1f2933',      // --primary (Deep gray)
  softBlue: '#2563eb',       // --accent (Action items)
  white: '#ffffff',          // --background
  gray: '#6b7280',           // --muted (Text)
  
  // 2. The Leaf Colors (Extracted from your leaf.png)
  leafGreen: '#4CAF50',      // Vibrant green for success/branding
  leafLight: 'rgba(76, 175, 80, 0.12)', // Soft background for icons
  
  // 3. Mobile Specific Neutral Colors
  lightBg: '#f8fafc',        // For screen backgrounds (so cards pop)
  border: '#e2e8f0',         // Subtle lines between items
  overlay: 'rgba(0,0,0,0.4)' // For modals
};

export const Colors = {
  light: {
    text: Palette.deepCalm,
    subtext: Palette.gray,
    background: Palette.lightBg, // Using lightBg instead of pure white makes it look modern
    card: Palette.white,
    primary: Palette.softBlue,
    brand: Palette.leafGreen,
    brandSoft: Palette.leafLight,
    border: Palette.border,
  },
  dark: {
    text: Palette.white,
    subtext: '#94A3B8',
    background: '#0F172A',
    card: '#1E293B',
    primary: Palette.softBlue,
    brand: Palette.leafGreen,
    brandSoft: Palette.leafLight,
    border: '#334155',
  }
};