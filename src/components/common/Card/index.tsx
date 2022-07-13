function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-primary border-secondary rounded-md border p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
