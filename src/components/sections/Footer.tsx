/**
 * Footer component containing site navigation and copyright information
 * Organized in a responsive grid layout with a deep red background matching the brand
 */
export const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">About Phil Hopper</h3>
            <p className="text-red-100">
              Best-selling author and senior pastor of Abundant Life Church, bringing biblical wisdom to modern relationships.
            </p>
            <div className="pt-2">
              <a 
                href="https://philhopper.org" 
                className="text-red-100 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit PhilHopper.org →
              </a>
            </div>
          </div>

          {/* Church Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-amber-100">Visit Our Church</h3>
            <p className="text-red-100">
              Join us at Abundant Life Church for powerful teaching and a welcoming community.
            </p>
            <div className="pt-2">
              <a 
                href="https://livingproof.co/resources/books/"
                className="text-red-100 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Abundant Life Church →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="mt-12 pt-8 border-t border-red-600 text-center space-y-2">
          <p className="text-red-200">&copy; {new Date().getFullYear()} Phil Hopper. All rights reserved.</p>
          <p className="text-red-200">
            <a 
              href="http://businessbldrs.com/ministry-blueprint/" 
              className="hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Site Built by Ministry Builders
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};