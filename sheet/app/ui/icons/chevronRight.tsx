const ChevronRightIcon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18.0001 14L16.5901 15.41L21.1701 20L16.5901 24.59L18.0001 26L24.0001 20L18.0001 14Z" />
  </svg>
);
export default ChevronRightIcon;
