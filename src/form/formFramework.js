import is from 'is_js';

export const createControl = (config, validation) => ({
  ...config,
  validation,
  valid: !validation,
  touched: false,
  shouldValidate: !!validation,
  value: '',
});

export const validate = (value, validation = null) => {
  let isValid = true;

  if (!validation) {
    return isValid;
  }

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  return isValid;
};

export const validateForm = formControls => Object.keys(formControls)
  .reduce((isFormValid, control) => formControls[control].valid && isFormValid, true);
