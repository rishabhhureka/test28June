import React from 'react';
import Link from 'next/link';
import "../app/globals.css"
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" aria-label="Go to Home">
            <img
           src="data:image/png;base64,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"
              alt="Logo"
            />
          </Link>
        </div>
        <button className="menu-button" aria-label="Menu Button">
          <img
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAXCAYAAAD6FjQuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABMSURBVHgB7dNBDQAhDETR31W0EpCAY5CEgwIeoAEy79LjJE2+uXsBEvtVG2NOkI9Ac6wRZL4xj/uzX0WuY4p61ZiiljMo6mVjb0bdAVkwKcVo+BeMAAAAAElFTkSuQmCC"
            alt="Menu"
          />
        </button>
        <ul id="nav" className="nav-links">
          <button className="close-button" aria-label="Close Button">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgBtZWBDYIwEEWLEziCG7iCbuAGMgIbwAhuoE7ACLiBI8Am32uU2ABt7x/hJxcSrvdfCdercz8BOEmUzihfu1gvL6/46+5ISU0d1Ndh4oK51ICJ8ahqTFZYVhYQMfbqwkUPFpAw7iUO08VqAGXMAEzGGsAqYwVgnTEJ4I2VgKzxLuPfJ3KvoigGZxHiPy8UPSq0xjwA6XZrzQAo+hiGUUGdPAoAw8lTAfC9QShjBaDx+VifDxLnXB9LvpTHcyF1DHfQMDvOfMFbYj9d4AEtjLNC6m4S3cx4K30ANf2mFhiWw3YAAAAASUVORK5CYII="
              alt="Close"
            />
          </button>
          {/* <li>
            <Link href="/" aria-current="page" className="nav-link">Shop</Link>
          </li>
          <li>
            <Link href="/subscriptions" className="nav-link">Subscriptions</Link>
          </li>
          <li>
            <Link href="/pro" className="nav-link">mTap Pro</Link>
          </li>
          <li>
            <Link href="/product" aria-current="page" className="nav-link">Products</Link>
          </li>
          <li>
            <Link href="/teams" aria-current="page" className="nav-link">For Teams</Link>
          </li>
          <li>
            <Link href="/" aria-current="page" className="nav-link">Solutions</Link>
          </li>
        </ul>
        <ul className="auth-links">
          <li>
            <Link href="/" aria-current="page" className="auth-link">
              <span className="card-link">Create a Card</span>
            </Link>
          </li>
          <li>
            <Link href="/" aria-current="page" className="auth-link">Sign In</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
