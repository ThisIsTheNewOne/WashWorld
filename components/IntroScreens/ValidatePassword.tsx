export const validatePassword = (password: string): string | null => {
    if (!password) {
      return "Password cannot be empty";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    } else if (!/\d/.test(password)) {
      return "Password must contain at least one digit";
    } else if (!/[\W_]/.test(password)) {
      return "Password must contain at least one special character";
    } else if (/^(?=.*[a-zA-Z\d\W_])/.test(password)) {
      return "Password cannot be a common pattern or sequence";
    } else if (/\b(?:password|123456|qwerty)\b/i.test(password)) {
      return "Password cannot be a common word or phrase";
    } else if (/\b(?:name|birthday|address)\b/i.test(password)) {
      return "Password cannot contain easily guessable personal information";
    }
    
    return null; // Password is valid
  };

