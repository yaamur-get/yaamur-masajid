import React from "react";

type Props = {
  size?: number | string;
  className?: string;
  title?: string;
};

export const MosqueConstructionLogo: React.FC<Props> = ({ size = 32, className = "", title = "شعار يعمر - بناء المساجد" }) => {
  const s = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="8" fill="white" />
      <path d="M10 40h44v10a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V40z" fill="#E6F7F0" />
      <path d="M32 16c6 0 11 5 11 11H21c0-6 5-11 11-11z" fill="#08704C" />
      <rect x="44" y="14" width="4" height="14" rx="1" fill="#08704C" />
      <rect x="44" y="10" width="4" height="4" rx="1" fill="#00A186" />
      <path d="M22.5 32.5l9-9 3 3-9 9a6 6 0 1 1-3-3z" fill="#F6F8F7" />
      <path d="M24 34l9-9" stroke="#7B4F28" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="44" cy="44" r="6" fill="#00A186" opacity="0.12" />
      <g opacity="0.9">
        <path d="M14 44h36" stroke="#E6F7F0" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default MosqueConstructionLogo;
