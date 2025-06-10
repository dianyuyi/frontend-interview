const CheckIcon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
export default CheckIcon;

{/* <svg
    className="
      absolute 
      w-4 h-4 mt-1
      hidden peer-checked:block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg> */}