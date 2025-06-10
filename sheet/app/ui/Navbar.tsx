import React from 'react';
import Avatar from '@/ui/Avatar';

const NavBar = () => {
  return (
    <div className="flex h-12 justify-end items-center px-4 py-3">
      <Avatar id={0} width={40} height={40} hasStatus={true} status={true} />
    </div>
  );
};

export default NavBar;
