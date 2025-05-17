'use client'
import React, { useState, useRef } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import Text from '@/common/Text';
import LoaderBlur from '@/common/LoaderBlur/index.server';
import InputComponent from "@/common/Form/Input/index.client";
import Button from '@/common/Button/index.client';
import notification from '@/common/notification';

// Styles
import "intl-tel-input/styles";
import styles from "./index.module.sass";
import './telInput.style.sass'

interface IProps {
  answers?: any
}
const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), { ssr: false });

const RegisterForm = (props: IProps) => {
  const { answers } = props
 const [showIntlTelInput] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const schema = Yup.object().shape({
    fullName: Yup.string().required('field Is Required'),
    email: Yup.string().email('email Is Not Correct').required('field Is Required'),
    phone: Yup
      .string()
      .typeError('please Enter Valid Number')
      .min(8, `${'number Cant Be Less Than'} 8`)
      .max(16, `${'number Cant Be Less Than'} 16`)
      .required('field Is Required')
  });

  const handlerSubmit = async () => {
    setIsLoading(true);

    try {
      await axios({
        url: `${location?.origin}/api/send/answers`,
        method: 'POST',
        data: {
          ...values,
          answers
        }
      });
      notification({
        message: 'Success Fully Sent',
        type: 'success'
      });
      resetForm();
    } catch (error: any) {
      notification({
        message: error?.message || 'Something Wrong',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const {
    values,
    values: {
      fullName = '',
      email = '',
      phone = '',
    },
    handleSubmit,
    resetForm,
    setFieldValue,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      phone: '',
    },
    validationSchema: schema,
    validateOnChange: validateAfterSubmit,
    onSubmit: handlerSubmit
  });

  const lastPhoneRef = useRef(phone);

  const onPhoneChangeHandler = (value: string) => {
    if (lastPhoneRef.current !== value) {
      setFieldValue('phone', value);
      lastPhoneRef.current = value;
    }
  }

  return (
    <div className={styles['register-form']}>
      <Text
        tag="h2"
        size="large"
        weight="300"
      >
        Please leave your contact details
      </Text>
      <form className="fl fl--dir-col fl--gap-16" onSubmit={handleSubmit}>
        <LoaderBlur fetch={isLoading}>
          <>
            <InputComponent
              name="fullName"
              label="Name"
              value={fullName}
              onChange={setFieldValue as any}
              errors={errors.fullName}
              placeholder="enter your name"
            />
            <InputComponent
              name="email"
              label="Email"
              value={email}
              onChange={setFieldValue as any}
              errors={errors.email}
              placeholder="enter email"
            />
            {
              showIntlTelInput && (
              <div>
                <Text>Phone</Text>
                <IntlTelInput
                  onChangeNumber={onPhoneChangeHandler}
                  initOptions={{
                    initialCountry: "us",
                    nationalMode: false,
                    separateDialCode: true,
                  }}
                />
                {touched.phone && errors.phone && (
                  <Text 
                    size="small" 
                    color="red" 
                    className="margin--t-12 fl fl--align-c fl--gap-8"
                  >
                    {errors.phone}
                    <Image src="/warning.svg" alt="warning" width={20} height={20} />
                  </Text>
                )}
              </div>

              )
            }
            <Button
              htmlType="submit"
              type="primary"
              disabled={!isValid}
              onClick={() => {
                setValidateAfterSubmit(true);
              }}
            >
              send
            </Button>
          </>
        </LoaderBlur>
      </form>
    </div>
  )
}

export default RegisterForm;
