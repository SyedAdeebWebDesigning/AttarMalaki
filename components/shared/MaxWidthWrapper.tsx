interface MaxWidthWrapperProps {
	children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
	return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default MaxWidthWrapper;
