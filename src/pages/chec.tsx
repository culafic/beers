// import React from "react";
// import { IBeer } from "../inteface";
// import "./CheckoutPage.css";
// import States from "../components/States";
// import * as Yup from "yup";
// import styled from "@emotion/styled";

// import { Formik, Form, useField } from "formik";

// interface CartPageProps {
//   cart: IBeer[];
// }

// // interface Values {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   street: string;
// //   city: string;
// //   isResidential: boolean;
// // }

// interface ITextInput {
//   label?: string;
//   type?: string;
//   id?: string;
//   name: string;
//   multiple?: boolean | undefined;
//   checked?: boolean | undefined;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   className?: string;
//   value?: string | any;
// }

// const MyTextInput: React.FC<ITextInput> = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input> and also replace ErrorMessage entirely.
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// interface IMyCheckbox {
//   children: string;
//   name: string;
//   multiple?: boolean;
//   checked?: boolean | undefined;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   className?: string;
//   value?: string | any;
// }

// const MyCheckbox: React.FC<IMyCheckbox> = ({ children, ...props }) => {
//   // We need to tell useField what type of input this is
//   // since React treats radios and checkboxes differently
//   // than inputs/select/textarea.
//   const [field, meta] = useField({ ...props, type: "checkbox" });
//   return (
//     <>
//       <label className="checkbox">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// //Styled components ....
// const StyledSelect = styled.select`
//   /** ... * /
// `;

// const StyledErrorMessage = styled.div`
//   /** ... * /
// `;

// const StyledLabel = styled.label`
//  /** ...* /
// `;

// interface ISelect {
//   label?: string;
//   type?: string;
//   id?: string;
//   name: string;
//   multiple?: boolean;
//   checked?: boolean;
//   onChange?: (
//     e:
//       | React.ChangeEvent<HTMLTextAreaElement>
//       | React.ChangeEvent<HTMLSelectElement>
//   ) => void;
//   onBlur?: (
//     e:
//       | React.FocusEvent<HTMLTextAreaElement>
//       | React.ChangeEvent<HTMLSelectElement>
//   ) => void;
//   //onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   className?: string;
//   value?: string | number | string[];
// }

// // interface IField {
// //   label?: string;
// //   type?: string;
// //   id?: string;
// //   name: string;
// //   multiple?: boolean;
// //   checked?: boolean;
// //   onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
// //   onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// //   className?: string;
// //   value?: string;
// // }

// const MySelect: React.FC<ISelect> = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <StyledSelect {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <StyledErrorMessage>{meta.error}</StyledErrorMessage>
//       ) : null}
//     </>
//   );
// };

// const CheckoutPage: React.FC<CartPageProps> = ({ cart }) => {
//   return (
//     <div className="place-form">
//       <p>You are buying {cart.length} items</p>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           street: "",
//           city: "",
//           isResidential: false,
//           state: ""
//         }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, "Must be 15 characters or less")
//             .required("Required"),
//           lastName: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("Required"),
//           street: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           city: Yup.string()
//             .max(20, "Must be 20 characters or less")
//             .required("Required"),
//           isResidential: Yup.boolean()
//             .required("Required")
//             .oneOf([true], "You must accept the terms and conditions")
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         <Form className="field-group">
//           <div className="form-control">
//             <label htmlFor="firstName">First Name</label>
//             <MyTextInput type="text" id="firstName" name="firstName" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="lastName">Last Name</label>
//             <MyTextInput type="text" id="lastName" name="lastName" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="email">Email</label>
//             <MyTextInput type="email" id="email" name="email" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="street">Street</label>
//             <MyTextInput type="text" id="street" name="street" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="city">City</label>
//             <MyTextInput type="text" id="city" name="city" />
//           </div>

//           <div className="form-control">
//             <MySelect label="State" name="state">
//               <States />
//             </MySelect>
//           </div>
//           <MyCheckbox name="isResidential">
//             I accept the terms and conditions
//           </MyCheckbox>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default CheckoutPage;

import React from "react";

export default function chec() {
  return <div></div>;
}
