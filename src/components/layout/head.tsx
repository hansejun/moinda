import Head from "next/head";
import React from "react";

interface IHead {
  title?: string;
}

const CustomHead = ({ title }: IHead) => {
  return (
    <Head>
      <title>MOINDA {title && `| ${title}`}</title>
    </Head>
  );
};

export default CustomHead;
