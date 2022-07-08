interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  children: React.ReactNode;
}

function Marquee({ reverse = false, children, ...props }: MarqueeProps) {
  return (
    <div {...props}>
      <ul
        className={`animate-marquee overflow-hidden ${
          reverse ? "animation-reverse" : ""
        } inline-flex`}
      >
        {children}
        {children}
      </ul>
    </div>
  );
}

export default Marquee;
