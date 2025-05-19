import * as yup from 'yup';

const emailValidation = (translation?: { [key: string]: string }): yup.StringSchema<string | undefined> => yup.string().email(translation?.validationIncorrectEmail)
.required(translation?.validationRequiredField || 'Field is required')
.matches(/^[a-zA-Z0-9._-]{2,}@[a-z]+\.[a-z]+$/, { message: translation?.validationIncorrectEmail || 'Email Is Not Correct' })
.test('minUsernameLength', (value: string | undefined) => {
    const usernamePart = value?.split('@')[0];
    return !!usernamePart && !/^[_.-]+$/.test(usernamePart);
});
const phoneValidation = (translation?: { [key: string]: string }): yup.StringSchema<string | undefined> => yup
    .string()
    .typeError(`* ${translation?.pleaseEnterValidNumber || 'Please enter valid number'}`)
    .matches(/^\+?[0-9]+$/,  `* ${translation?.pleaseEnterValidNumber || 'Please enter valid number'}`)
    .min(10, `${translation?.numberCantBeLessThan || 'Number cant be less than'} 10`)
    .max(14, `${translation?.numberCantBeMoreThan || 'Number cant be more than'} 14`)
    .required(translation?.validationRequiredField || 'Field is required');
    
export { emailValidation, phoneValidation };
