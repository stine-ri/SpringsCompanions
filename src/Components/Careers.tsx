import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface FormData {
  firstName: string;
  lastName: string;
  preferredName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  cnaNumber: string;
  yearsExperience: string;
  howDidYouHear: string;
  aboutYou: string;
}

interface ValidationState {
  [key: string]: boolean;
}

const CaregiverApplication: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    preferredName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    cnaNumber: '',
    yearsExperience: '0',
    howDidYouHear: '',
    aboutYou: ''
  });

  const [touched, setTouched] = useState<ValidationState>({});
  const [errors, setErrors] = useState<ValidationState>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validateZip = (zip: string): boolean => {
    const zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(zip);
  };

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'address':
      case 'city':
      case 'state':
        return value.trim().length > 0;
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'zip':
        return validateZip(value);
      case 'cnaNumber':
        return value.trim().length > 0;
      case 'howDidYouHear':
        return value.trim().length > 0;
      default:
        return true;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const isValid = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: !isValid }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const isValid = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: !isValid }));
  };

  const getFieldStatus = (fieldName: string): 'valid' | 'invalid' | 'neutral' => {
    if (!touched[fieldName]) return 'neutral';
    if (errors[fieldName]) return 'invalid';
    if (formData[fieldName as keyof FormData]) return 'valid';
    return 'neutral';
  };

  const isFormValid = (): boolean => {
    const requiredFields: (keyof FormData)[] = [
      'firstName', 'lastName', 'address', 'city', 'state', 
      'zip', 'phone', 'email', 'cnaNumber', 'howDidYouHear'
    ];

    return requiredFields.every(field => {
      const value = formData[field];
      return validateField(field, value);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = Object.keys(formData);
    const touchedState: ValidationState = {};
    const errorState: ValidationState = {};

    allFields.forEach(field => {
      touchedState[field] = true;
      errorState[field] = !validateField(field, formData[field as keyof FormData]);
    });

    setTouched(touchedState);
    setErrors(errorState);

    if (!isFormValid()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Create WhatsApp message
    const message = `*New Caregiver Application - Springs Companions*\n\n` +
      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
      `*Preferred Name:* ${formData.preferredName || 'N/A'}\n` +
      `*Address:* ${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*CNA #:* ${formData.cnaNumber}\n` +
      `*Years Experience:* ${formData.yearsExperience}\n` +
      `*How They Heard:* ${formData.howDidYouHear}\n` +
      `*About:* ${formData.aboutYou || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/18174496668?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const ValidationIcon: React.FC<{ status: 'valid' | 'invalid' | 'neutral' }> = ({ status }) => {
    if (status === 'valid') {
      return <Check className="w-5 h-5 text-green-500" />;
    }
    if (status === 'invalid') {
      return <X className="w-5 h-5 text-red-500" />;
    }
    return null;
  };

  if (!showForm) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <div className="pt-[140px] sm:pt-[150px] relative bg-gradient-to-r from-teal-50 to-teal-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-8">CAREGIVER JOBS</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">
                  Apply for Caregiver Jobs! Ready to Become a Care Professional?
                </h2>
                
                <p className="text-gray-700 mb-4">
                  Springs Companions offers competitive compensation and flexible scheduling for those 
                  who are compassionate about providing{' '}
                  <a href="/services" className="text-teal-600 hover:underline">in home senior care</a>, elderly care,{' '}
                  <a href="/services#respite-care" className="text-teal-600 hover:underline">respite care</a>, and personal care services 
                  to persons in the Texas area. Licensed CNA registered in Texas is required.
                </p>

                <p className="text-gray-700 mb-8">
                  Springs Companions' in home caregivers provide companionship for seniors, elderly and others as well 
                  as assist in daily activities, such as:
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">👥</div>
                    <span className="text-gray-700">Companionship and Emotional Support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">❤️</div>
                    <span className="text-gray-700">Personal Care Services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">⏰</div>
                    <span className="text-gray-700">Respite Care</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">🧠</div>
                    <span className="text-gray-700">Dementia Care Support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">🏥</div>
                    <span className="text-gray-700">Post-Surgery Care Support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">🧠</div>
                    <span className="text-gray-700">Alzheimer's Care Support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">💊</div>
                    <span className="text-gray-700">Medication Management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">🚶</div>
                    <span className="text-gray-700">Mobility & Fall Risk Care</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">🕐</div>
                    <span className="text-gray-700">Around-the-Clock Care</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-900 mt-1">➕</div>
                    <span className="text-gray-700">Additional Services</span>
                  </div>
                </div>

                <p className="text-center text-gray-700 mb-8">
                  A career as a Springs Companions caregiver starts right here. Please fill out the application below.
                </p>

                <div className="text-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-teal-700 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    COMPLETE ONLINE APPLICATION
                  </button>
                </div>
              </div>

              {/* Right Column - Benefits */}
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-6">Why Join Our Team?</h3>
                <div className="bg-gradient-to-br from-teal-50 to-white rounded-lg p-6 shadow-lg border-2 border-teal-200">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Competitive Compensation</h4>
                        <p className="text-gray-600 text-sm">We value your hard work with fair and competitive pay</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Flexible Scheduling</h4>
                        <p className="text-gray-600 text-sm">Work schedules that fit your lifestyle and commitments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Ongoing Training</h4>
                        <p className="text-gray-600 text-sm">Continuous professional development and skill enhancement</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Supportive Environment</h4>
                        <p className="text-gray-600 text-sm">Join a team that values and supports each caregiver</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Make a Difference</h4>
                        <p className="text-gray-600 text-sm">Touch lives and bring joy to seniors every day</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Serve Texas Communities</h4>
                        <p className="text-gray-600 text-sm">Be part of improving senior care across the state</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info Box */}
                <div className="mt-8 bg-teal-700 text-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-3">Ready to Start?</h4>
                  <p className="text-teal-50 mb-4">
                    Join a team that truly cares about its caregivers and the seniors we serve. 
                    Your compassion can make all the difference.
                  </p>
                  <ul className="space-y-2 text-teal-50">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span>
                      <span className="text-sm">Dallas area opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span>
                      <span className="text-sm">Houston area opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span>
                      <span className="text-sm">San Antonio area opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span>
                      <span className="text-sm">Austin area opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Application Form View
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Form Header */}
      <div className="pt-[140px] sm:pt-[150px] relative bg-gradient-to-r from-teal-50 to-teal-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-900">ONLINE APPLICATION</h1>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8">
            Springs Companions Employment Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('firstName') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('firstName') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('firstName')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('lastName') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('lastName') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('lastName')} />
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Name
              </label>
              <input
                type="text"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Address Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('address') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('address') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('address')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('city') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('city') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('city')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={2}
                    placeholder="TX"
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('state') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('state') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('state')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="12345"
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('zip') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('zip') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('zip')} />
                  </div>
                </div>
                {touched.zip && errors.zip && (
                  <p className="mt-1 text-sm text-red-500">Please enter a valid ZIP code</p>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="(123) 456-7890"
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('phone') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('phone') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('phone')} />
                  </div>
                </div>
                {touched.phone && errors.phone && (
                  <p className="mt-1 text-sm text-red-500">Please enter a valid phone number</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('email') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('email') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('email')} />
                  </div>
                </div>
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
                )}
              </div>
            </div>

            {/* CNA and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CNA # <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cnaNumber"
                    value={formData.cnaNumber}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="CN"
                    className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                      getFieldStatus('cnaNumber') === 'invalid'
                        ? 'border-red-500 focus:ring-red-500'
                        : getFieldStatus('cnaNumber') === 'valid'
                        ? 'border-green-500 focus:ring-green-500'
                        : 'border-gray-300 focus:ring-teal-500'
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    <ValidationIcon status={getFieldStatus('cnaNumber')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years Experience <span className="text-red-500">*</span>
                </label>
                <select
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6-10">6-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>

            {/* How Did You Hear */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How Did You Hear About Us <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
                    getFieldStatus('howDidYouHear') === 'invalid'
                      ? 'border-red-500 focus:ring-red-500'
                      : getFieldStatus('howDidYouHear') === 'valid'
                      ? 'border-green-500 focus:ring-green-500'
                      : 'border-gray-300 focus:ring-teal-500'
                  }`}
                />
                <div className="absolute right-3 top-3.5">
                  <ValidationIcon status={getFieldStatus('howDidYouHear')} />
                </div>
              </div>
            </div>

            {/* About You */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What should Springs Companions know about you?
              </label>
              <textarea
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Tell us about yourself, your experience, and why you'd like to work with us..."
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-6 py-3 border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-teal-700 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaregiverApplication;