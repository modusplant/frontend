interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  agreeAll: boolean;
  agree1: boolean;
  agree2: boolean;
  agreeMarketing: boolean;
}

export interface EmailSectionProps {
  email: string;
  onEmailChange: (email: string) => void;
  register: UseFormRegister<FormValues>;
  onVerifySuccess: () => void;
}

export interface TermsAgreementProps {
  registerAction: UseFormRegister<any>;
  toggleAllAction: (checked: boolean) => void;
}
