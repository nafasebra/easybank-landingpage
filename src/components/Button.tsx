import React from 'react'

type props = {
   textButton: string;
   customStyles: string;
   target: string;
}

function Button(props: props) {
   const {textButton, customStyles, target} = props;

  return (
    <a href={target} className={`${customStyles} flex items-center justify-center py-3 px-5 border-2 bg-transparent uppercase`}>
      {textButton}
    </a>
  )
}

export default Button