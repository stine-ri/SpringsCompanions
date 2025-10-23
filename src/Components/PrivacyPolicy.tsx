import React from 'react';
import { Shield, Lock, Eye, Cookie, FileText, Mail, AlertCircle, Phone  } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-[140px] sm:pt-[150px] bg-gradient-to-r from-teal-700 to-teal-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-teal-50">Your privacy matters to us</p>
          <p className="text-sm text-teal-100 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <FileText className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy explains how Springs Companions ("we," "us," or "our") collects, uses, protects, 
                and shares information when you visit our website at springscompanions.com or use our services. 
                We are committed to protecting your privacy and handling your personal information with care and respect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy. 
                We reserve the right to update this policy periodically, and we encourage you to review it regularly 
                to stay informed about how we protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Eye className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you interact with our website or services, we may collect the following types of information:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Information about your loved one's care needs and preferences</li>
                    <li>Employment application details for caregiver positions</li>
                    <li>Payment and billing information when you use our services</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-600 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms used to find us</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-600 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>How you navigate and interact with our website</li>
                    <li>Features and services you access or request</li>
                    <li>Preferences and settings you choose</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <AlertCircle className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect and use your information for the following purposes:
              </p>
              
              <div className="grid gap-4">
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">To Provide Our Services</h3>
                  <p className="text-gray-700 text-sm">
                    We use your information to match you with qualified caregivers, coordinate care services, 
                    and ensure the highest quality of support for your loved ones.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">To Communicate With You</h3>
                  <p className="text-gray-700 text-sm">
                    We may contact you to provide updates about our services, respond to inquiries, 
                    send appointment reminders, and share important information about your care plan.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">To Improve Our Services</h3>
                  <p className="text-gray-700 text-sm">
                    We analyze how visitors use our website to enhance user experience, develop new features, 
                    and improve the quality of care we provide.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">For Marketing Purposes</h3>
                  <p className="text-gray-700 text-sm">
                    With your consent, we may send you newsletters, promotional materials, and information 
                    about services that may interest you. You can opt out at any time.
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">To Ensure Safety and Security</h3>
                  <p className="text-gray-700 text-sm">
                    We use your information to verify identities, prevent fraud, and maintain a safe 
                    environment for both clients and caregivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Lock className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Springs Companions takes data security seriously. We implement industry-standard measures to 
                protect your personal information from unauthorized access, disclosure, alteration, or destruction:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Secure Socket Layer (SSL) encryption for data transmission</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Regular security audits and system updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Restricted access to personal information on a need-to-know basis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Staff training on data privacy and security best practices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Secure storage of physical and electronic records</span>
                </li>
              </ul>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Please Note:</strong> While we strive to protect your information using reasonable security 
                  measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute 
                  security but are committed to protecting your data to the best of our ability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies Policy */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Cookie className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website uses cookies to enhance your browsing experience and provide personalized content. 
                Cookies are small text files stored on your device that help us understand how you use our website.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior and improve our site</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200">
                <h3 className="font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                <p className="text-gray-700 text-sm mb-4">
                  You can control and manage cookies through your browser settings. Here's how to manage cookies 
                  in popular browsers:
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-900">Google Chrome:</strong>
                    <p className="text-gray-700 ml-4">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Mozilla Firefox:</strong>
                    <p className="text-gray-700 ml-4">Settings → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Safari:</strong>
                    <p className="text-gray-700 ml-4">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Microsoft Edge:</strong>
                    <p className="text-gray-700 ml-4">Settings → Cookies and site permissions → Manage and delete cookies</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4 italic">
                  Note: Disabling cookies may affect the functionality of our website and limit your user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Mail className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Springs Companions does not sell, rent, or trade your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">With Your Consent</h3>
                    <p className="text-gray-700 text-sm">
                      We will share your information with third parties only when you have given us explicit permission to do so.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Providers</h3>
                    <p className="text-gray-700 text-sm">
                      We may share information with trusted partners who help us operate our business, such as 
                      payment processors, IT service providers, and background check companies. These parties are 
                      contractually obligated to keep your information confidential.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Legal Requirements</h3>
                    <p className="text-gray-700 text-sm">
                      We may disclose your information if required by law, court order, or government regulation, 
                      or to protect the rights, property, or safety of Springs Companions, our clients, or others.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Transfers</h3>
                    <p className="text-gray-700 text-sm">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                      to the acquiring entity, subject to the same privacy protections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website may contain links to external websites that are not operated by Springs Companions. 
            We are not responsible for the privacy practices or content of these third-party sites.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review the privacy policies of any external websites you visit. This Privacy Policy 
            applies only to information collected through our website and services.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the following rights regarding your personal information:
          </p>
          
          <div className="grid gap-4">
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Access Your Information</h3>
              <p className="text-gray-700 text-sm">Request a copy of the personal data we hold about you</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Correct Your Information</h3>
              <p className="text-gray-700 text-sm">Update or correct inaccurate or incomplete information</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Delete Your Information</h3>
              <p className="text-gray-700 text-sm">Request deletion of your personal data (subject to legal requirements)</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Opt-Out of Marketing</h3>
              <p className="text-gray-700 text-sm">Unsubscribe from promotional emails and marketing communications</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Restrict Processing</h3>
              <p className="text-gray-700 text-sm">Limit how we use your personal information</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-6">
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Springs Companions does not knowingly collect personal information from individuals under the age of 18. 
            Our services are intended for adults seeking care for elderly family members or individuals interested in 
            caregiver employment. If we become aware that we have inadvertently collected information from a minor, 
            we will take steps to delete it promptly.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
            legal requirements, or other factors. When we make significant changes, we will notify you by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Posting the updated policy on our website with a new "Last Updated" date</li>
            <li>Sending you an email notification if you have provided us with your email address</li>
            <li>Displaying a notice on our website homepage</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-teal-50 leading-relaxed mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your 
            personal information, please don't hesitate to contact us:
          </p>
          
          <div className="space-y-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email:</p>
                <a href="mailto:info@springscompanions.com" className="text-teal-100 hover:text-white transition-colors">
                  info@springscompanions.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <a href="tel:+18174496668" className="text-teal-100 hover:text-white transition-colors">
                  (817) 449-6668 OR  +1(469)9655019
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Company:</p>
                <p className="text-teal-100">Springs Companions</p>
                <p className="text-teal-100 text-sm">Serving Texas Communities</p>
              </div>
            </div>
          </div>

          <p className="text-teal-50 text-sm mt-6 italic">
            We will respond to your inquiry within 5 business days.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;