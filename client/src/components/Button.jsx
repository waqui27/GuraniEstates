const Button = ({ children, ...props }) => {
  return (
    <button
      className="lg:w-64 px-4 py-2 bg-primary text-white rounded hover:bg-transparent border-2 border-primary hover:text-primary hover:border-2 hover:border-primary transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
