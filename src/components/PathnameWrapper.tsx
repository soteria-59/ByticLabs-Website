// filepath: c:\Users\User\Downloads\BYTIC\ByticLabs-Website\src\components\PathnameWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function PathnameWrapper() {
  const pathname = usePathname();

  // Example: Log the pathname or use it as needed
  console.log('Current Pathname:', pathname);

  return null; // Or return any JSX if needed
}