import React from 'react';
import { FileText, Scale, AlertTriangle, UserCheck, DollarSign, Shield, XCircle, CheckCircle, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-[140px] sm:pt-[150px] bg-gradient-to-r from-teal-700 to-teal-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-teal-50">Please read these terms carefully before using our services</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction and Acceptance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Springs Companions. These Terms of Service ("Terms") govern your access to and use of 
                our website, services, and any related communications. By accessing our website at springscompanions.com 
                or engaging our care services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Springs Companions provides non-medical, in-home senior care services throughout Texas, including 
                companionship, personal care assistance, respite care, and specialized support for conditions such 
                as Alzheimer's, dementia, and Parkinson's disease.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
                <p className="text-gray-800 font-semibold mb-2">Important:</p>
                <p className="text-gray-700 text-sm">
                  If you do not agree with any part of these Terms, please do not use our website or services. 
                  Continued use of our services constitutes acceptance of these Terms as they may be modified from time to time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <UserCheck className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Springs Companions offers the following non-medical care services:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Companionship</h3>
                  <p className="text-gray-600 text-sm">Social engagement, conversation, activities, and emotional support</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Respite Care</h3>
                  <p className="text-gray-600 text-sm">Temporary relief for family caregivers with flexible scheduling</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialized Care</h3>
                  <p className="text-gray-600 text-sm">Support for dementia, Alzheimer's, Parkinson's, and chronic conditions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Homemaking</h3>
                  <p className="text-gray-600 text-sm">Meal preparation, light housekeeping, errands, and transportation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Around-the-Clock Care</h3>
                  <p className="text-gray-600 text-sm">Live-in, overnight, and 24-hour care options available</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-800 font-semibold mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                  Important Disclaimer:
                </p>
                <p className="text-gray-700 text-sm">
                  Springs Companions provides non-medical care services only. We do not provide medical diagnosis, 
                  treatment, medication administration, or skilled nursing care. Our caregivers are not licensed 
                  healthcare professionals. For medical needs, please consult with licensed healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <CheckCircle className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a client of Springs Companions, you agree to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Provide Accurate Information</h3>
                    <p className="text-gray-700 text-sm">
                      Share complete and truthful information about care needs, medical conditions, medications, 
                      and any factors that may affect the safety or well-being of the client or caregiver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Maintain a Safe Environment</h3>
                    <p className="text-gray-700 text-sm">
                      Ensure the care environment is safe, clean, and free from hazards that could harm the caregiver 
                      or client. This includes proper lighting, clear walkways, and functional equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Respect Caregivers</h3>
                    <p className="text-gray-700 text-sm">
                      Treat all caregivers with dignity and respect. Harassment, discrimination, or abusive behavior 
                      toward caregivers will not be tolerated and may result in termination of services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Timely Payment</h3>
                    <p className="text-gray-700 text-sm">
                      Pay all fees according to the agreed-upon schedule. Late payments may result in service interruption 
                      or termination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Communicate Changes</h3>
                    <p className="text-gray-700 text-sm">
                      Notify Springs Companions promptly of any changes in care needs, schedule, or contact information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Direct Employment</h3>
                    <p className="text-gray-700 text-sm">
                      You agree not to directly hire or employ any Springs Companions caregiver during their employment 
                      with us or within 12 months of their last assignment with you, unless you pay the applicable placement fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <DollarSign className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms and Fees</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Service Rates</h3>
                  <p className="text-gray-700 mb-4">
                    Service rates are determined based on the type of care, duration, frequency, and specific needs 
                    of the client. Rates will be provided in writing before services begin.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Rates are subject to change with 30 days written notice</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Minimum visit duration may apply depending on service type</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Holiday and weekend rates may differ from standard rates</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Payment Schedule</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Payment is due according to the schedule specified in your service agreement. We accept the following 
                    payment methods:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-800">✓ Credit/Debit Cards</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-800">✓ Bank Transfer (ACH)</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-800">✓ Check</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-800">✓ Long-Term Care Insurance</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Late Payments</h3>
                  <p className="text-gray-700 text-sm">
                    Payments not received by the due date are considered late. Late payments may result in:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Late fees of up to $50 or 5% of the balance, whichever is greater</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Suspension of services until payment is received</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Termination of services after 15 days past due</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    We require advance notice for schedule changes or cancellations:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span><strong>Less than 24 hours notice:</strong> Full charge for scheduled visit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span><strong>24-48 hours notice:</strong> 50% charge for scheduled visit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span><strong>More than 48 hours notice:</strong> No charge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <Shield className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  While Springs Companions strives to provide the highest quality care, we cannot guarantee specific 
                  outcomes or results. Our liability is limited as follows:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Non-Medical Services</h3>
                  <p className="text-gray-700 text-sm">
                    We provide non-medical companionship and personal care services only. We are not responsible for 
                    medical decisions, diagnoses, or treatments. Clients and their families are responsible for 
                    coordinating medical care with licensed healthcare providers.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Property and Belongings</h3>
                  <p className="text-gray-700 text-sm">
                    Springs Companions is not responsible for loss, theft, or damage to personal property, valuables, 
                    or belongings. We recommend securing valuable items and maintaining appropriate insurance coverage.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Acts Beyond Our Control</h3>
                  <p className="text-gray-700 text-sm">
                    We are not liable for delays or inability to perform services due to circumstances beyond our 
                    reasonable control, including natural disasters, emergencies, illness, or other unforeseen events.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-600">
                  <h3 className="font-semibold text-gray-900 mb-2">Maximum Liability</h3>
                  <p className="text-gray-700 text-sm">
                    To the maximum extent permitted by law, our total liability for any claims arising from our 
                    services shall not exceed the amount paid for services during the three months preceding the claim.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-800 font-semibold mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Emergency Situations:
                </p>
                <p className="text-gray-700 text-sm">
                  In case of medical emergencies, caregivers are instructed to call 911 immediately. Springs Companions 
                  is not liable for emergency response times or outcomes of emergency medical situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <XCircle className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination of Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">By Client</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    You may terminate services at any time by providing written notice. We request:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>At least 48 hours notice for routine termination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>Payment of all outstanding balances upon termination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 font-bold mt-1">•</span>
                      <span>No refunds for prepaid services unless required by law</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">By Springs Companions</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We reserve the right to terminate services immediately if:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Payment obligations are not met</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The care environment becomes unsafe for caregivers or clients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>There is abusive, threatening, or harassing behavior toward caregivers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Client information provided was materially false or misleading</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Care needs exceed our capabilities or scope of services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Any violation of these Terms of Service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality and Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springs Companions respects the privacy and confidentiality of all clients. We maintain strict 
            confidentiality standards in accordance with applicable privacy laws and regulations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Personal information, medical history, and care details are kept confidential and shared only with:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Authorized family members or representatives</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Caregivers assigned to provide services</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Healthcare providers with proper authorization</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span>Legal authorities when required by law</span>
            </li>
          </ul>
          <p className="text-gray-700 text-sm">
            For more details, please review our <a href="/privacy-policy" className="text-teal-600 hover:text-teal-700 font-semibold">Privacy Policy</a>.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on the Springs Companions website, including text, graphics, logos, images, and software, 
            is the property of Springs Companions and is protected by copyright and trademark laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not reproduce, distribute, modify, or create derivative works from our website content without 
            express written permission from Springs Companions.
          </p>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the event of any dispute arising from these Terms or our services, we encourage clients to contact 
            us first to resolve the matter amicably.
          </p>
          <div className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
              <h3 className="font-semibold text-gray-900 mb-2">Informal Resolution</h3>
              <p className="text-gray-700 text-sm">
                Most disputes can be resolved through direct communication. Please contact our customer service team 
                to discuss any concerns.
              </p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
              <h3 className="font-semibold text-gray-900 mb-2">Governing Law</h3>
              <p className="text-gray-700 text-sm">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, 
                without regard to its conflict of law provisions.
              </p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
              <h3 className="font-semibold text-gray-900 mb-2">Jurisdiction</h3>
              <p className="text-gray-700 text-sm">
                Any legal action or proceeding relating to these Terms shall be brought exclusively in the courts 
                located in Texas, and you consent to the jurisdiction of such courts.
              </p>
            </div>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springs Companions reserves the right to modify these Terms at any time. We will notify users of 
            significant changes by:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start space-x-2">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span>Posting the updated Terms on our website with a new "Last Updated" date</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span>Sending email notifications to active clients</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-teal-600 font-bold mt-1">•</span>
              <span>Providing notice during scheduled care visits</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Continued use of our services after changes have been posted constitutes acceptance of the modified Terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-teal-50 leading-relaxed mb-6">
            If you have any questions or concerns about these Terms of Service, please contact us:
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
              <FileText className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <a href="tel:+18174496668" className="text-teal-100 hover:text-white transition-colors">
                  (817) 449-6668
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Company:</p>
                <p className="text-teal-100">Springs Companions</p>
                <p className="text-teal-100 text-sm">Professional Senior Care Services</p>
                <p className="text-teal-100 text-sm">Serving Texas Communities</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-teal-50 text-sm">
              By using Springs Companions services, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;