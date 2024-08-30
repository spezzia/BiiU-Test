interface ButtonSubmitProps {
  label: string;
}

export default function ButtonSubmit({ label }: ButtonSubmitProps) {
  return (
    <button
      type='submit'
      className='bg-buttonPrimary rounded-[30px] flex justify-center items-center py-3 w-full hover:opacity-70'
    >
      <p className='font-outfit font-normal text-[18px] sm:text-[20px] text-white'>
        {label}
      </p>
    </button>
  );
}
