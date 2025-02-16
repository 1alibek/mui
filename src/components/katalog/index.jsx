import { Moon, Settings2, FileText, Accessibility } from "lucide-react";

export default function FeatureSection() {
  return (
    <div className="px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-12">
          <p className="text-sm font-medium text-primary mb-2">
            Why build with us?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A <span className="text-blue-500">delightful experience</span>
            <br />
            for you and your users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Moon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Timeless aesthetics</h3>
            <p className="text-gray-600">
              Build beautiful UIs with ease. Start with Google&apos;s Material
              Design, or create your own sophisticated theme.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Settings2 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Intuitive customization
            </h3>
            <p className="text-gray-600">
              Our components are as flexible as they are powerful. You always
              have full control over how they look and behave.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Unrivaled documentation
            </h3>
            <p className="text-gray-600">
              The answer to your problem can be found in our docs. How can we be
              so sure? Because our docs boast over 2,000 contributors.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Accessibility className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Dedicated to accessibility
            </h3>
            <p className="text-gray-600">
              We believe in building for everyone. That&apos;s why accessibility
              is a high priority with every new feature we ship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
