import React, { useState } from 'react';
import { FileText, Scale, AlertTriangle, UserCheck, DollarSign, Shield, Clock, MapPin, Signature, Download, CheckCircle } from 'lucide-react';

const CaregiverTermsOfService: React.FC = () => {
  const [agreementType, setAgreementType] = useState<'employee' | 'contractor' | null>(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [signature, setSignature] = useState('');
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const lastUpdated = "October 19, 2025";

  const generatePDF = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 15;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = 20;

      const checkNewPage = (spaceNeeded: number = 15) => {
        if (yPosition + spaceNeeded > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
          return true;
        }
        return false;
      };

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

      const addDivider = () => {
        checkNewPage(8);
        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
      };

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
      const titleText = agreementType === 'employee' ? 'Caregiver Employment Agreement' : 'Independent Contractor Agreement';
      doc.text(titleText, pageWidth / 2, 23, { align: 'center' });
      
      yPosition = 45;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.text(`Last Updated: ${lastUpdated}`, pageWidth / 2, yPosition, { align: 'center' });
      doc.text(`Effective Date: ${date || new Date().toLocaleDateString()}`, pageWidth / 2, yPosition + 5, { align: 'center' });
      yPosition += 15;
      addDivider();

      if (agreementType === 'employee') {
        // EMPLOYEE AGREEMENT CONTENT
        addText('1. EMPLOYMENT RELATIONSHIP', 12, true);
        
        addText('1.1 AT-WILL EMPLOYMENT STATUS', 10, true);
        addText('Your employment with Springs Companions is classified as "at-will" employment under Texas law (Texas Labor Code). This means:', 9);
        addBullet('Either you or Springs Companions may terminate the employment relationship at any time, with or without cause, and with or without advance notice, subject to applicable law.', 3);
        addBullet('No contract, policy, practice, or statement creates a contract of employment for any specific period.', 3);
        addBullet('This at-will relationship continues throughout your employment unless modified in writing by an authorized company officer.', 3);
        yPosition += 3;

        addText('1.2 TEXAS EMPLOYMENT LAW COMPLIANCE', 10, true);
        addText('This agreement complies with all applicable Texas employment laws and regulations, including:', 9);
        addBullet('Texas Payday Law (Texas Labor Code Chapter 61) - Governing wage payments and deductions', 3);
        addBullet('Texas Minimum Wage Act (Texas Labor Code Chapter 62) - Ensuring fair wage standards', 3);
        addBullet('Texas Anti-Retaliation Act (Texas Labor Code Chapter 451) - Protecting employee rights', 3);
        addBullet('Texas Workers\' Compensation Act (Texas Labor Code Title 5) - Providing injury coverage', 3);
        addBullet('Fair Labor Standards Act (FLSA) - Federal overtime and wage requirements', 3);
        yPosition += 3;

        addText('1.3 EQUAL EMPLOYMENT OPPORTUNITY', 10, true);
        addText('Springs Companions is an Equal Opportunity Employer. We comply with the Texas Commission on Human Rights Act and all federal EEO laws. Employment decisions are based on merit, qualifications, and business needs without regard to race, color, religion, sex, national origin, age, disability, genetic information, veteran status, or any other protected characteristic under state or federal law.', 9);
        addDivider();

        addText('2. COMPENSATION AND PAYMENT TERMS', 12, true);
        
        addText('2.1 WAGE STRUCTURE', 10, true);
        addBullet('Hourly Rate: Your hourly compensation will be communicated in your offer letter and meets or exceeds Texas minimum wage requirements ($7.25/hour as of 2025, though Springs Companions pays competitive market rates well above this minimum).', 3);
        addBullet('Pay Schedule: Bi-weekly payment processing with direct deposit or company check options', 3);
        addBullet('Payroll Deductions: Required by law (federal/state taxes, Social Security, Medicare) and authorized voluntary deductions', 3);
        yPosition += 3;

        addText('2.2 OVERTIME COMPENSATION (FLSA COMPLIANT)', 10, true);
        addText('Non-exempt employees are entitled to overtime pay as follows:', 9);
        addBullet('Rate: 1.5 times your regular hourly rate for all hours worked over 40 in a workweek', 3);
        addBullet('Workweek Definition: Sunday 12:00 AM through Saturday 11:59 PM', 3);
        addBullet('Calculation: Overtime calculated on actual hours worked, not paid time off', 3);
        addBullet('Authorization: All overtime must be pre-approved by your supervisor except in emergency situations', 3);
        yPosition += 3;

        addText('2.3 TIMEKEEPING REQUIREMENTS (TEXAS PAYDAY LAW)', 10, true);
        addBullet('Accurate Records: You must accurately record all hours worked using the company timekeeping system', 3);
        addBullet('Daily Entries: Clock in at the start of your shift and clock out at the end, including meal breaks', 3);
        addBullet('Corrections: Report any timekeeping errors to your supervisor within 24 hours', 3);
        addBullet('Legal Requirement: Texas Payday Law requires employers to maintain accurate wage and hour records', 3);
        yPosition += 3;

        addText('2.4 PAYMENT TIMING AND METHOD', 10, true);
        addBullet('Pay Periods: Bi-weekly (every two weeks)', 3);
        addBullet('Pay Day: Every other Friday (if Friday is a holiday, payment on preceding business day)', 3);
        addBullet('Payment Method: Direct deposit to your designated bank account or company check', 3);
        addBullet('Pay Statements: Electronic or paper pay statements provided each pay period showing hours, rate, deductions, and net pay', 3);
        yPosition += 3;

        addText('2.5 EXPENSE REIMBURSEMENT', 10, true);
        addBullet('Mileage: Reimbursement at current IRS standard mileage rate for approved client-related travel', 3);
        addBullet('Other Expenses: Pre-approved job-related expenses reimbursed with proper documentation (receipts required)', 3);
        addBullet('Submission: Expense reports must be submitted within 30 days of expense date', 3);
        addDivider();

        addText('3. WORK SCHEDULE, BREAKS, AND TIME OFF', 12, true);
        
        addText('3.1 BREAK PERIODS (TEXAS COMPLIANT)', 10, true);
        addText('Texas law does not mandate meal or rest breaks for most employees, but Springs Companions provides:', 9);
        addBullet('Rest Breaks: Breaks of 20 minutes or less are paid and considered work time', 3);
        addBullet('Meal Periods: Unpaid meal periods of 30 minutes or more when you are completely relieved of all duties', 3);
        addBullet('Nursing Mothers: Reasonable break time and private space for expressing breast milk as required by federal law', 3);
        yPosition += 3;

        addText('3.2 SCHEDULING AND ASSIGNMENTS', 10, true);
        addBullet('Client Matching: You will be assigned to clients based on your skills, availability, and client needs', 3);
        addBullet('Schedule Notice: We strive to provide advance notice of schedule changes, though client needs may require flexibility', 3);
        addBullet('Availability: You must maintain current availability information and promptly report any changes', 3);
        addBullet('Schedule Confirmation: Confirm all scheduled shifts within 24 hours of assignment', 3);
        addDivider();

        addText('4. PROFESSIONAL STANDARDS AND CONDUCT', 12, true);
        
        addText('4.1 CONFIDENTIALITY AND HIPAA COMPLIANCE', 10, true);
        addText('As a caregiver, you will have access to sensitive client information protected by HIPAA and Texas privacy laws:', 9);
        addBullet('Protected Information: All client health information, personal details, financial data, and private matters must be kept strictly confidential', 3);
        addBullet('HIPAA Training: You must complete HIPAA training and sign a confidentiality agreement', 3);
        addBullet('Prohibited Disclosure: Do not discuss client information with anyone except authorized company staff, healthcare providers, or as required by law', 3);
        addBullet('Ongoing Obligation: Confidentiality obligations continue after employment ends', 3);
        addBullet('Penalties: Violations may result in immediate termination and legal action', 3);
        yPosition += 3;

        addText('4.2 PROFESSIONAL BOUNDARIES', 10, true);
        addBullet('Appropriate Relationships: Maintain professional caregiver-client relationships at all times', 3);
        addBullet('No Financial Transactions: Do not borrow money from, lend money to, or accept gifts of significant value from clients', 3);
        addBullet('No Private Arrangements: Do not accept private employment or payment from clients outside company arrangements', 3);
        addBullet('Dual Relationships: Disclose any pre-existing relationships with assigned clients', 3);
        yPosition += 3;

        addText('4.3 WORKPLACE CONDUCT', 10, true);
        addBullet('Professional Appearance: Maintain clean, professional attire appropriate for caregiving duties', 3);
        addBullet('Respectful Communication: Use professional, respectful language with clients, families, and colleagues', 3);
        addBullet('Punctuality: Arrive on time for all scheduled shifts; notify supervisor immediately if delayed', 3);
        addBullet('Reliability: Complete all assigned duties and maintain consistent attendance', 3);
        yPosition += 3;

        addWarningBox('ZERO TOLERANCE POLICIES:', 'Springs Companions maintains zero tolerance for: substance abuse during work hours, client abuse or neglect, theft or dishonesty, harassment or discrimination, and violation of client confidentiality. Violations result in immediate termination and possible legal action.');
        addDivider();

        addText('5. TRAINING, CERTIFICATION, AND CONTINUING EDUCATION', 12, true);
        
        addText('5.1 REQUIRED TRAINING', 10, true);
        addBullet('New Hire Orientation: Comprehensive training on company policies, procedures, and expectations', 3);
        addBullet('HIPAA and Confidentiality: Annual training on privacy laws and confidentiality requirements', 3);
        addBullet('Safety Training: Emergency procedures, infection control, and workplace safety', 3);
        addBullet('Client-Specific Training: Specialized training for each client assignment based on their needs', 3);
        yPosition += 3;

        addText('5.2 CERTIFICATIONS REQUIRED', 10, true);
        addBullet('CPR and First Aid: Current certification from recognized provider (American Heart Association or American Red Cross)', 3);
        addBullet('TB Testing: Annual tuberculosis testing with negative results', 3);
        addBullet('Background Check: Clear criminal background check and ongoing monitoring', 3);
        addBullet('State Requirements: Any additional certifications required by Texas law for your role', 3);
        yPosition += 3;

        addText('5.3 CONTINUING EDUCATION', 10, true);
        addBullet('Annual Requirements: Minimum continuing education hours as required for your position', 3);
        addBullet('Company-Provided Training: Participation in all mandatory company training programs', 3);
        addBullet('Certification Renewal: Maintain current certifications; notify company immediately of any lapse', 3);
        addDivider();

        addText('6. WORKERS\' COMPENSATION AND WORKPLACE SAFETY', 12, true);
        
        addText('6.1 WORKERS\' COMPENSATION INSURANCE', 10, true);
        addText('Springs Companions maintains workers\' compensation insurance as required by Texas law (Texas Labor Code Title 5):', 9);
        addBullet('Coverage: Medical expenses and lost wages for work-related injuries or illnesses', 3);
        addBullet('Reporting: Report all work-related injuries immediately to your supervisor, no matter how minor', 3);
        addBullet('Medical Treatment: Seek treatment from approved healthcare providers for work-related injuries', 3);
        addBullet('Claims Process: Company will assist you with workers\' compensation claims process', 3);
        yPosition += 3;

        addText('6.2 WORKPLACE SAFETY', 10, true);
        addBullet('Safe Work Practices: Follow all safety procedures and use proper body mechanics', 3);
        addBullet('Hazard Reporting: Immediately report unsafe conditions or practices to your supervisor', 3);
        addBullet('Personal Protective Equipment: Use provided PPE (gloves, masks, etc.) as required', 3);
        addBullet('Incident Reporting: Report all incidents, near misses, and safety concerns promptly', 3);
        addDivider();

        addText('7. TERMINATION OF EMPLOYMENT', 12, true);
        
        addText('7.1 VOLUNTARY RESIGNATION', 10, true);
        addBullet('Notice Period: Provide at least two weeks written notice of resignation when possible', 3);
        addBullet('Exit Process: Return all company property, complete exit interview, and receive final paycheck', 3);
        addBullet('Final Pay: Receive final wages within 6 days of termination per Texas Payday Law', 3);
        yPosition += 3;

        addText('7.2 INVOLUNTARY TERMINATION', 10, true);
        addText('Springs Companions may terminate employment immediately for cause, including but not limited to:', 9);
        addBullet('Client abuse, neglect, exploitation, or endangerment', 3);
        addBullet('Theft, fraud, or dishonesty', 3);
        addBullet('Substance abuse during work hours or reporting to work impaired', 3);
        addBullet('Violation of confidentiality or HIPAA regulations', 3);
        addBullet('Gross misconduct, insubordination, or illegal activities', 3);
        addBullet('Falsification of records or timesheets', 3);
        addBullet('Repeated policy violations or performance issues after warnings', 3);
        yPosition += 3;

        addText('7.3 POST-TERMINATION OBLIGATIONS', 10, true);
        addBullet('Property Return: Return all company property, keys, documents, and equipment', 3);
        addBullet('Confidentiality: Ongoing confidentiality obligations remain in effect', 3);
        addBullet('Non-Solicitation: 12-month restriction on soliciting company clients for private arrangements', 3);
        addBullet('Final Pay: Receive final wages as required by Texas Payday Law', 3);
        addDivider();

        addText('8. DISPUTE RESOLUTION AND GOVERNING LAW', 12, true);
        
        addText('8.1 INFORMAL RESOLUTION', 10, true);
        addText('We encourage open communication. If you have concerns or disputes, please follow these steps:', 9);
        addBullet('Step 1: Discuss the issue with your direct supervisor', 3);
        addBullet('Step 2: If unresolved, escalate to Human Resources or management', 3);
        addBullet('Step 3: Consider mediation before pursuing legal action', 3);
        yPosition += 3;

        addText('8.2 GOVERNING LAW AND JURISDICTION', 10, true);
        addBullet('Texas Law: This agreement is governed by the laws of the State of Texas', 3);
        addBullet('Venue: Any legal action must be brought in courts located in Texas', 3);
        addBullet('At-Will Status: Nothing in this section alters the at-will employment relationship', 3);
        addDivider();

        addText('9. EMPLOYEE ACKNOWLEDGMENT AND ACCEPTANCE', 12, true);
        addText('By signing below, I acknowledge and certify that:', 9);
        addBullet('I have read, understood, and agree to all terms in this Caregiver Employment Agreement', 3);
        addBullet('I understand my employment is at-will and may be terminated by either party at any time', 3);
        addBullet('I will comply with all company policies, procedures, and professional standards', 3);
        addBullet('I will maintain client confidentiality and comply with HIPAA regulations', 3);
        addBullet('I will maintain required certifications and complete all mandatory training', 3);
        addBullet('I understand the compensation structure, payment terms, and overtime policies', 3);
        addBullet('I have been given the opportunity to ask questions and seek clarification', 3);

      } else {
        // CONTRACTOR AGREEMENT CONTENT
        addText('1. INDEPENDENT CONTRACTOR RELATIONSHIP', 12, true);
        
        addText('1.1 STATUS', 10, true);
        addText('This Agreement establishes that the Caregiver ("Contractor") is an independent contractor, not an employee of SpringsCompanions ("Company"). Nothing in this Agreement shall be interpreted as creating an employer-employee relationship, joint venture, or partnership.', 9);
        yPosition += 3;

        addText('1.2 CONTROL AND AUTONOMY', 10, true);
        addText('The Contractor maintains full control over how, when, and where services are performed. The Company may assign clients and define service expectations, but the Contractor determines the means and methods of providing care.', 9);
        yPosition += 3;

        addText('1.3 TAXES AND BENEFITS', 10, true);
        addText('The Contractor is solely responsible for all federal, state, and local taxes, including income, self-employment, and Social Security taxes. The Contractor is not eligible for unemployment insurance, workers\' compensation, or any employee benefits provided by the Company.', 9);
        addDivider();

        addText('2. SERVICES PROVIDED', 12, true);
        
        addText('2.1 SCOPE OF SERVICES', 10, true);
        addText('The Contractor agrees to provide non-medical caregiving services to elderly clients, including companionship, light housekeeping, meal preparation, transportation, medication reminders (non-administration), and related support tasks as assigned.', 9);
        yPosition += 3;

        addText('2.2 CLIENT ASSIGNMENTS', 10, true);
        addText('The Company may refer clients to the Contractor based on availability, experience, and geographic area. The Contractor may accept or decline assignments.', 9);
        yPosition += 3;

        addText('2.3 STANDARD OF CARE', 10, true);
        addText('The Contractor agrees to perform all duties professionally, courteously, and in compliance with all applicable Texas laws and Company policies regarding client confidentiality, safety, and respect.', 9);
        addDivider();

        addText('3. COMPENSATION', 12, true);
        
        addText('3.1 HOURLY RATE', 10, true);
        addText('The Contractor will be paid an hourly rate, communicated in writing for each client assignment.', 9);
        yPosition += 3;

        addText('3.2 PAYMENT SCHEDULE', 10, true);
        addText('Payments are made biweekly, following submission of verified timesheets or invoices.', 9);
        yPosition += 3;

        addText('3.3 NO WITHHOLDING', 10, true);
        addText('The Company will not withhold taxes from payments. A Form 1099-NEC will be issued at year-end for total earnings.', 9);
        yPosition += 3;

        addText('3.4 EXPENSES', 10, true);
        addBullet('Unless otherwise agreed in writing, the Contractor is responsible for all personal expenses, including transportation, uniforms, and supplies.', 3);
        addBullet('Pre-approved mileage for client-related travel may be reimbursed at the IRS standard rate.', 3);
        addDivider();

        addText('4. CONFIDENTIALITY AND PRIVACY', 12, true);
        
        addText('4.1 CONFIDENTIAL INFORMATION', 10, true);
        addText('The Contractor agrees to maintain strict confidentiality regarding all client and Company information, including health details, addresses, and financial data.', 9);
        yPosition += 3;

        addText('4.2 HIPAA AND TEXAS LAW', 10, true);
        addText('Although non-medical, Contractors must follow HIPAA privacy standards and Texas confidentiality laws.', 9);
        yPosition += 3;

        addText('4.3 CONTINUING OBLIGATION', 10, true);
        addText('This confidentiality obligation continues indefinitely after the termination of this Agreement.', 9);
        addDivider();

        addText('5. NON-COMPETE AND NON-SOLICITATION', 12, true);
        
        addText('5.1 NON-COMPETE', 10, true);
        addBullet('For 12 months after termination of this Agreement, the Contractor shall not directly or indirectly provide similar caregiving services to any client introduced through SpringsCompanions or operate a competing caregiving business within a 30-mile radius of the Company\'s service area.', 3);
        yPosition += 3;

        addText('5.2 NON-SOLICITATION', 10, true);
        addText('The Contractor shall not solicit or accept direct employment or private arrangements with any Company client, client family member, or referral partner during or after the term of this Agreement.', 9);
        addDivider();

        addText('6. LIABILITY AND INSURANCE', 12, true);
        
        addText('6.1 LIABILITY', 10, true);
        addText('The Contractor assumes full responsibility for their actions and agrees to indemnify and hold SpringsCompanions harmless against any claims, damages, or losses arising from services performed.', 9);
        yPosition += 3;

        addText('6.2 INSURANCE', 10, true);
        addText('The Contractor is encouraged to maintain personal liability or professional insurance coverage suitable for caregiving work.', 9);
        addDivider();

        addText('7. TERMINATION', 12, true);
        
        addText('7.1 BY EITHER PARTY', 10, true);
        addText('Either party may terminate this Agreement with or without cause, upon written notice.', 9);
        yPosition += 3;

        addText('7.2 RETURN OF PROPERTY', 10, true);
        addText('Upon termination, the Contractor must return any Company materials, keys, or client-related information immediately.', 9);
        yPosition += 3;

        addText('7.3 OUTSTANDING PAYMENTS', 10, true);
        addText('The Contractor will be paid for all approved and completed hours worked prior to termination.', 9);
        addDivider();

        addText('8. DISPUTE RESOLUTION AND GOVERNING LAW', 12, true);
        
        addText('8.1 DISPUTE RESOLUTION', 10, true);
        addText('Both parties agree to attempt informal resolution of disputes before pursuing legal action.', 9);
        yPosition += 3;

        addText('8.2 GOVERNING LAW', 10, true);
        addText('This Agreement is governed by and construed in accordance with the laws of the State of Texas.', 9);
        addDivider();

        addText('9. SIGNATURES AND ACKNOWLEDGMENT', 12, true);
        addText('By signing below, both parties acknowledge that they have read, understood, and voluntarily agree to all terms of this Independent Contractor Agreement.', 9);
      }

      yPosition += 8;

      // SIGNATURE SECTION
      checkNewPage(100);
      doc.setFillColor(250, 250, 250);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.5);
      doc.rect(margin, yPosition - 5, contentWidth, 85, 'FD');
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      const sigTitle = agreementType === 'employee' ? 'EMPLOYEE SIGNATURE AND ACCEPTANCE' : 'CONTRACTOR SIGNATURE AND ACCEPTANCE';
      doc.text(sigTitle, margin + 5, yPosition);
      
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(80, 80, 80);
      doc.text('This serves as your electronic signature for company records. For hard copies, sign manually in the designated area.', margin + 5, yPosition + 6);
      
      yPosition += 15;
      
      // Full Legal Name
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Full Legal Name:', margin + 5, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      if (fullName) {
        doc.text(fullName, margin + 40, yPosition);
      }
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.4);
      doc.line(margin + 40, yPosition + 1.5, pageWidth - margin - 5, yPosition + 1.5);
      yPosition += 10;
      
      // Electronic Signature
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Electronic Signature:', margin + 5, yPosition);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(40, 40, 40);
      if (signature) {
        doc.setFontSize(11);
        doc.text(signature, margin + 40, yPosition);
        doc.setFontSize(9);
      }
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.4);
      doc.line(margin + 40, yPosition + 1.5, pageWidth - margin - 5, yPosition + 1.5);
      yPosition += 10;
      
      // Date of Agreement
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Date of Agreement:', margin + 5, yPosition);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      const displayDate = date || new Date().toLocaleDateString();
      doc.text(displayDate, margin + 40, yPosition);
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.4);
      doc.line(margin + 40, yPosition + 1.5, pageWidth - margin - 5, yPosition + 1.5);
      
      yPosition += 18;
      
      // Hard Copy Section
      doc.setFillColor(240, 248, 255);
      doc.setDrawColor(176, 196, 222);
      doc.setLineWidth(0.3);
      doc.rect(margin, yPosition - 3, contentWidth, 22, 'FD');
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('FOR HARD COPY RECORDS:', margin + 5, yPosition);
      yPosition += 7;
      
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.text('Handwritten Signature: _______________________________________________', margin + 5, yPosition);
      yPosition += 8;
      doc.text('Date: ______________________________', margin + 5, yPosition);
      
      yPosition += 15;
      addDivider();

      // CONTACT INFORMATION
      addText('QUESTIONS OR CONCERNS?', 11, true);
      addText('Springs Companions - Professional Senior Care Services', 9, true);
      addText('Email: info@springscompanions.com', 9);
      addText('Phone: (817) 449-6668', 9);
      addText('Website: springscompanions.com', 9);

      // Footer
      doc.setFontSize(7);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text(`Document Generated: ${new Date().toLocaleString()}`, pageWidth / 2, pageHeight - 15, { align: 'center' });
      doc.text('© 2025 Springs Companions - All Rights Reserved - Texas Compliant Agreement', pageWidth / 2, pageHeight - 10, { align: 'center' });

      // Save PDF
      const fileName = `Springs_Companions_${agreementType === 'employee' ? 'Employee' : 'Contractor'}_Agreement_${fullName || 'unsigned'}_${new Date().toISOString().split('T')[0]}.pdf`;
      doc.save(fileName);
      
      setIsSigned(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  const handleSignatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signature && fullName && date && isAgreed && agreementType) {
      generatePDF();
    }
  };

  const resetForm = () => {
    setIsSigned(false);
    setSignature('');
    setFullName('');
    setDate('');
    setIsAgreed(false);
    setAgreementType(null);
  };

  if (!agreementType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-3 rounded-full">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Springs Companions
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Professional Senior Care Services
            </p>
            <p className="text-gray-600 mb-8">
              Select your agreement type to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Employee Agreement Card */}
            <div
              onClick={() => setAgreementType('employee')}
              className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer p-8 transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Employment Agreement
              </h2>
              <p className="text-gray-600 mb-6">
                For direct employees of Springs Companions
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>At-will employment status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Benefits eligibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Workers' compensation coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Overtime compensation (1.5x)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Tax withholding included</span>
                </li>
              </ul>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all">
                Select Employee Agreement
              </button>
            </div>

            {/* Contractor Agreement Card */}
            <div
              onClick={() => setAgreementType('contractor')}
              className="bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer p-8 transform hover:scale-105"
            >
              <div className="mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contractor Agreement
              </h2>
              <p className="text-gray-600 mb-6">
                For independent contractors providing services
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Independent contractor status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>1099-NEC tax reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>No tax withholding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Non-solicitation clause included</span>
                </li>
              </ul>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                Select Contractor Agreement
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-6 shadow-lg border border-teal-200">
            <h3 className="font-bold text-teal-900 text-lg mb-4">Key Differences</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Employee</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Employer withholds taxes</li>
                  <li>• Eligible for benefits</li>
                  <li>• Workers' comp coverage</li>
                  <li>• Receives W-2 at year-end</li>
                  <li>• Overtime eligibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Contractor</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Responsible for own taxes</li>
                  <li>• No benefits provided</li>
                  <li>• No workers' comp coverage</li>
                  <li>• Receives 1099-NEC at year-end</li>
                  <li>• No overtime pay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-3 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {agreementType === 'employee' ? 'Caregiver Employment Agreement' : 'Independent Contractor Agreement'}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Springs Companions - Professional Terms of Service
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 text-sm flex-wrap">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-teal-200">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-gray-700">Texas Law Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-teal-200">
              <Clock className="w-4 h-4 text-teal-600" />
              <span className="text-gray-700">Updated {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-teal-200">
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="text-gray-700">HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {!isSigned ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-200">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">
                {agreementType === 'employee' ? 'Caregiver Employment Agreement' : 'Independent Contractor Agreement'}
              </h2>
              <p className="opacity-90">Comprehensive Terms of Service</p>
            </div>

            {/* Content Preview */}
            <div className="p-6 max-h-96 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {agreementType === 'employee' ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                          <UserCheck className="w-5 h-5" />
                          Employment Terms
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• At-will employment status</li>
                          <li>• Texas law compliant</li>
                          <li>• Equal opportunity employer</li>
                          <li>• Clear termination policies</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                          <DollarSign className="w-5 h-5" />
                          Compensation
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Competitive hourly rates</li>
                          <li>• 1.5x overtime pay (40+ hrs)</li>
                          <li>• Bi-weekly direct deposit</li>
                          <li>• Mileage reimbursement</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Professional Standards
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• HIPAA compliance required</li>
                          <li>• Strict confidentiality</li>
                          <li>• Professional boundaries</li>
                          <li>• Zero tolerance policies</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                          <Scale className="w-5 h-5" />
                          Texas Compliance
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Texas Payday Law</li>
                          <li>• Workers' compensation</li>
                          <li>• Break period compliance</li>
                          <li>• Anti-retaliation protections</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <Scale className="w-5 h-5" />
                          Contractor Status
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Independent contractor</li>
                          <li>• Full autonomy on methods</li>
                          <li>• Flexible assignments</li>
                          <li>• Texas law compliant</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <DollarSign className="w-5 h-5" />
                          Compensation
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Agreed hourly rates</li>
                          <li>• Bi-weekly payments</li>
                          <li>• 1099-NEC reporting</li>
                          <li>• No tax withholding</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Confidentiality
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• HIPAA compliance</li>
                          <li>• Strict confidentiality</li>
                          <li>• Indefinite obligation</li>
                          <li>• Client privacy protection</li>
                        </ul>
                      </div>

                      <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Important Restrictions
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 12-month non-compete</li>
                          <li>• 30-mile radius restriction</li>
                          <li>• No client solicitation</li>
                          <li>• Full liability assumption</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Signature className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-1">Electronic Signature</h3>
                      <p className="text-blue-700 text-sm">
                        Your typed name serves as your legally binding electronic signature. This agreement includes provisions for both digital records and hard copy documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="border-t border-teal-200 p-6 bg-white">
              <h3 className="text-lg font-semibold text-teal-900 mb-4">Complete Your Agreement</h3>

              <form onSubmit={handleSignatureSubmit} className="space-y-4">
                <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-1 w-5 h-5 text-teal-600 bg-white border-teal-300 rounded focus:ring-teal-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="agreement" className="text-sm text-teal-900 flex-1 cursor-pointer">
                    I certify that I have read, understood, and agree to all terms and conditions in this {agreementType === 'employee' ? 'Employment' : 'Contractor'} Agreement. I acknowledge that:
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• I have reviewed all sections of this agreement</li>
                      <li>• I understand my rights and obligations</li>
                      <li>• I will comply with all professional standards and confidentiality requirements</li>
                      <li>• My electronic signature has the same legal effect as a handwritten signature</li>
                    </ul>
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-teal-900 mb-2">
                      Full Legal Name (Printed) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white"
                      placeholder="Enter your full legal name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="signature" className="block text-sm font-medium text-teal-900 mb-2">
                      Electronic Signature <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="signature"
                      value={signature}
                      onChange={(e) => setSignature(e.target.value)}
                      className="w-full px-4 py-3 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white font-serif italic"
                      placeholder="Type your name as signature"
                      required
                    />
                    <p className="text-xs text-teal-600 mt-1">
                      This serves as your electronic signature
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-teal-900 mb-2">
                    Date of Agreement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white"
                    required
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 text-sm mb-2">What Happens Next?</h4>
                  <p className="text-blue-700 text-xs leading-relaxed">
                    Upon clicking "Sign & Download PDF Agreement", a comprehensive, professionally formatted PDF document will be generated containing all agreement terms, your signature, and the current date. This document serves as your official agreement with Springs Companions and should be retained for your records.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!isAgreed || !signature || !fullName || !date}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:hover:scale-100"
                >
                  <Signature className="w-5 h-5" />
                  Sign & Download PDF Agreement
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full px-6 py-2 border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 rounded-lg transition-colors font-semibold text-sm"
                >
                  Change Agreement Type
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-teal-200">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Agreement Successfully Executed!</h2>
            <p className="text-lg text-teal-700 mb-8 max-w-2xl mx-auto">
              Your {agreementType === 'employee' ? 'Employment' : 'Contractor'} Agreement has been signed and your professional PDF document has been downloaded to your device.
            </p>
            
            <div className="bg-teal-50 p-6 rounded-xl mb-8 max-w-md mx-auto border border-teal-200">
              <h3 className="font-semibold text-teal-900 mb-4">Agreement Details</h3>
              <div className="space-y-3 text-sm text-teal-800">
                <div className="flex justify-between items-center py-2 border-b border-teal-200">
                  <span className="font-medium">Agreement Type:</span>
                  <span className="font-semibold">{agreementType === 'employee' ? 'Employee' : 'Contractor'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-200">
                  <span className="font-medium">Full Name:</span>
                  <span className="font-semibold">{fullName}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-teal-200">
                  <span className="font-medium">Electronic Signature:</span>
                  <span className="font-semibold italic">{signature}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Agreement Date:</span>
                  <span className="font-semibold">{date}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8 text-left max-w-2xl mx-auto">
              <h4 className="font-semibold text-blue-800 mb-2">Next Steps</h4>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>✓ Save your downloaded PDF in a secure location</li>
                <li>✓ Print a copy for your records if desired</li>
                <li>✓ Review the complete agreement at your convenience</li>
                <li>✓ Contact HR if you have any questions: info@springscompanions.com</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generatePDF}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-300 text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors font-semibold shadow-sm hover:shadow-md"
              >
                <Download className="w-5 h-5" />
                Download Another Copy
              </button>
              <button
                onClick={resetForm}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 rounded-lg transition-colors font-semibold shadow-sm hover:shadow-md"
              >
                Create New Agreement
              </button>
            </div>
          </div>
        )}

        {/* Footer Information */}
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-teal-200">
            <div className="text-center mb-4">
              <h3 className="font-bold text-teal-900 text-lg mb-2">Springs Companions</h3>
              <p className="text-teal-700 mb-3">Professional Senior Care Services</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-teal-600">
                <span>📧 info@springscompanions.com</span>
                <span>📞 (817) 449-6668</span>
                <span>🌐 springscompanions.com</span>
              </div>
            </div>
            <div className="border-t border-teal-200 pt-4 mt-4">
              <p className="text-teal-600 text-xs text-center">
                This agreement complies with all applicable Texas Employment Laws including the Texas Payday Law, 
                Texas Minimum Wage Act, Texas Anti-Retaliation Act, Texas Workers' Compensation Act, 
                Fair Labor Standards Act (FLSA), and all applicable federal and state regulations.
              </p>
              <p className="text-teal-500 text-xs text-center mt-2">
                © {new Date().getFullYear()} Springs Companions. All Rights Reserved. | Last Updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverTermsOfService;