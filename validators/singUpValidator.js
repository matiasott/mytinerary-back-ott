import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const passwordComplexity = {
  min: 6,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
}

export const signUpSchema = joi.object({

  email:joi.string().email().required().messages({
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address (e.g., user@example.com)',
  }),
  password:joiPwd(passwordComplexity),
  name:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  lastName:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  country:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  state:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  city:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  photo:joi.string().uri().messages({
    'string.uri': 'Photo must be a valid URI',
  }),
  birthDate:joi.date().max(Date.now()).messages({
    'date.max': 'Birthdate cannot be in the future',
  }),
  age:joi.number().messages({
    'number.base': 'Age must be a number',
  }),
  phone:joi.string().messages({
    'string.base': 'Phone number must be a string',
  }),
  verified:joi.boolean().messages({
    'boolean.base': 'Verified must be a boolean value',
  }),

})