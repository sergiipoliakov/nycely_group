import { Toaster as Notification } from 'react-hot-toast';

import { Main } from '@/components/index.server';

export default function Home() {
  console.log('🚀 ~ page.tsx:14 ~ Home ~ process.env.SERVER_URL:', process.env.SERVER_URL)

  return (
    <>
      <Notification />
      <Main />
    </>
  );
}
