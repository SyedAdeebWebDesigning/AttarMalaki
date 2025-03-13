interface layoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
	return (
		<div className="flex items-center justify-center min-h-[90vh]">
			{children}
		</div>
	);
};

export default layout;
