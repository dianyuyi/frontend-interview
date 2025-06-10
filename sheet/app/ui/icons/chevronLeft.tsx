const ChevronLeftIcon = ({
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
    <path d="M23.41 15.41L22 14L16 20L22 26L23.41 24.59L18.83 20L23.41 15.41Z" />
  </svg>
);
export default ChevronLeftIcon;
