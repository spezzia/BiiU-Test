interface TitlePageProps {
  label: string;
}

export default function TitlePage({ label }: TitlePageProps) {
  return (
    <header className='w-full py-10 bg-bgHeaders'>
      <h1 className='font-bold text-center  text-[25px] sm:text-[40px] font-outfit text-textPrimary'>
        {label}
      </h1>
    </header>
  );
}
