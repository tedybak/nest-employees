import {Document} from 'mongoose'

export interface UserI extends Document{
    employee_name : string,
    employee_salary : string,
    employee_category: string,
    employee_picture: string,
}