export const Button = ({
	children,
	onClick,
	className = '',
	type = 'button',
	disabled = false,
	...props
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
      style={{
        border: "1px solid rgba(240, 240, 250, .35)",
        cursor: "pointer",
        borderRadius: "4px",
        display: "inline-flex",
        height: "48px",
        textDecoration: "none",
        transition: "all .5s cubic-bezier(.19, 1, .22, 1)",
        alignItems: "center",
      }}
			className={`font-roboto font-medium text-sm px-6 text-[rgba(240,240,250,1)] hover:bg-[#f0f0fa] hover:text-[#000000] backdrop-blur ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

