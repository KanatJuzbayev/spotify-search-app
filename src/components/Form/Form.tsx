import React, { useState, useEffect } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import FormCart from '../FormCard/FormCard';
import { FormData } from 'types';
import { value } from 'types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { formActions } from 'store/formSlice';

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

export default function Home(props: FormProps) {
  const dispatch = useAppDispatch();
  const allFormData = useAppSelector((state) => state.form.allFormData);
  const submitIsEnable = useAppSelector((state) => state.form.submitIsEnable);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const submitStatus = () => {
    if (!isSubmitted && isDirty) {
      return true;
    } else if (isSubmitted && isValid) {
      return true;
    } else {
      return false;
    }
  };

  const status = submitStatus();

  const onSubmit = (data: FormData) => {
    data.id = new Date().getTime();
    dispatch(formActions.setFormData(data));
  };

  useEffect(() => {
    dispatch(formActions.setSubmitStatus(status));

    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        birthday: '',
        image: '',
        genre: '',
        notifications: false,
        consent: false,
        id: 1,
      });
    }
  }, [onSubmit, reset]);

  return (
    <section>
      <h3 className="page-title">Registration form</h3>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name :
          <input
            type="text"
            className="input"
            {...register('name', {
              required: true,
              minLength: 2,
              pattern: /^[a-zA-Zа-яА-я]+$/i,
            })}
          />
          {errors.name && errors.name.type === 'required' && isSubmitted && (
            <span className="error">Please inter your name</span>
          )}
          {errors.name && errors.name.type === 'minLength' && isSubmitted && (
            <span className="error">The name must be more than one letter</span>
          )}
          {errors.name && errors.name.type === 'pattern' && isSubmitted && (
            <span className="error">The name must contain only letters</span>
          )}
        </label>
        <label>
          Email :
          <input
            type="text"
            className="input"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          {errors.email && errors.email.type === 'required' && isSubmitted && (
            <span className="error">Please enter your Email</span>
          )}
          {errors.email && errors.email.type === 'pattern' && isSubmitted && (
            <span className="error">Please enter a valid email address</span>
          )}
        </label>
        <label>
          Birthday date :
          <input
            type="date"
            className="input"
            {...register('birthday', {
              required: true,
              validate: {
                older18: (value) => {
                  const now = new Date().getTime(); //current time in milliseconds
                  const bday = value.split('-');

                  const bday_in_milliseconds = new Date(
                    parseInt(bday[0], 10),
                    parseInt(bday[1], 10) - 1,
                    parseInt(bday[2]),
                    10
                  ).getTime(); //birth-date in milliseconds

                  return now - bday_in_milliseconds > 567648000000;
                },
              },
            })}
          />
          {errors.birthday && errors.birthday.type === 'required' && isSubmitted && (
            <span className="error">Please enter your birthday</span>
          )}
          {errors.birthday && errors.birthday.type === 'older18' && isSubmitted && (
            <span className="error">Sorry, you must be over eighteen years old.</span>
          )}
        </label>
        <label>
          {'Profile picture : '}
          <input
            type="file"
            {...register('picture', {
              required: true,
              validate: {
                extention: (value) => {
                  return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value[0].name);
                },
              },
            })}
          />
          {errors.picture && errors.picture.type === 'required' && isSubmitted && (
            <span className="error">Please upload a picture</span>
          )}
          {errors.picture && errors.picture.type === 'extention' && isSubmitted && (
            <span className="error">
              The file extension should be: gif, jpeg, jpg, tiff, png, webp, bmp
            </span>
          )}
        </label>

        <label>
          Favorite music genre :
          <select
            className="input"
            {...register('genre', {
              required: true,
            })}
          >
            <option value=""></option>
            <option value="Electronic Dance Music">Electronic Dance Music</option>
            <option value="Rock Music ">Rock Music</option>
            <option value="Jazz">Jazz</option>
            <option value="Dubstep">Dubstep</option>
            <option value="Rhythm and Blues">Rhythm and Blues</option>
            <option value="Techno">Techno</option>
            <option value="Country Music">Country Music</option>
            <option value="Electro">Electro</option>
            <option value="Indie Rock">Indie Rock</option>
            <option value="Pop Music">Pop Music</option>
          </select>
          {errors.genre && errors.genre.type === 'required' && isSubmitted && (
            <span className="error">Please choose genre</span>
          )}
        </label>
        <label className="switch">
          Notifications :
          <input type="checkbox" className="input inline" {...register('notifications')} />
          <span className="slider" />
        </label>
        <label>
          Consent to data processing
          <input
            type="checkbox"
            className="input inline"
            {...register('consent', {
              required: true,
            })}
          />
          {errors.consent && errors.consent.type === 'required' && isSubmitted && (
            <span className="error">Consent to data processing is required</span>
          )}
        </label>
        <input type="submit" value="Submit" className="input submit" disabled={!submitIsEnable} />
      </form>
      {allFormData.map((item, i) => {
        return <FormCart dataList={item} key={i} />;
      })}
    </section>
  );
}
