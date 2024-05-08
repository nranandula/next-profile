'use server'
 
import { redirect } from 'next/navigation'

export async function BillingAction(formData:FormData){
    // TODO validation.
  redirect(`/account/settings`)
}