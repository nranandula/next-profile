'use server'
 
import { redirect } from 'next/navigation'

export async function BillingAction(formData:FormData){
  const userName = formData.get('userName')  
  // TODO validation.
  debugger
  console.log("SERVER ACTION")
  redirect(`/${userName}/settings`)
}