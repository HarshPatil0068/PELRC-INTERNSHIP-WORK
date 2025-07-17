const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white mb-1">
            Pro Engineers Learning and Research Centre
          </h4>
          <p className="text-sm text-slate-400">
            Empowering Future Innovators
          </p>
        </div>

        {/* Contact / Links */}
        <div className="text-center md:text-right text-sm">
          <p className="text-slate-400">Contact: <a href="mailto:info@pelrc.in" className="text-slate-200 hover:underline">info@pelrc.in</a></p>
          <p className="text-slate-400 mt-1">© {new Date().getFullYear()} PELRC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
