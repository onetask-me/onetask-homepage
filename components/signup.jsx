'use client'

import { Button } from '@/components/button'
import { useEffect, useState } from 'react'

export const Signup = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const [showError, setShowError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [email, setEmail] = useState('')

	useEffect(() => {
		const formContainers = document.getElementsByClassName(
			'newsletter-form-container'
		)
		Array.from(formContainers).forEach(formContainer => {
			if (!formContainer.classList.contains('newsletter-handlers-added')) {
				formContainer.classList.add('newsletter-handlers-added')
			}
		})
	}, [])

	const submitHandler = async event => {
		event.preventDefault()
		setIsSubmitting(true)
		setShowSuccess(false)
		setShowError(false)

		const timestamp = new Date().valueOf()
		const previousTimestamp = localStorage.getItem('loops-form-timestamp')

		if (previousTimestamp && Number(previousTimestamp) + 30000 > timestamp) {
			rateLimit()
			return
		}

		localStorage.setItem('loops-form-timestamp', timestamp.toString())

		try {
			const response = await fetch(
				'https://app.loops.so/api/newsletter-form/clsex69qf020e2rscjowepuq7',
				{
					method: 'POST',
					body: `userGroup=&email=${encodeURIComponent(email)}`,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			)

			if (response.ok) {
				setShowSuccess(true)
				setEmail('')
			} else {
				const data = await response.json()
				setErrorMessage(data.message ? data.message : response.statusText)
				setShowError(true)
			}
		} catch (error) {
			if (error.message === 'Failed to fetch') {
				rateLimit()
				return
			}
			setErrorMessage(error.message ? error.message : 'An error occurred')
			setShowError(true)
		} finally {
			setIsSubmitting(false)
		}
	}

	const rateLimit = () => {
		setErrorMessage('Too many signups, please try again in a little while')
		setShowError(true)
		setIsSubmitting(false)
	}

	const resetFormHandler = () => {
		setShowSuccess(false)
		setShowError(false)
		setEmail('')
	}

	return (
		<div className='newsletter-form-container w-full flex flex-col justify-center items-center'>
			<form
				className='newsletter-form'
				onSubmit={submitHandler}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%'
				}}
			>
				<input
					type='email'
					className='border'
					placeholder='you@example.com'
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
					style={{
						fontFamily: 'Inter, sans-serif',
						color: 'rgb(0, 0, 0)',
						fontSize: '14px',
						color: 'white',
						margin: '0px 0px 10px',
						width: '100%',
						maxWidth: '300px',
						minWidth: '100px',
						borderRadius: '6px',
						padding: '8px 12px'
					}}
				/>

				<Button
					type='submit'
					disabled={isSubmitting}
					intent='primary'
					size='lg'
					className='mt-4'
				>
					{isSubmitting ? 'Please wait...' : 'Join Waitlist'}
				</Button>
			</form>

			{showSuccess && (
				<div
					className='newsletter-success'
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%'
					}}
				>
					<p
						className='newsletter-success-message'
						style={{
							fontFamily: 'Inter, sans-serif',
							color: 'rgb(0, 0, 0)',
							fontSize: '14px',
							color: 'white'
						}}
					>
						Thanks! We'll be in touch!
					</p>
				</div>
			)}

			{showError && (
				<div
					className='newsletter-error'
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%'
					}}
				>
					<p
						className='newsletter-error-message'
						style={{
							fontFamily: 'Inter, sans-serif',
							color: 'rgb(185, 28, 28)',
							fontSize: '14px'
						}}
					>
						{errorMessage}
					</p>
				</div>
			)}
		</div>
	)
}
