export default function Footer() {
  return (
    <footer id="footer" className="bg-[#4B4D39] text-[#FEFBF6] pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Contact Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-6 uppercase tracking-wider font-['Rufina']">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p>Phone: 952-435-7349</p>
                <p>Fax: 952-417-6159</p>
                <a
                  href="mailto:info@lifetreeclinicmn.com"
                  className="hover:text-[#FEFBF6]/80 transition-colors block"
                >
                  info@lifetreeclinicmn.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-6 uppercase tracking-wider font-['Rufina']">Open</h3>
            <div className="flex flex-col gap-y-0.5 text-sm">
               <span>Mon: 10am-6pm</span>
               <span>Tue: 10am-3pm</span>
               <span>Wed: 7am-10pm</span>
               <span>Thu: 10am-6pm</span>
               <span>Fri: 7am-10am</span>
               <span>Sat: 8am-11am</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center font-['Rufina']">
             <div className="flex gap-4 mb-4">
                <img src="/award1.png" alt="Award 1" className="h-24 object-contain" />
                <img src="/award2.jpg" alt="Award 2" className="h-24 object-contain" />
             </div>
          </div>

        </div>
        <div className="text-[#FEFBF6]/60 text-sm text-center w-full pt-8 md:pt-12">
          <p>© 2026 LifeTree Acupuncture Minnesota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
