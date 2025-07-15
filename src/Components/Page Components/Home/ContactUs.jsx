import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function ContactUs() {
  const validationSchema = yup.object().shape({
    FirstName: yup.string().required('First Name is required'),
    LastName: yup.string().required('Last Name is required'),
    Email: yup.string().email('Please provide a valid email').required('Email is required'),
    Subject: yup.string().required('Subject is required'),
    Message: yup.string().required('Message is required'),
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl py-10">
        
      
        <div className="p-4 sm:p-6 md:p-10">
          <Formik
            initialValues={{
              FirstName: '',
              LastName: '',
              Email: '',
              Subject: '',
              Message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              alert('Form submitted successfully!');
            }}
          >
            {({ isSubmitting }) => (
              <Form className="bg-white p-6 sm:p-10 rounded-2xl shadow-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
                  Contact Form
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="FirstName" className="block text-gray-700 mb-1">First Name</label>
                    <Field
                      name="FirstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <ErrorMessage name="FirstName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="LastName" className="block text-gray-700 mb-1">Last Name</label>
                    <Field
                      name="LastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                    <ErrorMessage name="LastName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="Email" className="block text-gray-700 mb-1">Email</label>
                  <Field
                    name="Email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <ErrorMessage name="Email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mt-4">
                  <label htmlFor="Subject" className="block text-gray-700 mb-1">Subject</label>
                  <Field
                    name="Subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <ErrorMessage name="Subject" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mt-4">
                  <label htmlFor="Message" className="block text-gray-700 mb-1">Message</label>
                  <Field
                    as="textarea"
                    name="Message"
                    placeholder="Write your notes or questions here..."
                    className="w-full p-4 border border-gray-200 rounded-2xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <ErrorMessage name="Message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mt-6 flex justify-center sm:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

       
        <div className="bg-white h-fit flex flex-col gap-6 p-6 sm:p-8 shadow-md rounded-xl w-full">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-gray-600">Address</div>
            <div>203 Fake St. Mountain View, San Francisco, California, USA</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-gray-600">Phone</div>
            <div>+1 232 3235 324</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-gray-600">Email Address</div>
            <div className="text-teal-500">contact@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
