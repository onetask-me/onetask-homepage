import { AuthLayout } from '@/layouts/auth-layout'

export default function AuthXLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<AuthLayout>
				<main className='h-full min-h-screen w-full flex justify-center items-center'>
					{children}
				</main>
			</AuthLayout>
		</>
	)
}
