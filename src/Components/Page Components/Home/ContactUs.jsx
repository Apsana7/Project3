import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function ContactUs() {
  const personalDetails = [
    {
      name: 'FirstName',
      type: 'text',
      placeholder: 'Enter your first name',
    },
    {
      name: 'LastName',
      type: 'text',
      placeholder: 'Enter your last name',
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Your Email',
    },
    {
      name: 'Subject',
      type: 'text',
      placeholder: 'Your Subject',
    },
    {
      name: 'Message',
      type: 'textarea',
      placeholder: 'Your Message',
    },
  ];

  const validationSchema = yup.object().shape({
    FirstName: yup.string().required('First Name is required'),
    LastName: yup.string().required('Last Name is required'),
    Email: yup
      .string()
      .email('Please provide a valid email')
      .required('Email is required'),
    Subject: yup.string().required('Subject is required'),
    Message: yup.string().required('Message is required'),
  });

  return (
    <div className="w-full min-h-screen bg-gray-100  flex items-center justify-center">
      <div className="grid grid-cols-2 gap-20 w-8/12 py-20">
  
        <div className="p-4">
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
              <Form className="w-full flex flex-col gap-5 bg-white p-6 shadow-lg rounded-lg ">
                <h1 className="text-3xl font-semibold text-center">Contact Us</h1>

                {personalDetails.map((field, index) => (
                  <div key={index} className="flex flex-col items-center w-full">
                    <label
                      htmlFor={field.name}
                      className="text-gray-700 font-medium self-start mb-1 max-w-md"
                    >
                      {field.name}
                    </label>
                    <Field
                      as={field.type === 'textarea' ? 'textarea' : 'input'}
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`p-3 border border-gray-500 resize-none rounded-md w-full max-w-md ${
                        field.type === 'textarea' ? 'h-32' : ''
                      }`}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-600 text-sm mt-1 self-start max-w-md"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal-500 text-white p-3 rounded-md font-semibold transition-all w-fit max-w-md self-center"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>

       
        <div className="bg-white h-fit flex flex-col gap-4 p-4 shadow-md rounded-md">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-gray-600">Address</div>
            <div className="w-10/12">
              203 Fake St. Mountain View, San Francisco, California, USA
            </div>
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
