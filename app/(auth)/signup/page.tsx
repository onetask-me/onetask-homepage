import { utilSeo } from '@/seo'
import { SignUp } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = utilSeo

export default function SignupPage() {
	return (
		<SignUp
			signInUrl='/signin'
			routing='hash'
			forceRedirectUrl={process.env.NEXT_PUBLIC_APP}
		/>
	)
}
