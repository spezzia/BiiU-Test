import { ErrorMessage } from '@hookform/error-message';

interface ErrorMessageFormProps {
  errors: any;
  name: string;
}

export default function ErrorMessageForm({
  errors,
  name,
}: ErrorMessageFormProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <p className='font-outfit font-normal text-textError text-[14px]'>
          {message}
        </p>
      )}
    />
  );
}
