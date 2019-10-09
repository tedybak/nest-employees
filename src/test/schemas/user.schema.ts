import {Schema} from 'mongoose'

export const UserSchema = new Schema({
    employee_name : String,
    employee_salary : String,
    employee_category: String,
    employee_picture: String,
})