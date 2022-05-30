import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-male-sprites/dist/";

const Avatar = ({ seedProp, className }) => {
  let svg = createAvatar(style, {
    seed: seedProp,
  });
  return (
    <span
      className={`w-20 h-20 flex ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></span>
  );
};
export default Avatar;
