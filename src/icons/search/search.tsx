import { SVGAttributes } from "react";

const Search = (props: SVGAttributes<HTMLOrSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="#FFF"
    fill-opacity=".6"
    fill-rule="evenodd"
    transform="translate(-561 -442) translate(561 442)"
  >
    <path d="M12.6 5.6c3.866 0 7 3.134 7 7 0 1.597-.534 3.068-1.434 4.246l3.3 3.3c.365.365.365.956 0 1.32-.336.337-.865.363-1.231.078l-.088-.077-3.301-3.301c-1.178.9-2.65 1.434-4.246 1.434-3.866 0-7-3.134-7-7s3.134-7 7-7zm0 1.867c-2.835 0-5.133 2.298-5.133 5.133s2.298 5.133 5.133 5.133 5.133-2.298 5.133-5.133-2.298-5.133-5.133-5.133z" />
  </svg>
);

export default Search;
