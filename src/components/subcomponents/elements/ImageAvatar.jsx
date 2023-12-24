import { string } from "prop-types";

const ImageAvatar = ({ src }) => {
    return (
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src={src}
          alt=""
        />
    );
}

ImageAvatar.propTypes = {
  src: string
};

export default ImageAvatar;