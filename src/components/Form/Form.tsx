import { ReactNode } from 'react';

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  ref?: any;
}

export const Form = ({ children, ref, ...rest }: IFormProps) => {
  return (
    <form ref={ref} {...rest}>
      {children}
    </form>
  );
};

export default Form;
