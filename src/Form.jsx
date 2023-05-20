import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ handleOshiNameChange }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleOshiNameChange(data.oshiName);
  };

  return (
    <div className='w-full mb-5'>
      <form className='flex flex-row justify-center relative' onSubmit={handleSubmit(onSubmit)}>
        <input className=' bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-500  focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' {...register('oshiName', { required: true })} />
        {errors.oshiName && <p className="text-red-600">エラー：入力してください。</p>}
        <button type="submit" className="text-gray-900 mt-1 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          送信
        </button>
      </form>
    </div>
  );
}

export default Form;
