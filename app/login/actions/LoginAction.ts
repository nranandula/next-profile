'use server'
 
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function LoginAction(formData:FormData){
    const userName = formData.get('userName')
    cookies().set('isAuthenticated', 'true')              
  redirect(`/${userName}/profile`)
}