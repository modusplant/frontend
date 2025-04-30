// 1. 이메일 유효성 검사
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// 2. 비밀번호 유효성 검사 (숫자, 영어, 특수문자 포함 8자 이상 권장)
export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};

// 3. 닉네임 유효성 검사 (최소 2자, 최대 10자)
export const validateNickname = (nickname: string): boolean => {
  const length = nickname.trim().length;
  return length >= 2 && length <= 10;
};

// 4. 인증코드 유효성 검사 (6자리 숫자)
export const validateVerificationCode = (code: string): boolean => {
  const regex = /^\d{6}$/;
  return regex.test(code);
};
