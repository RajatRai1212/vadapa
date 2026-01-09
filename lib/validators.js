export const isValidEmail = (email = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

export const isValidPhoneIN = (phone = "") => {
  const p = String(phone).replace(/[^\d]/g, "");
  return p.length >= 10 && p.length <= 13;
};
