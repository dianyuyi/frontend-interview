import React from "react";
import Link from "next/link";
import { footerData } from "@/constants/Footer";

const Footer = () => {
  return (
    <footer className="flex px-6 py-4 justify-between items-center">
      <div className="flex gap-2">
        <span>{footerData.copyright.context}</span>
        <span className="text-theme-main">{footerData.copyright.author}</span>
      </div>
      <div className="flex gap-4 text-theme-main">
        {footerData.list.map((v, idx) => (
          <Link href={v.url} key={idx}>
            {v.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
