// src/components/Header.tsx
import React from 'react';
import Image from '@/components/ui/Image'; // Імпорт новоствореного компоненту

const Header: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center h-96">
      {/* Сірий фон з анімацією */}
      <Image
        className="image-container absolute inset-0 w-full h-full"
      />
    </header>
  );
};

export default Header;