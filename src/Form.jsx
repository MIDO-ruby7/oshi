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
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <input className='' {...register('oshiName', { required: true })} />
      {errors.oshiName && <p>エラー：推しキャラの名前を入力してください。</p>}
      <button type="submit" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        送信
      </button>
    </form>
  );
}

export default Form;
