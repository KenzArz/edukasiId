import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const allBlogPosts = [
	{
		id: 1,
		slug: "peranan-agama-dalam-kehidupan",
		title: "Peranan Agama Dalam Kehidupan",
		excerpt: "Penjelasan mendalam mengenai enam rukun iman dalam Islam.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/1.png",
	},
	{
		id: 2,
		slug: "arti-sesungguhnya-jihad",
		title: "Ajaran Islam Dan Arti Sesungguhnya Jihad ",
		excerpt:
			"Mengapa shalat menjadi tiang agama dan bagaimana melaksanakannya dengan khusyuk.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/2.png",
	},
	{
		id: 3,
		slug: "al-quran",
		title: "Sumber Ajaran Islam: Al-Quran",
		excerpt: "Makna dan hikmah di balik ibadah puasa di bulan Ramadhan.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/3.png",
	},
	{
		id: 4,
		slug: "as-sunnah-atau-al-hadist",
		title: "Kedudukan As-sunnah Atau Al-hadist",
		excerpt: "Kewajiban zakat dan dampaknya bagi individu dan masyarakat.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/4.png",
	},
	{
		id: 5,
		slug: "ilmu-pengetahuan-dan-teknologi",
		title: "Islam, Ilmu Pengetahuan Dan Teknologi",
		excerpt: "Rukun, wajib, dan sunnah haji serta persiapan yang diperlukan.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/5.png",
	},
	{
		id: 6,
		slug: "aqidah-dan-syariah",
		title: "Ruang Lingkup Ajaran Islam: Aqidah Dan Syariah",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/6.png",
	},
	{
		id: 7,
		slug: "akhlak-mulia-cerminan-iman",
		title: "Ruang Lingkup Ajaran Islam: Akhlak",
		excerpt: "Pentingnya berakhlak mulia dalam Islam dan contoh-contohnya.",
		author: "Tim EdukasiID",
		date: "1 Juni 2025",
		image: "images/blog/7.png",
	},
	{
		id: 8,
		slug: "manusia-dan-agama",
		title: "Manusia Dan Agama",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/8.png",
	},
	{
		id: 9,
		slug: "ibadah-dan-urgensinya",
		title: "Hakikat Ibadah Dan Urgensinya",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/9.png",
	},
	{
		id: 10,
		slug: "kisah-para-nabi",
		title: "Islam Dan Kebudayaan",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/10.png",
	},
	{
		id: 11,
		slug: "al-ijtihad",
		title: "Sumber Ajaran Islam: Al-ijtihad",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/11.png",
	},
	{
		id: 12,
		slug: "islam-dan-toleransi",
		title: "Sumber Ajaran Islam: Islam Dan Toleransi",
		excerpt: "Belajar dari ketabahan dan kebijaksanaan para nabi utusan Allah.",
		author: "Tim EdukasiID",
		date: "12 Juni 2025",
		image: "/images/blog/12.png",
	},
];

const POSTS_PER_PAGE = 5;

const BlogPage = () => {
	const [currentPage, setCurrentPage] = React.useState(1);

	const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const currentPosts = allBlogPosts.slice(
		startIndex,
		startIndex + POSTS_PER_PAGE
	);

	const handlePageChange = page => {
		setCurrentPage(page);
		window.scrollTo(0, 0);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-12"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="text-center mb-12"
			>
				<h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
					Semua Materi Blog
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Temukan berbagai artikel menarik seputar ajaran Islam, fiqh, tafsir,
					dan kisah inspiratif.
				</p>
			</motion.div>

			<div className="space-y-12">
				{currentPosts.map((post, index) => (
					<motion.div
						key={post.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 + 0.3 }}
						className="bg-card rounded-xl shadow-lg overflow-hidden card-hover border md:flex"
					>
						<div className="md:w-1/3 h-64 md:h-auto">
							<img
								src={post.image}
								alt={`Ilustrasi ${post.title}`}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
							<Link to={`/blog/${post.slug}`}>
								<h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
									{post.title}
								</h2>
							</Link>
							<p className="text-muted-foreground mb-4 line-clamp-3">
								{post.excerpt}
							</p>
							<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
								<div className="flex items-center space-x-1">
									<User className="h-4 w-4" />
									<span>{post.author}</span>
								</div>
								<div className="flex items-center space-x-1">
									<Calendar className="h-4 w-4" />
									<span>{post.date}</span>
								</div>
							</div>
							<Link to={`/blog/${post.slug}`}>
								<Button
									variant="outline"
									className="hover:bg-primary hover:text-primary-foreground transition-colors"
								>
									Baca Selengkapnya <ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>
					</motion.div>
				))}
			</div>

			{totalPages > 1 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="flex justify-center items-center mt-12 space-x-2"
				>
					<Button
						variant="outline"
						size="icon"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="disabled:opacity-50"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<Button
							key={page}
							variant={currentPage === page ? "default" : "outline"}
							onClick={() => handlePageChange(page)}
							className="w-10 h-10"
						>
							{page}
						</Button>
					))}
					<Button
						variant="outline"
						size="icon"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="disabled:opacity-50"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</motion.div>
			)}
		</motion.div>
	);
};

export default BlogPage;
