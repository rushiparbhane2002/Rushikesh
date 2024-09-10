const Mail = () => {
  return (
    <div className="flex md-mx:hidden text-textColor  items-center gap-10 fixed bottom-56 -right-44 rotate-90">
      <div className="flex" data-aos="fade-down-left" data-aos-duration="1200">
        <a
          href="mailto:rushiparbhane2002@gmail.com"
          className="font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition-transform duration-300 ease-in-out"
        >
          rushiparbhane2002@gmail.com
        </a>
      </div>
      <hr className="border-[2px] rounded-full w-40 bg-textColor border-textColor" />
    </div>
  );
};

export default Mail;
