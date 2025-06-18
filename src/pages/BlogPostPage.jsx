import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronLeft, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { allBlogPosts } from "../js/allBlogPost";

const ArabicTextCard = ({ text, translation }) => (
	<motion.div
		initial={{ opacity: 0, y: 10 }}
		animate={{ opacity: 1, y: 0 }}
		className="my-6 p-6 bg-primary/5 border-l-4 border-primary rounded-lg shadow-sm"
	>
		<p
			className="text-2xl md:text-3xl text-right font-arabic leading-loose text-primary mb-3"
			dir="rtl"
		>
			{text}
		</p>
		{translation && (
			<p className="text-sm text-muted-foreground italic">"{translation}"</p>
		)}
	</motion.div>
);

const BlogPostPage = () => {
	const { id: slug } = useParams();
	const post = allBlogPosts.find(p => p.slug === slug);

	if (!post) {
		return (
			<div className="container mx-auto px-4 py-12 text-center">
				<h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
				<p className="text-muted-foreground mb-8">
					Maaf, artikel yang Anda cari tidak ada.
				</p>
				<Link to="/blog">
					<Button variant="outline">
						<ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Blog
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-12"
		>
			<article className="max-w-3xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<Link
						to="/blog"
						className="inline-flex items-center text-primary hover:underline mb-6"
					>
						<ChevronLeft className="mr-1 h-4 w-4" /> Kembali ke Semua Artikel
					</Link>
					<h1 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
						{post.title}
					</h1>
					<div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
						<div className="flex items-center space-x-1">
							<User className="h-4 w-4" />
							<span>{post.author}</span>
						</div>
						<div className="flex items-center space-x-1">
							<Calendar className="h-4 w-4" />
							<span>{post.date}</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg"
				>
					<img
						src={post.image}
						alt={`Gambar utama untuk ${post.title}`}
						className="w-full h-full object-cover"
					/>
				</motion.div>

				<div className="prose prose-lg dark:prose-invert max-w-none">
					{post.content.map((item, index) => {
						if (item.type === "paragraph") {
							return item.text.split("\n").map((text, index) => (
								<p
									key={index}
									className="mb-4 leading-relaxed text-foreground/90"
								>
									{text}
								</p>
							));
						}
						if (item.type === "heading") {
							const Tag = `h${item.level}`;
							return (
								<Tag
									key={index}
									className="mt-6 mb-3 font-semibold text-foreground"
								>
									{item.text}
								</Tag>
							);
						}
						if (item.type === "list") {
							return (
								<ul
									key={index}
									className="list-disc list-inside mb-4 space-y-1 pl-2 text-foreground/90"
								>
									{item.items.map((li, i) => (
										<li key={i}>{li}</li>
									))}
								</ul>
							);
						}
						if (item.type === "arabic") {
							return (
								<ArabicTextCard
									key={index}
									text={item.text}
									translation={item.translation}
								/>
							);
						}
						return null;
					})}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 + post.content.length * 0.05 }}
					className="mt-12 pt-8 border-t"
				>
					<p className="text-muted-foreground">
						Artikel ini ditulis oleh{" "}
						<span className="font-semibold text-primary">{post.author}</span>{" "}
						dan dipublikasikan pada{" "}
						<span className="font-semibold text-primary">{post.date}</span>.
					</p>
					<div className="mt-6 flex items-center">
						<BookOpen className="h-5 w-5 text-primary mr-2" />
						<span className="text-sm text-muted-foreground">
							Terima kasih telah membaca di EdukasiID!
						</span>
					</div>
				</motion.div>
			</article>
		</motion.div>
	);
};

export default BlogPostPage;
