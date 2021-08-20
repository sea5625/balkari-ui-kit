export const PasswordValuePatternMatch = (x: any | string) => {
  return x.match(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_+|<>?:{}]).{8,}$/,
  );
};

export const EmailValuePatternMatch = (x: any | string) => {
  return x.match(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  );
};

export const PhoneNumberPatternMatch = (x: any | string) => {
  return x.match(/^[0-9-]+$/);
};
