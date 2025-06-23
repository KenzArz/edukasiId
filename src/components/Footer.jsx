import React from "react";
import { Link } from "react-router-dom";
import { BookText, X, Youtube, Facebook, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Footer = () => {
	const showToast = message => {
		toast({
			description:
				message ||
				"🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
		});
	};

	const navItems = [
		{ to: "/", label: "Home" },
		{ to: "/blog?page=1", label: "Blog" },
		{ to: "/about", label: "About" },
	];

	const socialLinks = [
		{ icon: <Youtube className="h-6 w-6" />, href: "#", label: "YouTube" },
		{ icon: <X className="h-6 w-6" />, href: "#", label: "X" },
		{ icon: <Instagram className="h-6 w-6" />, href: "#", label: "Instagram" },
		{ icon: <Facebook className="h-6 w-6" />, href: "#", label: "Facebook" },
	];

	return (
		<footer className="bg-primary/90 text-primary-foreground py-12 border-t border-primary/20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
						{/* Logo and About */}
						<div>
							<Link to="/" className="flex items-center space-x-2 mb-4">
								<BookText className="h-8 w-8" />
								<span className="text-2xl font-bold">EdukasiID</span>
							</Link>
							<p className="text-sm text-primary-foreground/80">
								Platform edukasi Islam yang mencerahkan dan menginspirasi.
							</p>
						</div>

						{/* Tautan Terkait */}
						<div>
							<p className="font-semibold text-lg mb-4">Tautan Terkait</p>
							<ul className="space-y-2">
								{navItems.map(item => (
									<li key={item.label}>
										<Link
											to={item.to}
											className="text-sm hover:underline text-primary-foreground/80 hover:text-primary-foreground"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Me */}
						<div>
							<p className="font-semibold text-lg mb-4">Hubungi Kami</p>
							<ul className="space-y-2 text-sm text-primary-foreground/80">
								<li>Email: info@edukasi.id</li>
								<li>Telepon: +62 123 4567 890</li>
								<li>Alamat: Jl. Inspirasi No. 1, Jakarta</li>
							</ul>
						</div>

						{/* Social Media */}
						<div>
							<p className="font-semibold text-lg mb-4">Ikuti Kami</p>
							<div className="flex space-x-4">
								{socialLinks.map(social => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
										aria-label={social.label}
										onClick={e => {
											e.preventDefault();
											showToast(`Mengunjungi ${social.label}`);
										}}
									>
										{social.icon}
									</a>
								))}
							</div>
							<p className="font-semibold text-lg mt-6 mb-2">
								Langganan Newsletter
							</p>
							<form
								onSubmit={e => {
									e.preventDefault();
									showToast("Terima kasih telah berlangganan!");
									e.target.reset();
								}}
								className="flex"
							>
								<input
									type="email"
									placeholder="Email Anda"
									className="bg-background/20 text-primary-foreground placeholder-primary-foreground/60 px-3 py-2 rounded-l-md focus:ring-2 focus:ring-background outline-none text-sm w-full"
									required
								/>
								<Button
									type="submit"
									size="icon"
									className="bg-background text-primary hover:bg-background/90 rounded-l-none"
								>
									<Send className="h-5 w-5" />
								</Button>
							</form>
						</div>
					</div>

					<div className="border-t border-primary-foreground/20 pt-8 text-center">
						<p className="text-sm text-primary-foreground/80">
							© {new Date().getFullYear()} EdukasiID. Semua Hak Dilindungi.
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
