import React from "react";

type props = {
  textButton: string;
  target: string;
};

function Button(props: props) {
  const { textButton, target } = props;

  return (
    <a
      href={target}
      className={`flex items-center justify-center py-3 px-7 bg-gradient-to-r from-green to-blue text-white capitalize rounded-full hover:opacity-75`}
    >
      {textButton}
    </a>
  );
}

export default Button;
