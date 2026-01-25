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
        color: "rgba(240, 240, 250, 1)",
        display: "inline-flex",
        height: "48px",
        textDecoration: "none",
        transition: "background-color .5s cubic-bezier(.19, 1, .22, 1)",
        alignItems: "center",
      }}
      className={`font-roboto font-medium text-sm px-6 hover:bg-ant-yellow text-sky-darker backdrop-blur ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

