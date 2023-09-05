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

  email:joi.string().requered(),
  password:joiPwd(passwordComplexity).requered(),
  name:joi.string().min(2).max(30),
  lastName:joi.string().min(2).max(30),
  country:joi.string().min(2).max(30),
  state:joi.string().min(2).max(30),
  city:joi.string().min(2).max(30),
  photo:joi.string().uri(),
  birthDate:joi.date().max(Date.now()),
  age:joi.number(),
  phone:joi.string(),
  verified:joi.boolean()

})