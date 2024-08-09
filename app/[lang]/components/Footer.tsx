type footerProps = {
  data: {
    title: string;
  };
};

const Footer = ({ data }: footerProps) => {
  const { title } = data;
  return (
    <div className="flex w-full flex-col mt-4 items-center justify-center text-center pt-10 mt-5 mb-10">
      {title}
    </div>
  );
};

export default Footer;
