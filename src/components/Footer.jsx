import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="uppercase tracking-widest">epeoloides</h3>
          <p>Luxury fashion brand since 2010</p>
          <p>© 2023 Epeoloides International</p>
        </div>
        <div></div>
        <div>
          <h3 className="uppercase tracking-widest">Subscribe to our newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-black border border-white text-white p-2 text-xs md:text-sm"
            />
            <button className="underline">Submit</button>
          </form>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-xs text-center">
        Site - Managed by epeoloides TM – Copyright © epeoloides TM . 2025 – All
        rights reserved – any reproduction of the contents is strictly forbidden.
      </div>
    </footer>
  );
}

export default Footer;
