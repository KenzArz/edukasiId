import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
	School2,
	Mail,
	Phone,
	Calendar,
	User,
	ChevronRight,
	Star,
	Clock,
	Eye,
	ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const blogPostsData = [
	{
		id: 1,
		title: "Peranan Agama Dalam Kehidupan",
		excerpt:
			"Penjelasan mendalam mengenai peranan agama bagi kehidupan manusia",
		author: "Tim EdukasiID",
		date: "20 Juni 2025",
		readTime: "5 min",
		views: "1.2k",
		slug: "peranan-agama-dalam-kehidupan",
		image: "/images/blog/1.png",
	},
	{
		id: 2,
		title: "Sumber Ajaran Islam: Al-Quran",
		excerpt: "Makna dan hikmah Al-Quran sebagai pedoman hidup",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		readTime: "7 min",
		views: "2.1k",
		slug: "al-quran",
		image: "/images/blog/3.png",
	},
	{
		id: 3,
		title: "Kedudukan As-sunnah Atau Al-hadist",
		excerpt: "peranan As-sunnad atau Al-hadist sebagai sumber ajaran islam",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		readTime: "6 min",
		views: "1.8k",
		slug: "as-sunnah-atau-al-hadist",
		image: "/images/blog/4.png",
	},
	{
		id: 4,
		title: "Ruang Lingkup Ajaran Islam: Aqidah Dan Syariah",
		excerpt: "Memahami aqidah dan syariah untuk keberlangsungan hidup manusia",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		readTime: "8 min",
		views: "1.5k",
		slug: "aqidah-dan-syariah",
		image: "/images/blog/6.png",
	},
	{
		id: 5,
		title: "Sumber Ajaran Islam: Al-ijtihad.",
		excerpt: "Petunjuk hukum dalam perumusan hukum islam",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		readTime: "10 min",
		views: "3.5k",
		slug: "al-ijtihad",
		image: "/images/blog/11.png",
	},
	{
		id: 6,
		title: "Hakikat Ibadah Dan Urgensinya",
		excerpt: "Pentingnya beribadah bagi umat islam dan alasannya",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		readTime: "12 min",
		views: "2.8k",
		slug: "ibadah-dan-urgensinya",
		image: "/images/blog/9.png",
	},
];

const activitiesData = [
	{
		title: "Mahasiswa menyimak materi presentasi",
		description:
			"Mahasiswa sedang menyimak materi presentasi dari kelompok temennya",
		image: "/images/discussion/1.png",
	},
	{
		title: "Berdiskusi tentang materi presentasi",
		description:
			"Mahasiswa sedang berdiskusi mengenai materi manusia dan islam",
		image: "/images/discussion/2.png",
	},
	{
		title: "Presentasi kelompok secara offline",
		description: "Mahasiswa melakukan presentasi di depan kelas",
		image: "/images/discussion/3.png",
	},
	{
		title: "Mencatat materi presentasi",
		description:
			"Mahasiswa sedang mencetat materi presentasi kelompok temennya",
		image: "/images/discussion/4.png",
	},
	{
		title: "Sibuk menulis materi presentasi",
		description:
			"Mahasiswa dengan fokusnya menulis materi presentasi kelompok temennya",
		image: "/images/discussion/5.png",
	},
	{
		title: "Presentasi kelompok secara online",
		description: "Mahasiswa melakukan presentasi menggunakan gmeet",
		image: "/images/discussion/6.png",
	},
];

const CARDS_TO_SHOW_DESKTOP = 4;
const CARD_WIDTH_PERCENTAGE = 100 / CARDS_TO_SHOW_DESKTOP;

