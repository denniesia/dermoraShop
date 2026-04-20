import { LuGithub } from "react-icons/lu";

export default function Footer() {
return (
		<footer className="py-8 text-center text-gray-500 text-sm space-y-2">
			<hr className="my-4 border-t border-gray-300" />
			<p>© 2026 Dermora Shop. All rights reserved.</p>

			<p className="flex items-center justify-center gap-2">
				<a
					href="https://github.com/denniesia"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:text-gray-800 transition"
				>
					<div className="flex gap-1 hover:text-pink-500">
						<LuGithub size={18}  hover:text-pink-500/>
						<span>denniesia</span>
					</div>
				
				</a>

				<span>- Created with love and coffee</span>
			</p>
		</footer>
);
}