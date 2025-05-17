import { Toaster as Notification } from 'react-hot-toast';

import { Main } from '@/components/index.server';

export default function Home() {
  return (
    <>
      <Notification />
      <Main />
    </>
  );
}