const HomePage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const scrollContainerRef = useRef(null);
	const currentIndexRef = useRef(currentIndex);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 1024);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const numVisibleCards = isMobile ? 1 : CARDS_TO_SHOW_DESKTOP;
	const totalItems = blogPostsData.length;
	const maxIndex = Math.max(0, totalItems - numVisibleCards);

	const scroll = direction => {
		let newIndex = currentIndexRef.current + direction;
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex > maxIndex) {
			newIndex = maxIndex;
		}
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		currentIndexRef.current = currentIndex; // Perbarui ref saat currentIndex berubah
	}, [currentIndex]);

	useEffect(() => {
		const autoScroll = () => {
			setCurrentIndex(prevIndex => {
				if (prevIndex >= maxIndex) return 0;
				return prevIndex + 1;
			});
		};

		const intervalId = setInterval(autoScroll, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [maxIndex]);

	const cardVariants = {
		enter: direction => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: direction => ({
			zIndex: 0,
			x: direction < 0 ? 100 : -100,
			opacity: 0,
		}),
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Hero Section */}
			<section className="gradient-bg hero-pattern py-20 lg:py-32">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
							Selamat Datang di <span className="text-gradient">EdukasiID</span>
						</h1>
						<p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
							EdukasiID adalah platform untuk memperdalam pemahaman Anda tentang
							ajaran Islam, menyajikan materi-materi keagamaan yang mencerdaskan
							dan menginspirasi. Temukan kedamaian dan hikmah melalui
							tulisan-tulisan kami.
						</p>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link to="/blog">
								<Button
									size="lg"
									className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
								>
									Jelajahi Blog Kami
									<ChevronRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<section className="py-20 bg-background">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Blog Terbaru
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Artikel-artikel terbaru tentang ajaran Islam yang menginspirasi
							dan mendidik
						</p>
					</motion.div>

					<div className="relative">
						{!isMobile && (
							<>
								<Button
									variant="outline"
									size="icon"
									className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background disabled:opacity-30"
									onClick={() => scroll(-1)}
									disabled={currentIndex === 0}
								>
									<ChevronLeft className="h-6 w-6" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background disabled:opacity-30"
									onClick={() => scroll(1)}
									disabled={currentIndex === maxIndex}
								>
									<ChevronRight className="h-6 w-6" />
								</Button>
							</>
						)}

						<div
							ref={scrollContainerRef}
							className={`overflow-hidden ${
								isMobile
									? "flex overflow-x-auto pb-8 -mb-8 scrollbar-hide"
									: "relative"
							}`}
						>
							<motion.div
								className={`flex ${isMobile ? "gap-8" : ""}`}
								animate={{
									x: `-${
										currentIndex * (isMobile ? 0 : CARD_WIDTH_PERCENTAGE)
									}%`,
								}}
								transition={{
									type: "spring",
									stiffness: isMobile ? 200 : 100,
									damping: isMobile ? 20 : 30,
								}}
							>
								{blogPostsData.map(post => (
									<motion.div
										key={post.id}
										custom={currentIndexRef}
										variants={!isMobile ? cardVariants : {}}
										initial={!isMobile ? "enter" : { opacity: 0, y: 30 }}
										animate={!isMobile ? "center" : { opacity: 1, y: 0 }}
										exit={!isMobile ? "exit" : {}}
										transition={{ duration: 0.5 }}
										className={`bg-card rounded-xl shadow-lg overflow-hidden card-hover border ${
											isMobile ? "min-w-[280px]" : "min-w-0 flex-shrink-0"
										} lg:w-[calc(25%-1.5rem)] lg:mr-8 last:lg:mr-0`}
										style={
											!isMobile
												? { width: `calc(${CARD_WIDTH_PERCENTAGE}% - 1.5rem)` }
												: {}
										}
									>
										<div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
											<img
												alt={`Ilustrasi ${post.title}`}
												className="w-full h-full object-cover"
												src={post.image}
											/>
										</div>
										<div className="p-6">
											<Link to={`/blog/${post.slug}`}>
												<h3 className="font-bold text-lg mb-3 line-clamp-2 hover:text-primary transition-colors">
													{post.title}
												</h3>
											</Link>
											<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
												{post.excerpt}
											</p>
											<div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
												<div className="flex items-center space-x-1">
													<User className="h-3 w-3" />
													<span>{post.author}</span>
												</div>
												<div className="flex items-center space-x-1">
													<Calendar className="h-3 w-3" />
													<span>{post.date}</span>
												</div>
											</div>
											<div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
												<div className="flex items-center space-x-1">
													<Clock className="h-3 w-3" />
													<span>{post.readTime}</span>
												</div>
												<div className="flex items-center space-x-1">
													<Eye className="h-3 w-3" />
													<span>{post.views}</span>
												</div>
											</div>
											<Link to={`/blog/${post.slug}`} className="w-full">
												<Button
													variant="outline"
													className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
												>
													Baca Selengkapnya →
												</Button>
											</Link>
										</div>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			{/* Kegiatan Belajar-Mengajar Section */}
			<section className="py-20 bg-muted/30">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Kegiatan Belajar-Mengajar
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Dokumentasi kegiatan pembelajaran dan pengajaran Islam di
							lingkungan kami
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{activitiesData.map((activity, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-card rounded-xl shadow-lg overflow-hidden card-hover border"
							>
								<div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5">
									<img
										alt={activity.title}
										className="w-full h-full object-cover"
										src={activity.image}
									/>
								</div>
								<div className="p-6">
									<h3 className="font-bold text-lg mb-2">{activity.title}</h3>
									<p className="text-muted-foreground text-sm">
										{activity.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Dosen Pembimbing Section */}
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
										className="w-full h-full object-cover object-[85%_25%]"
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
										Dr. Khalid Ramdhani, S.Pd.I., M.Pd.I merupakan salah satu
										tenaga pendidik di Universitas Singaperbangsa Karawang
										(UNSIKA). Beliau memiliki keahlian lintas disiplin, mengajar
										di Fakultas Agama Islam dan juga berkontribusi dalam
										pengajaran di program studi Informatika, Fakultas Ilmu
										Komputer UNSIKA.
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

export default HomePage;
