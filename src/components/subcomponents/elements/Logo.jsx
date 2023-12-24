import { string } from "prop-types";

const Logo = ({ src }) => {
    return (
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src={src}
          alt=""
        />
    );
}

Logo.propTypes = {
  src: string
};

export default Logo;