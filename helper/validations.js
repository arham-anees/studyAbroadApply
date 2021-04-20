export function isPhoneValid(phone) {
  try {
    if (!phone) return false;
    if (phone.length == 0) return false;
    let reg = phone.match(
      /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
    );
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}
export function isEmailValid(email) {
  try {
    if (!email) return false;
    if (email.length == 0) return false;
    let reg = email.match(/^[\w\.]+@([\w]+\.)+[\w-]{2,4}$/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}

export function isWebsiteValid(value) {
  try {
    if (!value) return false;
    if (value.length == 0) return false;
    let reg = value.match(/^[\w\.]+@([\w]+\.)+[\w-]{2,4}$/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}

export function isUsernameValid(value) {
  try {
    if (!value) return false;
    if (value.length == 0) return false;
    let reg = value.match(/^[\w\.]+@([\w]+\.)+[\w-]{2,4}$/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}

export function isPasswordValid(value) {
  try {
    return value && value.length >= 3;
    if (!value) return false;
    if (value.length == 0) return false;
    let reg = value.match(/[a-zA-Z0-9]{6,}/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}
