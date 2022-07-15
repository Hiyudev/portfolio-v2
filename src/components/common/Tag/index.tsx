function Tag({ children }) {
  return (
    <li className="bg-secondary rounded-full p-1 px-3">
      <small className="text-secondary">{children}</small>
    </li>
  );
}

export default Tag;
