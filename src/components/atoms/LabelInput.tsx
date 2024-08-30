interface LabelInputProps {
  label: string;
}

export default function LabelInput({ label }: LabelInputProps) {
  return (
    <div className='w-full'>
      <p className='font-outfit font-semibold text-textPrimary text-[16px] lg:text-[18px]'>
        {label}
      </p>
    </div>
  );
}
