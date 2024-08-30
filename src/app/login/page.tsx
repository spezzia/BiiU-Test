import TitlePage from '@/components/atoms/TitlePage';
import LayoutLogin from '@/components/organisms/LayoutLogin';

export default function LoginPage() {
  return (
    <main className='w-full'>
      <TitlePage label='Login' />
      <div className='h-[40px]' />
      <LayoutLogin />
    </main>
  );
}
