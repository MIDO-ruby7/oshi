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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('oshiName', { required: true })} />
      {errors.oshiName && <p>エラー：推しキャラの名前を入力してください。</p>}
      <input type="submit" />
    </form>
  );
}

export default Form;
