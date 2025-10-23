import React, { useState } from 'react';
import { FileText, Scale, AlertTriangle, UserCheck, DollarSign, Shield, XCircle, CheckCircle, Mail, Download, Check, Pen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService: React.FC = () => {
  const lastUpdated = "January 15, 2025";
  const [hasViewed, setHasViewed] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [agreedSections, setAgreedSections] = useState({
    introduction: false,
    services: false,
    responsibilities: false,
    payment: false,
    liability: false,
    termination: false,
    confidentiality: false,
    intellectual: false,
    disputes: false,
    changes: false
  });
  const [signature, setSignature] = useState('');
  const [signatureDate, setSignatureDate] = useState('');
  const [fullName, setFullName] = useState('');

  const allSectionsAgreed = Object.values(agreedSections).every(v => v);

  const toggleSection = (section: keyof typeof agreedSections) => {
    setAgreedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

 const handleDownload = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = 20;

      // Helper: Check if new page needed
      const checkNewPage = (spaceNeeded: number = 15) => {
        if (yPosition + spaceNeeded > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
          return true;
        }
        return false;
      };

      // Helper: Add text with word wrap
      const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0) => {
        checkNewPage(fontSize + 5);
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', isBold ? 'bold' : 'normal');
        doc.setTextColor(0, 0, 0);
        const lines = doc.splitTextToSize(text, contentWidth - indent);
        
        lines.forEach((line: string) => {
          checkNewPage(fontSize);
          doc.text(line, margin + indent, yPosition);
          yPosition += fontSize * 0.4 + 2;
        });
        yPosition += 2;
      };

      // Helper: Add checkbox
      const addCheckbox = (text: string, checked: boolean) => {
        checkNewPage(15);
        const boxSize = 3.5;
        const boxX = margin;
        const boxY = yPosition - 2.5;
        
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.3);
        doc.rect(boxX, boxY, boxSize, boxSize);
        
        if (checked) {
          doc.setLineWidth(0.8);
          doc.line(boxX + 0.7, boxY + 1.8, boxX + 1.3, boxY + 2.7);
          doc.line(boxX + 1.3, boxY + 2.7, boxX + 2.8, boxY + 0.7);
        }
        
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const textX = boxX + boxSize + 3;
        const availableWidth = contentWidth - boxSize - 3;
        const lines = doc.splitTextToSize(text, availableWidth);
        
        lines.forEach((line: string, index: number) => {
          if (index > 0) checkNewPage(5);
          doc.text(line, textX, yPosition + (index * 4.5));
        });
        yPosition += Math.max(boxSize + 2, lines.length * 4.5) + 3;
      };

      // Helper: Add divider line
      const addDivider = () => {
        checkNewPage(8);
        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
      };

      // Helper: Add bullet point
      const addBullet = (text: string, indent: number = 0) => {
        checkNewPage(10);
        const bulletX = margin + indent;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        
        doc.text('•', bulletX, yPosition);
        
        const textX = bulletX + 5;
        const availableWidth = contentWidth - indent - 5;
        const lines = doc.splitTextToSize(text, availableWidth);
        
        lines.forEach((line: string, index: number) => {
          if (index > 0) checkNewPage(5);
          doc.text(line, textX, yPosition + (index * 4.5));
        });
        yPosition += lines.length * 4.5 + 2;
      };

      // Helper: Add warning box
      const addWarningBox = (title: string, text: string) => {
        const lines = doc.splitTextToSize(text, contentWidth - 8);
        const boxHeight = 8 + (lines.length * 4);
        checkNewPage(boxHeight + 5);
        
        doc.setFillColor(255, 252, 230);
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.rect(margin, yPosition - 3, contentWidth, boxHeight, 'FD');
        
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('⚠ ' + title, margin + 4, yPosition + 2);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        let tempY = yPosition + 7;
        lines.forEach((line: string) => {
          doc.text(line, margin + 4, tempY);
          tempY += 4;
        });
        yPosition += boxHeight + 3;
      };

      // HEADER
      doc.setFillColor(240, 240, 240);
      doc.rect(0, 0, pageWidth, 35, 'F');
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('SPRINGS COMPANIONS', pageWidth / 2, 15, { align: 'center' });
      doc.setFontSize(14);
      doc.text('Terms of Service', pageWidth / 2, 23, { align: 'center' });
      
      yPosition = 45;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.text(`Last Updated: ${lastUpdated}`, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 10;
      addDivider();

      // 1. INTRODUCTION
      addText('1. INTRODUCTION AND ACCEPTANCE', 12, true);
      addText('Welcome to Springs Companions. These Terms of Service ("Terms") govern your access to and use of our website, services, and any related communications. By accessing our website at springscompanions.com or engaging our care services, you agree to be bound by these Terms.', 9);
      addText('Springs Companions provides non-medical, in-home senior care services throughout Texas, including companionship, personal care assistance, respite care, and specialized support for conditions such as Alzheimer\'s, dementia, and Parkinson\'s disease.', 9);
      addWarningBox('IMPORTANT:', 'If you do not agree with any part of these Terms, please do not use our website or services. Continued use constitutes acceptance.');
      addCheckbox('I have read and understood the Introduction', agreedSections.introduction);
      addDivider();

      // 2. SERVICES PROVIDED
      addText('2. SERVICES PROVIDED', 12, true);
      addText('Springs Companions offers the following non-medical care services:', 9);
      addBullet('COMPANIONSHIP - Social engagement, conversation, activities, and emotional support', 3);
      addBullet('RESPITE CARE - Temporary relief for family caregivers with flexible scheduling', 3);
      addBullet('SPECIALIZED CARE - Support for dementia, Alzheimer\'s, Parkinson\'s, and chronic conditions', 3);
      addBullet('HOMEMAKING - Meal preparation, light housekeeping, errands, and transportation', 3);
      addBullet('AROUND-THE-CLOCK CARE - Live-in, overnight, and 24-hour care options available', 3);
      yPosition += 3;
      addWarningBox('IMPORTANT DISCLAIMER:', 'Springs Companions provides non-medical care services only. We do not provide medical diagnosis, treatment, medication administration, or skilled nursing care. Our caregivers are not licensed healthcare professionals. For medical needs, please consult with licensed healthcare providers.');
      addCheckbox('I understand the services provided and disclaimer', agreedSections.services);
      addDivider();

      // 3. CLIENT RESPONSIBILITIES
      addText('3. CLIENT RESPONSIBILITIES', 12, true);
      addText('As a client of Springs Companions, you agree to:', 9);
      addBullet('Provide Accurate Information - Share complete and truthful information about care needs, medical conditions, medications, and any factors that may affect safety.', 3);
      addBullet('Maintain a Safe Environment - Ensure the care environment is safe, clean, and free from hazards.', 3);
      addBullet('Respect Caregivers - Treat all caregivers with dignity and respect. Harassment, discrimination, or abusive behavior will not be tolerated.', 3);
      addBullet('Timely Payment - Pay all fees according to the agreed-upon schedule.', 3);
      addBullet('Communicate Changes - Notify Springs Companions promptly of any changes in care needs.', 3);
      addBullet('No Direct Employment - 12-month restriction applies unless placement fee is paid.', 3);
      yPosition += 3;
      addCheckbox('I agree to fulfill my responsibilities as a client', agreedSections.responsibilities);
      addDivider();

      // 4. PAYMENT TERMS
      addText('4. PAYMENT TERMS AND FEES', 12, true);
      addText('SERVICE RATES:', 10, true);
      addText('Service rates are determined based on care type, duration, frequency, and specific needs. Rates will be provided in writing before services begin.', 9);
      addBullet('Rates subject to change with 30 days written notice', 3);
      addBullet('Minimum visit duration may apply', 3);
      addBullet('Holiday and weekend rates may differ', 3);
      yPosition += 3;
      addText('PAYMENT METHODS ACCEPTED:', 10, true);
      addText('Credit/Debit Cards, Bank Transfer (ACH), Check', 9, false, 3);
      yPosition += 3;
      addText('LATE PAYMENT POLICY:', 10, true);
      addBullet('Late fees of up to $50 or 5% of balance, whichever is greater', 3);
      addBullet('Service suspension until payment received', 3);
      addBullet('Termination after 15 days past due', 3);
      yPosition += 3;
      addText('CANCELLATION POLICY:', 10, true);
      addBullet('Less than 24 hours notice: Full charge for scheduled visit', 3);
      addBullet('24-48 hours notice: 50% charge for scheduled visit', 3);
      addBullet('More than 48 hours notice: No charge', 3);
      yPosition += 3;
      addCheckbox('I understand and agree to the payment terms and fees', agreedSections.payment);
      addDivider();

      // 5. LIMITATION OF LIABILITY
      addText('5. LIMITATION OF LIABILITY', 12, true);
      addText('NON-MEDICAL SERVICES: We provide non-medical companionship and personal care services only. We are not responsible for medical decisions, diagnoses, or treatments.', 9);
      addText('PROPERTY AND BELONGINGS: Springs Companions is not responsible for loss, theft, or damage to personal property, valuables, or belongings.', 9);
      addText('ACTS BEYOND OUR CONTROL: We are not liable for delays or inability to perform services due to circumstances beyond our reasonable control.', 9);
      addText('MAXIMUM LIABILITY: Our total liability for any claims shall not exceed the amount paid for services during the three months preceding the claim.', 9);
      addWarningBox('EMERGENCY SITUATIONS:', 'In case of medical emergencies, caregivers are instructed to call 911 immediately. Springs Companions is not liable for emergency response times or outcomes.');
      addCheckbox('I understand the limitation of liability', agreedSections.liability);
      addDivider();

      // 6. TERMINATION
      addText('6. TERMINATION OF SERVICES', 12, true);
      addText('BY CLIENT:', 10, true);
      addBullet('At least 48 hours notice for routine termination', 3);
      addBullet('Payment of all outstanding balances upon termination', 3);
      addBullet('No refunds for prepaid services unless required by law', 3);
      yPosition += 3;
      addText('BY SPRINGS COMPANIONS (Immediate termination for):', 10, true);
      addBullet('Non-payment', 3);
      addBullet('Unsafe care environment', 3);
      addBullet('Abusive behavior toward caregivers', 3);
      addBullet('Materially false information provided', 3);
      addBullet('Care needs exceed our capabilities', 3);
      addBullet('Violation of Terms of Service', 3);
      yPosition += 3;
      addCheckbox('I understand the termination conditions', agreedSections.termination);
      addDivider();

      // 7. CONFIDENTIALITY
      addText('7. CONFIDENTIALITY AND PRIVACY', 12, true);
      addText('Springs Companions respects client privacy and confidentiality. Personal information is kept confidential and shared only with:', 9);
      addBullet('Authorized family members or representatives', 3);
      addBullet('Caregivers assigned to provide services', 3);
      addBullet('Healthcare providers with proper authorization', 3);
      addBullet('Legal authorities when required by law', 3);
      yPosition += 3;
      addCheckbox('I understand the confidentiality and privacy policy', agreedSections.confidentiality);
      addDivider();

      // 8. INTELLECTUAL PROPERTY
      addText('8. INTELLECTUAL PROPERTY', 12, true);
      addText('All content on the Springs Companions website is protected by copyright and trademark laws. Reproduction, distribution, or modification requires express written permission.', 9);
      yPosition += 3;
      addCheckbox('I understand the intellectual property rights', agreedSections.intellectual);
      addDivider();

      // 9. DISPUTE RESOLUTION
      addText('9. DISPUTE RESOLUTION', 12, true);
      addText('INFORMAL RESOLUTION: Most disputes can be resolved through direct communication with our customer service team.', 9);
      addText('GOVERNING LAW: These Terms are governed by the laws of the State of Texas.', 9);
      addText('JURISDICTION: Legal actions must be brought exclusively in Texas courts.', 9);
      yPosition += 3;
      addCheckbox('I understand the dispute resolution process', agreedSections.disputes);
      addDivider();

      // 10. CHANGES TO TERMS
      addText('10. CHANGES TO THESE TERMS', 12, true);
      addText('Springs Companions reserves the right to modify these Terms at any time. Notification methods:', 9);
      addBullet('Updated Terms posted on website with new "Last Updated" date', 3);
      addBullet('Email notifications to active clients', 3);
      addBullet('Notice during scheduled care visits', 3);
      yPosition += 3;
      addCheckbox('I understand terms may change with notification', agreedSections.changes);
      yPosition += 5;
      addDivider();

      // SIGNATURE SECTION
      checkNewPage(60);
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, yPosition - 3, contentWidth, 50, 'FD');
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('SIGNATURE AND ACCEPTANCE', margin + 5, yPosition + 5);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('By signing below, I acknowledge that I have read, understood, and agree to be bound by these Terms of Service.', margin + 5, yPosition + 12);
      
      yPosition += 18;
      
      // Full Name
      doc.setFont('helvetica', 'bold');
      doc.text('Full Name:', margin + 5, yPosition);
      doc.setFont('helvetica', 'normal');
      if (fullName) {
        doc.text(fullName, margin + 28, yPosition);
      }
      doc.setDrawColor(150, 150, 150);
      doc.line(margin + 28, yPosition + 1, pageWidth - margin - 5, yPosition + 1);
      yPosition += 10;
      
      // Signature
      doc.setFont('helvetica', 'bold');
      doc.text('Signature:', margin + 5, yPosition);
      doc.setFont('helvetica', 'italic');
      if (signature) {
        doc.setFontSize(12);
        doc.text(signature, margin + 28, yPosition);
        doc.setFontSize(9);
      }
      doc.setDrawColor(150, 150, 150);
      doc.line(margin + 28, yPosition + 1, pageWidth - margin - 5, yPosition + 1);
      yPosition += 10;
      
      // Date
      doc.setFont('helvetica', 'bold');
      doc.text('Date:', margin + 5, yPosition);
      doc.setFont('helvetica', 'normal');
      const displayDate = signatureDate || new Date().toLocaleDateString();
      doc.text(displayDate, margin + 28, yPosition);
      doc.setDrawColor(150, 150, 150);
      doc.line(margin + 28, yPosition + 1, pageWidth - margin - 5, yPosition + 1);
      
      yPosition += 15;
      addDivider();

      // CONTACT INFORMATION
      addText('CONTACT INFORMATION', 11, true);
      addText('Springs Companions - Professional Senior Care Services', 9, true);
      addText('Email: info@springscompanions.com', 9);
      addText('Phone: (817) 449-6668', 9);

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text(`Downloaded: ${new Date().toLocaleString()}`, pageWidth / 2, pageHeight - 15, { align: 'center' });
      doc.text('© 2025 Springs Companions - All Rights Reserved', pageWidth / 2, pageHeight - 10, { align: 'center' });

      // Save PDF
      doc.save(`Springs_Companions_Terms_${new Date().toISOString().split('T')[0]}.pdf`);
      
      setHasDownloaded(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

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

      {/* Acknowledgment & Download Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-teal-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                Document Actions
              </h3>
              <p className="text-sm text-gray-600">Download a copy or acknowledge that you've reviewed these terms</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              
              <button
                onClick={() => setHasViewed(!hasViewed)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all font-semibold shadow-lg transform hover:scale-105 ${
                  hasViewed 
                    ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300'
                }`}
              >
                {hasViewed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Reviewed
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Mark as Reviewed
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Status Indicators */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                {hasDownloaded ? (
                  <>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-700">Document Downloaded</span>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    <span className="text-sm text-gray-500">Not downloaded</span>
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                {hasViewed ? (
                  <>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-700">Terms Acknowledged</span>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    <span className="text-sm text-gray-500">Not acknowledged</span>
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                {allSectionsAgreed ? (
                  <>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-700">All Sections Agreed</span>
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    <span className="text-sm text-gray-500">Sections pending</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Introduction */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <FileText className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Acceptance</h2>
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
              <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded mt-4">
                <p className="text-gray-800 font-semibold mb-2">Important:</p>
                <p className="text-gray-700 text-sm">
                  If you do not agree with any part of these Terms, please do not use our website or services. 
                  Continued use of our services constitutes acceptance of these Terms as they may be modified from time to time.
                </p>
              </div>
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.introduction}
                      onChange={() => toggleSection('introduction')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I have read and understood the Introduction and Acceptance section
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Services Description */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <UserCheck className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Springs Companions offers the following non-medical care services:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Companionship</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Social engagement, conversation, activities, and emotional support</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Respite Care</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Temporary relief for family caregivers with flexible scheduling</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Specialized Care</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Support for dementia, Alzheimer's, Parkinson's, and chronic conditions</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Homemaking</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Meal preparation, light housekeeping, errands, and transportation</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-colors md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Around-the-Clock Care</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Live-in, overnight, and 24-hour care options available</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-lg shadow-md">
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
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.services}
                      onChange={() => toggleSection('services')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I understand the services provided and the disclaimer
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <CheckCircle className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a client of Springs Companions, you agree to:
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Provide Accurate Information</h3>
                    <p className="text-gray-700 text-sm">
                      Share complete and truthful information about care needs, medical conditions, medications, 
                      and any factors that may affect the safety or well-being of the client or caregiver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Maintain a Safe Environment</h3>
                    <p className="text-gray-700 text-sm">
                      Ensure the care environment is safe, clean, and free from hazards that could harm the caregiver 
                      or client. This includes proper lighting, clear walkways, and functional equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Respect Caregivers</h3>
                    <p className="text-gray-700 text-sm">
                      Treat all caregivers with dignity and respect. Harassment, discrimination, or abusive behavior 
                      toward caregivers will not be tolerated and may result in termination of services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Timely Payment</h3>
                    <p className="text-gray-700 text-sm">
                      Pay all fees according to the agreed-upon schedule. Late payments may result in service interruption 
                      or termination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Communicate Changes</h3>
                    <p className="text-gray-700 text-sm">
                      Notify Springs Companions promptly of any changes in care needs, schedule, or contact information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">No Direct Employment</h3>
                    <p className="text-gray-700 text-sm">
                      You agree not to directly hire or employ any Springs Companions caregiver during their employment 
                      with us or within 12 months of their last assignment with you, unless you pay the applicable placement fee.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.responsibilities}
                      onChange={() => toggleSection('responsibilities')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I agree to fulfill my responsibilities as a client
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <DollarSign className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms and Fees</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Service Rates</h3>
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

                <div className="bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Payment Methods Accepted</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Payment is due according to the schedule specified in your service agreement.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-lg border-2 border-teal-300 shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle className="w-5 h-5 text-teal-600 mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Credit/Debit Cards</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-teal-300 shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle className="w-5 h-5 text-teal-600 mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Bank Transfer (ACH)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-teal-300 shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle className="w-5 h-5 text-teal-600 mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Check</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Late Payment Policy</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Payments not received by the due date are considered late. Late payments may result in:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Late fees of up to $50 or 5% of the balance, whichever is greater</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Suspension of services until payment is received</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Termination of services after 15 days past due</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Cancellation Policy</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We require advance notice for schedule changes or cancellations:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                      <p className="text-sm"><strong className="text-gray-900">Less than 24 hours notice:</strong> <span className="text-red-600 font-semibold">Full charge for scheduled visit</span></p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                      <p className="text-sm"><strong className="text-gray-900">24-48 hours notice:</strong> <span className="text-yellow-600 font-semibold">50% charge for scheduled visit</span></p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                      <p className="text-sm"><strong className="text-gray-900">More than 48 hours notice:</strong> <span className="text-green-600 font-semibold">No charge</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.payment}
                      onChange={() => toggleSection('payment')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I understand and agree to the payment terms and fees
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <Shield className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  While Springs Companions strives to provide the highest quality care, we cannot guarantee specific 
                  outcomes or results. Our liability is limited as follows:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Non-Medical Services</h3>
                  <p className="text-gray-700 text-sm">
                    We provide non-medical companionship and personal care services only. We are not responsible for 
                    medical decisions, diagnoses, or treatments. Clients and their families are responsible for 
                    coordinating medical care with licensed healthcare providers.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg border-l-4 border-purple-500 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Property and Belongings</h3>
                  <p className="text-gray-700 text-sm">
                    Springs Companions is not responsible for loss, theft, or damage to personal property, valuables, 
                    or belongings. We recommend securing valuable items and maintaining appropriate insurance coverage.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-5 rounded-lg border-l-4 border-orange-500 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Acts Beyond Our Control</h3>
                  <p className="text-gray-700 text-sm">
                    We are not liable for delays or inability to perform services due to circumstances beyond our 
                    reasonable control, including natural disasters, emergencies, illness, or other unforeseen events.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-100 to-white p-5 rounded-lg border-l-4 border-gray-500 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Maximum Liability</h3>
                  <p className="text-gray-700 text-sm">
                    To the maximum extent permitted by law, our total liability for any claims arising from our 
                    services shall not exceed the amount paid for services during the three months preceding the claim.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg shadow-md">
                <p className="text-gray-800 font-bold mb-2 flex items-center text-lg">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                  Emergency Situations
                </p>
                <p className="text-gray-700 text-sm">
                  In case of medical emergencies, caregivers are instructed to call 911 immediately. Springs Companions 
                  is not liable for emergency response times or outcomes of emergency medical situations.
                </p>
              </div>
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.liability}
                      onChange={() => toggleSection('liability')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I understand the limitation of liability
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <div className="flex items-start space-x-4 mb-6">
            <XCircle className="w-8 h-8 text-teal-700 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination of Services</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border-2 border-teal-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">By Client</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    You may terminate services at any time by providing written notice. We request:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>At least 48 hours notice for routine termination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Payment of all outstanding balances upon termination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>No refunds for prepaid services unless required by law</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white p-5 rounded-lg border-2 border-red-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">By Springs Companions</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    We reserve the right to terminate services immediately if:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Payment obligations are not met</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The care environment becomes unsafe for caregivers or clients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>There is abusive, threatening, or harassing behavior toward caregivers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Client information provided was materially false or misleading</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Care needs exceed our capabilities or scope of services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Any violation of these Terms of Service</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Checkbox */}
              <div className="mt-6">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={agreedSections.termination}
                      onChange={() => toggleSection('termination')}
                      className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    I understand the termination conditions
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality and Privacy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springs Companions respects the privacy and confidentiality of all clients. We maintain strict 
            confidentiality standards in accordance with applicable privacy laws and regulations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Personal information, medical history, and care details are kept confidential and shared only with:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Authorized family members or representatives</span>
            </li>
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Caregivers assigned to provide services</span>
            </li>
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Healthcare providers with proper authorization</span>
            </li>
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Legal authorities when required by law</span>
            </li>
          </ul>
          <p className="text-gray-700 text-sm italic">
            For more details, please review our Privacy Policy.
          </p>
          
          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={agreedSections.confidentiality}
                  onChange={() => toggleSection('confidentiality')}
                  className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                I understand the confidentiality and privacy policy
              </span>
            </label>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content on the Springs Companions website, including text, graphics, logos, images, and software, 
            is the property of Springs Companions and is protected by copyright and trademark laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not reproduce, distribute, modify, or create derivative works from our website content without 
            express written permission from Springs Companions.
          </p>
          
          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={agreedSections.intellectual}
                  onChange={() => toggleSection('intellectual')}
                  className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                I understand the intellectual property rights
              </span>
            </label>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the event of any dispute arising from these Terms or our services, we encourage clients to contact 
            us first to resolve the matter amicably.
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-teal-50 to-white p-5 rounded-lg border-l-4 border-teal-500 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Informal Resolution</h3>
              <p className="text-gray-700 text-sm">
                Most disputes can be resolved through direct communication. Please contact our customer service team 
                to discuss any concerns.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Governing Law</h3>
              <p className="text-gray-700 text-sm">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, 
                without regard to its conflict of law provisions.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg border-l-4 border-purple-500 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Jurisdiction</h3>
              <p className="text-gray-700 text-sm">
                Any legal action or proceeding relating to these Terms shall be brought exclusively in the courts 
                located in Texas, and you consent to the jurisdiction of such courts.
              </p>
            </div>
          </div>
          
          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={agreedSections.disputes}
                  onChange={() => toggleSection('disputes')}
                  className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                I understand the dispute resolution process
              </span>
            </label>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-teal-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to These Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springs Companions reserves the right to modify these Terms at any time. We will notify users of 
            significant changes by:
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <span className="text-teal-600 font-bold text-xl mt-0.5">•</span>
              <span>Posting the updated Terms on our website with a new "Last Updated" date</span>
            </li>
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <span className="text-teal-600 font-bold text-xl mt-0.5">•</span>
              <span>Sending email notifications to active clients</span>
            </li>
            <li className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
              <span className="text-teal-600 font-bold text-xl mt-0.5">•</span>
              <span>Providing notice during scheduled care visits</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Continued use of our services after changes have been posted constitutes acceptance of the modified Terms.
          </p>
          
          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={agreedSections.changes}
                  onChange={() => toggleSection('changes')}
                  className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-teal-500 cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                I understand terms may change with notification
              </span>
            </label>
          </div>
        </section>

        {/* Signature Section */}
        <section className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-teal-300">
          <div className="flex items-center gap-3 mb-6">
            <Pen className="w-8 h-8 text-teal-700" />
            <h2 className="text-2xl font-bold text-gray-900">Signature and Acceptance</h2>
          </div>
          
          <div className="bg-white rounded-lg p-6 border-2 border-teal-200 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              By signing below, I acknowledge that I have read, understood, and agree to be bound by these Terms of Service.
            </p>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-gray-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full legal name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                />
              </div>

              {/* Signature */}
              <div>
                <label htmlFor="signature" className="block text-sm font-bold text-gray-900 mb-2">
                  Electronic Signature <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="signature"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Type your full name as signature"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all font-serif text-lg italic"
                />
                <p className="text-xs text-gray-500 mt-2">
                  By typing your name above, you are creating a legally binding electronic signature.
                </p>
              </div>

              {/* Date */}
              <div>
                <label htmlFor="signatureDate" className="block text-sm font-bold text-gray-900 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="signatureDate"
                  value={signatureDate}
                  onChange={(e) => setSignatureDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Validation Messages */}
          {(!allSectionsAgreed || !fullName || !signature || !signatureDate) && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-yellow-800 mb-2">Complete all requirements to finalize:</p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {!allSectionsAgreed && <li>✗ Check all section agreement boxes</li>}
                    {!fullName && <li>✗ Enter your full name</li>}
                    {!signature && <li>✗ Provide your electronic signature</li>}
                    {!signatureDate && <li>✗ Select the date</li>}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {allSectionsAgreed && fullName && signature && signatureDate && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-sm font-semibold text-green-800">
                  All requirements met! You can now download the signed document.
                </p>
              </div>
            </div>
          )}

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={!allSectionsAgreed || !fullName || !signature || !signatureDate}
            className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg ${
              allSectionsAgreed && fullName && signature && signatureDate
                ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl transform hover:scale-105 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Download className="w-6 h-6" />
            Download Signed PDF Document
          </button>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl shadow-2xl p-8 text-white mt-8">
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
                 (817) 449-6668 OR  +1(469)9655019
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