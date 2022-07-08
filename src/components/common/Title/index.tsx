function Title({ className = "", children }) {
  return (
    <h2
      className={`fancy-gradient bg-clip-text text-2xl font-black uppercase text-transparent sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export default Title;
