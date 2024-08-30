'use client';

import { useForm } from 'react-hook-form';
import ButtonSubmit from '../atoms/ButtonSubmit';
import LabelInput from '../atoms/LabelInput';
import ErrorMessageForm from '../atoms/ErrorMessageForm';
import isValidEmail from '@/utils/formUtils';
import { Login } from '@/api/project/auth';
import toast from 'react-hot-toast';
import { useUserContext } from '@/context/User/UserContext';
import { useRouter } from 'next/navigation';

type FormData = {
  email: string;
  password: string;
};

export default function LayoutLogin() {
  const router = useRouter();
  const { setIsAuthenticated } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      let response = await Login(data.email, data.password);
      const idToast = toast.loading('Loading...');
      if (response.user !== undefined) {
        toast.dismiss(idToast);
        setIsAuthenticated(true);
        toast.success('Welcome back!');
        router.replace('/');
      } else {
        toast.error(
          'Login failed. Please check your email and password and try again.'
        );
      }
    } catch (error) {
      toast.error(
        'Login failed. Please check your email and password and try again.'
      );
    }
  };

  return (
    <section className='flex flex-row justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 lg:w-1/3'>
        <LabelInput label='Email' />
        <input
          className='inputBase'
          placeholder='Email'
          {...register('email', {
            required: 'Required',
            validate: (e) => {
              if (isValidEmail(e)) {
                return true;
              }
              return 'Please enter a valid email address.';
            },
          })}
        />
        <ErrorMessageForm errors={errors} name='email' />
        <div className='h-[10px]' />
        <LabelInput label='Password' />
        <input
          className='inputBase'
          placeholder='Password'
          {...register('password', {
            required: 'Required',
          })}
        />
        <ErrorMessageForm errors={errors} name='password' />
        <div className='h-[20px]' />
        <ButtonSubmit label='Login' />
      </form>
    </section>
  );
}
