'use client';

import { useEffect, useRef } from 'react';

export default function Note({ id }) {
  const textareaRef = useRef(null);
  
  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
  }, []);

  return (
    <> 
    <img
        src={dummy}
        className="mx-auto mb-5 w-full rounded-lg"
        alt="Profile pic"
        width={300}
        height={300}
      />
      <input
        className="w-full text-3xl font-semibold text-black focus:outline-none"
        defaultValue={`Books Wishlist ${params.id}`}
      ></input>
      <textarea
        name=""
        id=""
        className="box-border mt-2 w-full rounded-md resize-none text-secondary focus:outline-none h-max"
        defaultValue={"lorem ipsum dolor sit amet"}
        ref={textareaRef}
        onInput={autoResize}
      ></textarea>

      <button type="submit" className="mt-5 button">
        submit
      </button>
    </>
  );
}