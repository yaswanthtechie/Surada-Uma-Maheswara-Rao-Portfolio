import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	LucideIcon,
	Mail,
	MapPin,
	Phone,
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	InstagramIcon,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

interface ContactPageProps {
	email?: string;
	phone?: string;
	phone2?: string;
	address?: string;
	socialLinks?: Array<{
		icon: LucideIcon;
		href: string;
		label: string;
	}>;
}

export function ContactPage({
	email = 'mail@example.com',
	phone = '+92 300 1234567',
	phone2,
	address = 'Office # 100, 101 Second Floor Kohinoor 1, Faisalabad, Pakistan',
	socialLinks = [
		{
			icon: GithubIcon,
			href: 'https://github.com/NV-Deekshitha',
			label: 'GitHub',
		},
		{
			icon: TwitterIcon,
			href: 'https://twitter.com',
			label: 'Twitter',
		},
		{
			icon: LinkedinIcon,
			href: 'https://linkedin.com',
			label: 'LinkedIn',
		},
		{
			icon: InstagramIcon,
			href: 'https://instagram.com',
			label: 'Instagram',
		},
	],
}: ContactPageProps) {
	return (
		<div className="min-h-screen w-full">
			<div className="mx-auto h-full max-w-6xl lg:border-x border-white/10">
				<div
					aria-hidden
					className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
				>
					<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(var(--foreground)/.06)_0,hsla(0,0%,55%,.02)_50%,hsl(var(--foreground)/.01)_80%)] absolute top-0 left-0 h-[320px] w-[140px] -translate-y-[87.5px] -rotate-45 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/.04)_0,hsl(var(--foreground)/.01)_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[60px] translate-x-[5%] -translate-y-1/2 -rotate-45 rounded-full" />
					<div className="bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--foreground)/.04)_0,hsl(var(--foreground)/.01)_80%,transparent_100%)] absolute top-0 left-0 h-[320px] w-[60px] -translate-y-[87.5px] -rotate-45 rounded-full" />
				</div>
				<div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
					<h1 className="text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gradient-rose via-white to-gradient-amber">
						Get In Touch
					</h1>
					<p className="text-foreground/60 mb-5 text-base">
						Let's discuss your next project or opportunity.
					</p>
				</div>
				<BorderSeparator />
				<div className="grid md:grid-cols-3">
					<Box
						icon={Mail}
						title="Email"
						description="We respond to all emails within 24 hours."
					>
						<a
							href={`mailto:${email}`}
							className="font-mono text-base font-medium tracking-wide hover:underline text-white"
						>
							{email}
						</a>
						<CopyButton className="size-6" test={email} />
					</Box>
					<Box
						icon={MapPin}
						title="Location"
						description="Available for remote work worldwide."
					>
						<span className="font-mono text-base font-medium tracking-wide text-white">
							{address}
						</span>
					</Box>
					<Box
						icon={Phone}
						title="Phone"
						description="Available Mon-Fri, 9am-5pm."
						className="border-b-0 md:border-r-0"
					>
						<div>
							<div className="flex items-center gap-x-2">
								<a
									href={`tel:${phone}`}
									className="block font-mono text-base font-medium tracking-wide hover:underline text-white"
								>
									{phone}
								</a>
								<CopyButton className="size-6" test={phone} />
							</div>
							{phone2 && (
								<div className="flex items-center gap-x-2">
									<a
										href={`tel:${phone2}`}
										className="block font-mono text-base font-medium tracking-wide hover:underline text-white"
									>
										{phone2}
									</a>
									<CopyButton className="size-6" test={phone2} />
								</div>
							)}
						</div>
					</Box>
				</div>
				<BorderSeparator />
				<div className="relative flex h-full min-h-[320px] items-center justify-center">
					<div
						className={cn(
							'absolute inset-0 size-full -z-10',
							'bg-[radial-gradient(hsl(var(--foreground)/.15)_1px,transparent_1px)]',
							'bg-[size:32px_32px]',
							'[mask-image:radial-gradient(ellipse_at_center,hsl(var(--background))_30%,transparent)]',
						)}
					/>

					<div className="relative z-1 space-y-6">
						<h2 className="text-center text-3xl font-bold md:text-4xl text-white">
							Find me online
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-white/5 hover:bg-white/10 flex items-center gap-x-2 rounded-full border border-white/10 hover:border-white/20 px-4 py-2 transition-all duration-300"
								>
									<link.icon className="size-4 text-white" />
									<span className="font-mono text-sm font-medium tracking-wide text-white">
										{link.label}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function BorderSeparator() {
	return <div className="absolute inset-x-0 h-px w-full border-b border-white/10" />;
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b border-white/10 md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-white/5 flex items-center gap-x-3 border-b border-white/10 p-4">
				<props.icon className="text-foreground/60 size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider text-white">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
			<div className="border-t border-white/10 p-4">
				<p className="text-foreground/60 text-sm">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = ButtonProps & {
	test: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	test,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(test);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'absolute transition-all',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}
