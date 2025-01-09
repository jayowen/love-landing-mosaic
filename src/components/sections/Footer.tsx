/**
 * Footer component containing site navigation, resources, and copyright information
 * Organized in a responsive grid layout with a deep red background matching the brand
 */
export const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">About Phil Hopper</h3>
            <p className="text-red-100">
              Best-selling author and senior pastor of Abundant Life Church, bringing biblical wisdom to modern relationships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://philhopper.com" className="text-red-100 hover:text-white transition-colors">
                  Official Website
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/blog" className="text-red-100 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/speaking" className="text-red-100 hover:text-white transition-colors">
                  Speaking Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://philhopper.com/books" className="text-red-100 hover:text-white transition-colors">
                  Other Books
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/podcasts" className="text-red-100 hover:text-white transition-colors">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/videos" className="text-red-100 hover:text-white transition-colors">
                  Video Content
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://philhopper.com/contact" className="text-red-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/newsletter" className="text-red-100 hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="https://philhopper.com/church" className="text-red-100 hover:text-white transition-colors">
                  Visit Abundant Life
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-red-600 text-center text-red-200">
          <p>&copy; {new Date().getFullYear()} Phil Hopper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};