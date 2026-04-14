export default function Footer() {
	return (
		<footer className="py-8 text-center text-gray-500 text-sm space-y-2">
			<hr className="my-4 border-t-1 border-gray-300" />
			<p>© 2026 Dermora Shop. All rights reserved.</p>

			<p className="flex items-center justify-center gap-2">
				<a
					href="https://github.com/denniesia"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:text-gray-800 transition"
				>
					<i className="fa-brands fa-github text-xl text-gray-600 hover:text-black transition" />
					<span>denniesia</span>
				</a>

				<span>- Created with love and coffee</span>
			</p>
		</footer>
	);
}