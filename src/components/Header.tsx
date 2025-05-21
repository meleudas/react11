import React from 'react';
import Image from '@/components/ui/Image'; 

const Header: React.FC = () => {
  return (
    <header className="relative bg-cover bg-center h-96">
      <Image
        className="image-container absolute inset-0 w-full h-full"
      />
    </header>
  );
};

export default Header;