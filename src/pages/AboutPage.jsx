import React from "react";
import { motion } from "framer-motion";
import {
	Users,
	BookOpen,
	Target,
	ShieldCheck,
	Star,
	Mail,
	School2,
	Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const teamMembers = [
	{
		name: "Aldi Wijaya",
		npm: "2410631170004",
		image: "/images/member/aldi.png",
	},
	{
		name: "Bajang Riau Asqor",
		npm: "2410631170061",
		image: "/images/member/bajang.png",
	},
	{
		name: "Mediana Santosa",
		npm: "2410631170031",
		image: "/images/member/mediana.png",
	},
	{
		name: "Muhammad Abdul Halim",
		npm: "2410631170153",
		image: "/images/member/halim.png",
	},
	{
		name: "Muhammad Zidane Akbari",
		npm: "2410631170093",
		image: "/images/member/zidane.png",
	},
];

const AboutPage = () => {
	const showToast = () => {
		toast({
			description:
				"🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<section className="gradient-bg hero-pattern py-20 lg:py-28">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<BookOpen className="mx-auto h-16 w-16 text-primary mb-6" />
						<h1 className="text-4xl lg:text-5xl font-bold mb-6">
							Tentang <span className="text-gradient">EdukasiID</span>
						</h1>
						<p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
							Mengenal lebih dekat misi, visi, dan tim di balik EdukasiID yang
							berdedikasi untuk menyebarkan ilmu pengetahuan Islam yang
							bermanfaat.
						</p>
					</motion.div>
				</div>
			</section>

			{/* About EdukasiID Section */}
			<section className="py-16 lg:py-24 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
						>
							<h2 className="text-3xl lg:text-4xl font-bold mb-6">
								Apa itu EdukasiID?
							</h2>
							<p className="text-muted-foreground text-lg mb-4 leading-relaxed">
								EdukasiID adalah sebuah platform digital yang berkomitmen untuk
								menyediakan konten edukasi Islam yang berkualitas, mudah
								diakses, dan relevan dengan tantangan zaman. Kami percaya bahwa
								pemahaman yang benar tentang ajaran Islam akan membawa kedamaian
								dan kemajuan bagi individu maupun masyarakat.
							</p>
							<p className="text-muted-foreground text-lg mb-6 leading-relaxed">
								Kami menyajikan artikel, panduan, dan sumber belajar lainnya
								yang disusun oleh para ahli dan praktisi di bidangnya. Tujuan
								kami adalah menjadi teman setia Anda dalam perjalanan menuntut
								ilmu agama.
							</p>
							<Button
								size="lg"
								className="bg-primary hover:bg-primary/90 text-primary-foreground"
								onClick={showToast}
							>
								Pelajari Lebih Lanjut
							</Button>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: 0.2 }}
							className="grid grid-cols-2 gap-6"
						>
							<div className="bg-card p-6 rounded-xl shadow-lg border">
								<Target className="h-10 w-10 text-primary mb-3" />
								<h3 className="font-semibold text-xl mb-1">Misi Kami</h3>
								<p className="text-sm text-muted-foreground">
									Menyediakan akses mudah ke pengetahuan Islam yang otentik dan
									mencerahkan.
								</p>
							</div>
							<div className="bg-card p-6 rounded-xl shadow-lg border">
								<ShieldCheck className="h-10 w-10 text-primary mb-3" />
								<h3 className="font-semibold text-xl mb-1">Visi Kami</h3>
								<p className="text-sm text-muted-foreground">
									Menjadi platform edukasi Islam terdepan yang menginspirasi
									perubahan positif.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 lg:py-24 bg-muted/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<Users className="mx-auto h-12 w-12 text-primary mb-4" />
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Tim Kami (Kelompok 4)
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Orang-orang hebat di balik layar yang bekerja keras untuk
							mewujudkan visi EdukasiID.
						</p>
					</motion.div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-card rounded-xl shadow-lg p-6 text-center card-hover border"
							>
								<div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20">
									<img
										alt={member.name}
										src={member.image}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-1">{member.name}</h3>
								<p className="text-primary font-medium">{member.npm}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Dosen Pembimbing Section (Mirip Home) */}
			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Dosen Pembimbing
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Bertemu dengan dosen pembimbing yang berpengalaman dan berdedikasi
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto"
					>
						<div className="bg-card rounded-2xl shadow-2xl overflow-hidden border">
							<div className="md:flex">
								<div className="md:w-1/2 h-96 md:h-auto">
									<img
										alt="Dosen Pembimbing EdukasiID"
										className="w-full h-full object-cover md: object-[85%_25%]"
										src="/images/dosen/dosen.png"
									/>
								</div>
								<div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
									<div className="mb-6">
										<h3 className="text-2xl lg:text-3xl font-bold mb-2">
											Khalid Ramdhani, S.Pd.I., M.Pd.I
										</h3>
										<p className="text-primary font-semibold mb-4">
											Dosen Mata Kuliah Pendidikan Agama
										</p>
										<div className="flex items-center mb-4">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="h-5 w-5 text-yellow-400 fill-current"
												/>
											))}
											<span className="ml-2 text-muted-foreground">(5/5)</span>
										</div>
									</div>

									<div className="space-y-4 mb-6">
										<div className="flex items-center space-x-3">
											<School2 className="h-5 w-5 text-primary" />
											<span className="text-sm">
												Tenaga Pendidik Fakultas Agama Islam
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<Phone className="h-5 w-5 text-primary" />
											<span className="text-sm">+62 812 3456 7890</span>
										</div>
										<div className="flex items-center space-x-3">
											<Mail className="h-5 w-5 text-primary" />
											<span className="text-sm">
												khalid.ramdhani@universitas.edu
											</span>
										</div>
									</div>

									<p className="text-muted-foreground mb-6 leading-relaxed">
										"Pendidikan Islam bukan hanya tentang menghafal, tetapi
										memahami dan mengamalkan. Saya berkomitmen untuk membimbing
										setiap mahasiswa menemukan makna sejati dalam setiap
										pembelajaran."
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};
export default AboutPage;
