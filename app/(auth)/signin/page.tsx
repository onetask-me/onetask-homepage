import { utilSeo } from '@/seo'
import { SignIn } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = utilSeo

export default function SigninPage() {
	return (
		<SignIn
			signUpUrl='/signup'
			routing='hash'
			forceRedirectUrl={process.env.NEXT_PUBLIC_APP}
		/>
	)
}
